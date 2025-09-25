import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import { ExternalLink } from '../components/link';
import { CustomHead } from '../components/head';

const Content = styled.article`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`;

export default function AboutPage() {
  return (
    <Layout>
      <Content>
        <h1>About</h1>
        <p>Hey there!</p>
        <p>
          I'm Willie M.I.K. I create digital solutions and consult for
          businesses globally.
        </p>
        <ExternalLink href="mailto:contact@wmik.me" style={{ marginLeft: 0 }}>
          Get in touch &rarr;
        </ExternalLink>
      </Content>
    </Layout>
  );
}

export function Head() {
  let title = 'About';
  let keywords = ['wmik', 'personal', 'blog', 'website'];

  return <CustomHead title={title} keywords={keywords} />;
}
