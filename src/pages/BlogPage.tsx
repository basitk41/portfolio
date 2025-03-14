import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaSearch, FaClock } from "react-icons/fa";

import { blogPosts } from "@/data/blog-posts";
import {
  PageContainer,
  PageHeader,
  PageTitle,
  PageDescription,
  FilterContainer,
  SearchInput,
  SearchIcon,
  TagsFilter,
  TagButton,
  PostsGrid,
  PostCard,
  PostImage,
  PostContent,
  PostTitle,
  PostMeta,
  ReadTime,
  PostSummary,
  TagsContainer,
  Tag,
  ReadMoreButton,
  NoResultsMessage,
  SearchBox,
} from "./BlogPage.styles";

const BlogPage = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  // Extract all unique tags from blog posts
  const allTags = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags))
  ).sort();

  // Filter posts based on search term and selected tag
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;

    return matchesSearch && matchesTag;
  });

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>{t("blog.title")}</PageTitle>
        <PageDescription>
          Thoughts on web development, AI, and modern technology trends.
        </PageDescription>

        <FilterContainer>
          <SearchBox>
            <SearchIcon>
              <FaSearch />
            </SearchIcon>
            <SearchInput
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchBox>

          <TagsFilter>
            <TagButton
              $active={selectedTag === ""}
              onClick={() => setSelectedTag("")}
            >
              All
            </TagButton>

            {allTags.map((tag) => (
              <TagButton
                key={tag}
                $active={selectedTag === tag}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </TagButton>
            ))}
          </TagsFilter>
        </FilterContainer>
      </PageHeader>

      <PostsGrid>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <PostCard key={post.id}>
              <PostImage
                style={{
                  backgroundImage: `url(${
                    post.image || "./images/blog-placeholder.jpg"
                  })`,
                }}
              />
              <PostContent>
                <PostTitle>{post.title}</PostTitle>

                <PostMeta>
                  <span>{formatDate(post.date)}</span>
                  <ReadTime>
                    <FaClock size={12} />
                    {post.readTime} {t("blog.minuteRead")}
                  </ReadTime>
                </PostMeta>

                <PostSummary>{post.summary}</PostSummary>

                <TagsContainer>
                  {post.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </TagsContainer>

                <ReadMoreButton to={`/blog/${post.id}`}>
                  {t("blog.readMore")}
                </ReadMoreButton>
              </PostContent>
            </PostCard>
          ))
        ) : (
          <NoResultsMessage>
            No posts found matching your search criteria.
          </NoResultsMessage>
        )}
      </PostsGrid>
    </PageContainer>
  );
};

export default BlogPage;
