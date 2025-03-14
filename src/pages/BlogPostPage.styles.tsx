import styled from "styled-components";

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

export {
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
};
