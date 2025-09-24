import React from 'react';

import Layout from '../components/layout';
import { CustomHead } from '../components/head';

export default function NotFoundPage() {
  return (
    <Layout>
      <h1>NOT FOUND</h1>
      <p>Oops! Looks like you're lost.</p>
    </Layout>
  );
}

export function Head() {
  let title = '404: Not found';
  let keywords = ['wmik', 'personal', 'blog', 'website'];

  return <CustomHead title={title} keywords={keywords} />;
}
