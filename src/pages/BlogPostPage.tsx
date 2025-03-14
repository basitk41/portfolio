import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { FaArrowLeft, FaClock, FaCalendarAlt, FaTag } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

import { blogPosts } from "@/data/blog-posts";
import {
  PageContainer,
  BackButton,
  PostHeader,
  PostTitle,
  PostInfo,
  PostInfoItem,
  FeaturedImage,
  TagsContainer,
  Tag,
  PostContent,
  NotFound,
  NotFoundTitle,
} from "./BlogPostPage.styles";

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
          <NotFoundTitle>{t("blog.noPostsFound")}</NotFoundTitle>
          <p>{t("blog.noPostsFoundDescription")}</p>
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
