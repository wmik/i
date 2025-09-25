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

const PostTitleList = styled.ul`
  margin: 0;
  list-style-type: none;
`;

function PostTitle({ node }) {
  return (
    <li>
      <Link
        to={node.frontmatter.path}
        css={css`
          text-decoration: none;
          color: inherit;
        `}
      >
        <MarkerHeader>{node.frontmatter.title} </MarkerHeader>
      </Link>
    </li>
  );
}

export default function TagPage({ pageContext, data }) {
  let { tag } = pageContext;
  let { edges } = data.allMarkdownRemark;

  let posts = edges.filter(publishedBeforeToday);

  let postTitleList = posts.map(({ node }) => (
    <PostTitle node={node} key={node.id} />
  ));

  return (
    <Layout>
      <Content>
        <h1>{tag}</h1>
        <PostTitleList>{postTitleList}</PostTitleList>
      </Content>
    </Layout>
  );
}

export function Head({ pageContext }) {
  let title = pageContext.tag;

  return <CustomHead title={title} />;
}

export const query = graphql`
  query ($tag: String) {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            path
          }
        }
      }
    }
  }
`;

function publishedBeforeToday({ node }) {
  let { date } = node.frontmatter;
  let publishDate = new Date(date);
  return publishDate < new Date();
}
