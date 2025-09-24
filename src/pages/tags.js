import React from 'react';
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import { CustomHead } from '../components/head';

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

export default function TagsPage({ data }) {
  let tags = data.allMarkdownRemark.group;

  let tagList = tags.map(tag => <Tag data={tag} />);

  return (
    <Layout>
      <Content>
        <h1>All tags</h1>
        <TagList>{tagList}</TagList>
      </Content>
    </Layout>
  );
}

export function Head() {
  let title = 'Tags';
  let keywords = ['wmik', 'personal', 'blog', 'website'];

  return <CustomHead title={title} keywords={keywords} />;
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`;
