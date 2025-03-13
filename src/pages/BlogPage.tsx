import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { FaSearch, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

import { blogPosts } from "@/data/blog-posts";

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const PageHeader = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const PageDescription = styled.p`
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto 2rem;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const SearchBox = styled.div`
  position: relative;
  flex: 1;
  max-width: 400px;

  @media (max-width: 768px) {
    max-width: none;
    width: 100%;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  background-color: var(--bg-alternate);
  color: var(--text-primary);

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
`;

const TagsFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TagButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  background-color: ${(props) =>
    props.$active ? "var(--primary)" : "var(--bg-alternate)"};
  color: ${(props) => (props.$active ? "white" : "var(--text-primary)")};
  cursor: pointer;
  font-size: 0.875rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.$active ? "var(--primary-dark)" : "var(--bg-highlight)"};
  }
`;

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`;

const PostCard = styled.article`
  background-color: var(--bg-secondary);
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`;

const PostImage = styled.div`
  height: 200px;
  background-color: var(--bg-alternate);
  background-size: cover;
  background-position: center;
`;

const PostContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const PostTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const PostMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  color: var(--text-secondary);
  font-size: 0.875rem;
`;

const ReadTime = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const PostSummary = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  background-color: var(--bg-alternate);
  color: var(--text-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
`;

const ReadMoreButton = styled(Link)`
  display: inline-block;
  background-color: var(--bg-alternate);
  color: var(--text-primary);
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  text-decoration: none;
  text-align: center;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--primary);
    color: white;
    text-decoration: none;
  }
`;

const NoResultsMessage = styled.div`
  text-align: center;
  padding: 3rem;
  grid-column: 1 / -1;
  color: var(--text-secondary);
  font-size: 1.1rem;
`;

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
