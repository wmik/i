import React from 'react';
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`;

const ArticleDate = styled.h5`
  display: inline;
  color: #606060;
`;

const MarkerHeader = styled.h3`
  display: inline;
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    rgba(255, 250, 150, 0.15),
    rgba(255, 250, 150, 0.8) 100%,
    rgba(255, 250, 150, 0.25)
  );
`;

const ReadingTime = styled.h5`
  display: inline;
  color: #606060;
`;

function BlogPostPreview({ node }) {
  return (
    <div>
      <Link
        to={node.frontmatter.path}
        css={css`
          text-decoration: none;
          color: inherit;
        `}
      >
        <MarkerHeader>{node.frontmatter.title} </MarkerHeader>
        <div>
          <ArticleDate>{node.frontmatter.date}</ArticleDate>
          <ReadingTime> - {node.fields.readingTime.text}</ReadingTime>
        </div>
        <p>{node.excerpt}</p>
      </Link>
    </div>
  );
}

function IndexPage({ data }) {
  let title = 'Blog';
  let posts = data.allMarkdownRemark.edges.filter(publishedBeforeToday);
  let previewList = posts.map(({ node }) => (
    <BlogPostPreview node={node} key={node.id} />
  ));

  return (
    <Layout>
      <SEO title={title} />
      <Content>
        <h1>Blog</h1>
        {previewList}
      </Content>
    </Layout>
  );
}

function publishedBeforeToday({ node }) {
  let { rawDate } = node.frontmatter;
  let publishDate = new Date(rawDate);
  return publishDate < new Date();
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            rawDate: date
            path
          }
          fields {
            slug
            readingTime {
              text
            }
          }
          excerpt
        }
      }
    }
  }
`;

export default IndexPage;
