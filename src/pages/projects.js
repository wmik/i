import React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import { CustomHead } from '../components/head';

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

const ImagePlaceholder = styled.div`
  background-color: rgb(210, 210, 210);
  border-radius: 8px;
  height: 320px;
  width: 100%;
  margin-bottom: 12px;
`;

function ProjectDemoPreview({ node, image }) {
  return (
    <div>
      <Link
        to={node.frontmatter.path}
        css={css`
          text-decoration: none;
          color: inherit;
        `}
      >
        {image ? image : <ImagePlaceholder />}
        <MarkerHeader>{node.frontmatter.title} </MarkerHeader>
        <div>
          <ArticleDate>Scope: {node.frontmatter.duration}</ArticleDate>
          <ReadingTime> - {node.frontmatter.budget} budget</ReadingTime>
        </div>
        <p>{node.excerpt}</p>
      </Link>
    </div>
  );
}

export default function ProjectsPage({ data }) {
  let projects = data.allMarkdownRemark.edges.filter(publishedBeforeToday);
  let previewList = projects.map(({ node }) => {
    let image = data.allFile.edges.find(
      edge => edge.node.relativePath === node.frontmatter.featuredImageUrl
    );

    let imageComponent = null;

    if (
      image &&
      image.node.childImageSharp &&
      image.node.childImageSharp.gatsbyImageData
    ) {
      imageComponent = (
        <GatsbyImage
          image={getImage(image.node.childImageSharp.gatsbyImageData)}
          style={{ borderRadius: 8, marginBottom: 16 }}
          alt={node.frontmatter.featuredImageAlt}
        />
      );
    }

    return (
      <ProjectDemoPreview node={node} key={node.id} image={imageComponent} />
    );
  });

  return (
    <Layout>
      <Content>
        <h1>Projects</h1>
        {previewList}
      </Content>
    </Layout>
  );
}

export function Head() {
  let title = 'Projects';
  let keywords = ['wmik', 'personal', 'projects', 'website'];

  return <CustomHead title={title} keywords={keywords} />;
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { draft: { eq: false }, demo: { eq: true } } }
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
            featuredImageUrl
            featuredImageAlt
            duration
            budget
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
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData
          }
          relativePath
        }
      }
    }
  }
`;

function publishedBeforeToday({ node }) {
  let { rawDate } = node.frontmatter;
  let publishDate = new Date(rawDate);
  return publishDate < new Date();
}
