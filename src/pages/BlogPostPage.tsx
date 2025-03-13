import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import styled from "styled-components";
import { FaArrowLeft, FaClock, FaCalendarAlt, FaTag } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

import { blogPosts } from "@/data/blog-posts";

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  padding: 0.5rem 0;
  color: var(--text-secondary);
  cursor: pointer;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  margin-bottom: 2rem;

  &:hover {
    color: var(--primary);
  }
`;

const PostHeader = styled.header`
  margin-bottom: 2rem;
`;

const PostTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PostInfo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
`;

const PostInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
`;

const FeaturedImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const Tag = styled.span`
  background-color: var(--bg-alternate);
  color: var(--text-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const PostContent = styled.div`
  line-height: 1.8;
  font-size: 1.05rem;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.75rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  ul,
  ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  blockquote {
    border-left: 4px solid var(--primary);
    padding-left: 1rem;
    font-style: italic;
    margin: 1.5rem 0;
    color: var(--text-secondary);
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 0.25rem;
  }

  pre {
    margin-bottom: 1.5rem;
    border-radius: 0.5rem;
  }

  code {
    font-family: "Fira Code", monospace;
  }

  a {
    color: var(--primary);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const NotFound = styled.div`
  text-align: center;
  padding: 4rem 2rem;
`;

const NotFoundTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Find the post
  const post = blogPosts.find((post) => post.id === id);

  // Go back function
  const goBack = () => {
    navigate(-1);
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  // If post not found
  if (!post) {
    return (
      <PageContainer>
        <NotFound>
          <NotFoundTitle>Blog post not found</NotFoundTitle>
          <p>
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <BackButton onClick={goBack}>
            <FaArrowLeft /> Go back
          </BackButton>
        </NotFound>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <BackButton onClick={goBack}>
        <FaArrowLeft /> {t("blog.title")}
      </BackButton>

      <PostHeader>
        <PostTitle>{post.title}</PostTitle>

        <PostInfo>
          <PostInfoItem>
            <FaCalendarAlt size={14} />
            {formatDate(post.date)}
          </PostInfoItem>

          <PostInfoItem>
            <FaClock size={14} />
            {post.readTime} {t("blog.minuteRead")}
          </PostInfoItem>
        </PostInfo>

        <TagsContainer>
          {post.tags.map((tag, index) => (
            <Tag key={index}>
              <FaTag size={12} />
              {tag}
            </Tag>
          ))}
        </TagsContainer>
      </PostHeader>

      <FeaturedImage
        src={post.image || "./images/blog-placeholder.jpg"}
        alt={post.title}
      />

      <PostContent>
        <ReactMarkdown
          components={{
            // @ts-ignore
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  // @ts-ignore
                  style={tomorrow}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {post.content}
        </ReactMarkdown>
      </PostContent>
    </PageContainer>
  );
};

export default BlogPostPage;
