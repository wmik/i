import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`;

const markStyle = css`
  display: inline;
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    rgba(255, 250, 150, 0.15),
    rgba(255, 250, 150, 0.8) 100%,
    rgba(255, 250, 150, 0.25)
  );
`;

const MarkedHeader = styled.h1`
  ${markStyle}
`;

const HeaderDate = styled.h3`
  margin-top: 10px;
  color: #606060;
`;

// STYLE THE TAGS INSIDE THE MARKDOWN HERE
const MarkdownContent = styled.div`
  a {
    text-decoration: none;
    position: relative;

    background-image: linear-gradient(
      rgba(255, 250, 150, 0.8),
      rgba(255, 250, 150, 0.8)
    );
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 88%;
    transition: background-size 0.25s ease-in;
    &:hover {
      background-size: 100% 88%;
    }
  }
`;

const TagList = styled.ul`
  list-style-type: none;
  display: flex;
  padding-top: 3rem;
  margin: 0;
`;

const Tag = styled.li`
  ${markStyle}
  margin-right: 0.5rem;
  > a {
    text-decoration: none;
  }
`;

export default function BlogPost({ data }) {
  let post = data.markdownRemark;
  let { title, date, description, tags } = post.frontmatter;

  let tagComponentList = tags.map(tag => (
    <Tag key={tag}>
      <a href={`/tags/${tag}`}>{tag}</a>
    </Tag>
  ));

  return (
    <Layout>
      <SEO title={title} description={description || post.excerpt} />
      <Content>
        <MarkedHeader>{title}</MarkedHeader>
        <HeaderDate>
          {date} - {post.fields.readingTime.text}
        </HeaderDate>
        <MarkdownContent dangerouslySetInnerHTML={{ __html: post.html }} />
        <TagList>{tagComponentList}</TagList>
      </Content>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        path
        title
        tags
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`;
