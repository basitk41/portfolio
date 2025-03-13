import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaArrowRight, FaClock } from "react-icons/fa";

import { blogPosts } from "@/data/blog-posts";

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
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

const PostSummary = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
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

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  background-color: var(--bg-alternate);
  color: var(--text-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
`;

const ReadMoreLink = styled(Link)`
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    color: var(--primary-dark);
    text-decoration: none;

    svg {
      transform: translateX(4px);
    }
  }
`;

const ViewAllLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;
  font-weight: 600;
  color: var(--primary);
  text-decoration: none;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    color: var(--primary-dark);

    svg {
      transform: translateX(4px);
    }
  }
`;

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
