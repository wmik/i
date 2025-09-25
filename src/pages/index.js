import React from 'react';

import LandingBio from '../components/landing-bio';
import Layout from '../components/layout';
import { CustomHead } from '../components/head';

export default function IndexPage() {
  return (
    <Layout>
      <LandingBio />
    </Layout>
  );
}

export function Head() {
  let title = 'Home';
  let keywords = ['wmik', 'personal', 'blog', 'website'];

  return <CustomHead title={title} keywords={keywords} />;
}
