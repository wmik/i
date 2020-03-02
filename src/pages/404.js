import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function NotFoundPage() {
  let title = '404: Not found';

  return (
    <Layout>
      <SEO title={title} />
      <h1>NOT FOUND</h1>
      <p>Oops! Looks like you're lost.</p>
    </Layout>
  );
}

export default NotFoundPage;
