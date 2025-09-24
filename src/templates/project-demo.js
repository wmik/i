import React from 'react';
import { graphql } from 'gatsby';
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

const ImagePlaceholder = styled.div`
  background-color: rgb(210, 210, 210);
  border-radius: 8px;
  height: 320px;
  width: 100%;
  margin-bottom: 16px;
`;

const DemoLink = styled.a`
  margin-top: 10px;
  color: #606060;
  display: block;
  margin: 16px 0;
  &:hover {
    color: rgb(0, 125, 250);
  }
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

export default function ProjectDemoPage({ data }) {
  let project = data.markdownRemark;
  let { title, tags, url, featuredImageAlt } = project.frontmatter;
  let image = data.file;

  let tagComponentList = tags.map(tag => (
    <Tag key={tag}>
      <a href={`/tags/${tag}`}>{tag}</a>
    </Tag>
  ));

  return (
    <Layout>
      <Content>
        {image ? (
          <GatsbyImage
            image={getImage(image.childImageSharp.gatsbyImageData)}
            style={{ borderRadius: 8, marginBottom: 16 }}
            alt={featuredImageAlt}
          />
        ) : (
          <ImagePlaceholder />
        )}
        <MarkedHeader>{title}</MarkedHeader>
        <DemoLink href={url} children="Live Demo" target="_blank" />
        <MarkdownContent dangerouslySetInnerHTML={{ __html: project.html }} />
        <TagList>{tagComponentList}</TagList>
      </Content>
    </Layout>
  );
}

export function Head({ data, location }) {
  let project = data.markdownRemark;
  let { title, description, tags } = project.frontmatter;
  let keywords = ['wmik', 'personal', 'blog', 'website'];

  return (
    <CustomHead
      description={description || project.excerpt}
      title={title}
      keywords={tags ?? keywords}
      pathname={location.pathname}
    />
  );
}

export const query = graphql`
  query ($path: String!, $featuredImageUrl: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        path
        title
        tags
        url
        featuredImageAlt
      }
      fields {
        readingTime {
          text
        }
      }
    }
    file(relativePath: { eq: $featuredImageUrl }) {
      relativePath
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;
