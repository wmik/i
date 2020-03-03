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

const TagList = styled.ul`
  margin: 0;
  list-style-type: none;
`;

function Tag({ data }) {
  return (
    <li>
      <Link
        to={`/tags/${data.fieldValue}`}
        css={css`
          text-decoration: none;
          color: inherit;
        `}
      >
        <MarkerHeader>
          {data.fieldValue} ({data.totalCount})
        </MarkerHeader>
      </Link>
    </li>
  );
}

function IndexPage({ data }) {
  let title = 'Tags';
  let tags = data.allMarkdownRemark.group;

  let tagList = tags.map(tag => <Tag data={tag} />);

  return (
    <Layout>
      <SEO title={title} />
      <Content>
        <h1>All tags</h1>
        <TagList>{tagList}</TagList>
      </Content>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default IndexPage;
