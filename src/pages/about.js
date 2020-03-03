import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { ExternalLink } from '../components/link';

const Content = styled.article`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`;

function AboutPage() {
  let title = 'About';

  return (
    <Layout>
      <SEO title={title} />
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

export default AboutPage;
