import React from 'react';

import LandingBio from '../components/landing-bio';
import Layout from '../components/layout';
import SEO from '../components/seo';

function IndexPage() {
  let title = 'Home';
  let keywords = ['wmik', 'personal', 'blog', 'website'];

  return (
    <Layout>
      <SEO title={title} keywords={keywords} />
      <LandingBio />
    </Layout>
  );
}

export default IndexPage;
