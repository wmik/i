const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

function onCreateNode({ node, getNode, actions }) {
  if (node.internal.type === 'MarkdownRemark') {
    let slug = createFilePath({ node, getNode, basePath: 'pages' });

    actions.createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
}

const QUERY_MARKDOWN = `
  {
    postsRemark: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
            draft
            date
          }
          fields {
            slug
          }
        }
      }
    }
    tagsGroup: allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
`;

async function createPages({ graphql, actions }) {
  let result = await graphql(QUERY_MARKDOWN);

  if (result.errors) {
    return Promise.reject(result.errors);
  }

  let blogPostTemplate = path.resolve('src/templates/blog-post.js');

  let posts = result.data.postsRemark.edges.filter(
    ({ node }) => !node.frontmatter.draft
  );

  posts.forEach(({ node }) =>
    actions.createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      slug: node.fields.slug,
      context: {},
    })
  );

  let tagTemplate = path.resolve('src/templates/tags.js');
  let tags = result.data.tagsGroup.group;

  tags.forEach(tag =>
    actions.createPage({
      path: `tags/${tag.fieldValue}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  );
}

module.exports = {
  onCreateNode,
  createPages,
};
