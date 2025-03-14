import { useTranslation } from "react-i18next";
import { FaArrowRight, FaClock } from "react-icons/fa";

import { blogPosts } from "@/data/blog-posts";
import {
  PostsContainer,
  PostCard,
  PostImage,
  PostContent,
  PostTitle,
  PostMeta,
  ReadTime,
  PostSummary,
  TagsContainer,
  Tag,
  ReadMoreLink,
  ViewAllLink,
} from "./FeaturedPosts.styles";

const FeaturedPosts = () => {
  const { t } = useTranslation();

  // Get only featured posts (max 3)
  const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 3);

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
    <>
      <PostsContainer>
        {featuredPosts.map((post) => (
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
                {post.tags.slice(0, 3).map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
                {post.tags.length > 3 && <Tag>+{post.tags.length - 3}</Tag>}
              </TagsContainer>

              <ReadMoreLink to={`/blog/${post.id}`}>
                {t("blog.readMore")} <FaArrowRight size={12} />
              </ReadMoreLink>
            </PostContent>
          </PostCard>
        ))}
      </PostsContainer>

      <ViewAllLink to="/blog">
        {t("blog.title")} <FaArrowRight size={14} />
      </ViewAllLink>
    </>
  );
};

export default FeaturedPosts;
