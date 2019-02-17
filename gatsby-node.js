/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

function createHomepage(createPage, graphql) {
  const homepageTemplate = path.resolve(
    __dirname,
    'src/templates/homepage.jsx'
  );

  return graphql(`
    {
      posts: allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              description
              date
              category
              image
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) return Promise.reject(result.errors);

    return createPage({
      path: '/',
      component: homepageTemplate,
      context: {
        posts: result.data.posts.edges.map(edge => edge.node.frontmatter),
      },
    });
  });
}

function createPostsPages(createPage, graphql) {
  const blogPostTemplate = path.resolve(
    __dirname,
    'src/templates/blog-post.jsx'
  );

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    const { edges } = result.data.allMarkdownRemark;
    const postPagePath = postSlug => `posts${postSlug}`;

    edges.forEach(({ node }) =>
      createPage({
        path: postPagePath(node.fields.slug),
        component: blogPostTemplate,
        context: {
          slug: node.fields.slug,
        },
      })
    );
  });
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const { createNodeField } = actions;
    const slug = createFilePath({ node, getNode, basePath: 'pages' });

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return Promise.all([
    createHomepage(createPage, graphql),
    createPostsPages(createPage, graphql),
  ]);
};
