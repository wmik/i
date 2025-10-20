import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const QUERY_SITE = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

export function CustomHead({
  description,
  title,
  keywords = [],
  image,
  pathname,
  children
}) {
  let { site } = useStaticQuery(QUERY_SITE);
  let metaDescription = description || site.siteMetadata.description;
  let metaTitle = title
    ? `${title} | ${site.siteMetadata.title}`
    : site.siteMetadata.title;
  let canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null;
  let metaImage = image ? `${site.siteMetadata.siteUrl}${image}` : null;

  return (
    <>
      <html lang="en" />
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />

      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}

      {/* Open Graph */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      {metaImage && <meta property="og:image" content={metaImage} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {metaImage && <meta name="twitter:image" content={metaImage} />}

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Additional meta tags passed as children */}
      {children}
      <script
        key="simple-analytics"
        data-collect-dnt="true"
        async
        src="https://scripts.simpleanalyticscdn.com/latest.js"
      />,
      <noscript key="simple-analytics-noscript">
        <img
          src="https://queue.simpleanalyticscdn.com/noscript.gif?collect-dnt=true"
          alt=""
          referrerpolicy="no-referrer-when-downgrade"
        />
      </noscript>
    </>
  );
}
