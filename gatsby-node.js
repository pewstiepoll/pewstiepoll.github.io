/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');

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

    createPage({
      path: '/',
      component: homepageTemplate,
      context: {
        posts: result.data.posts.edges.map(edge => edge.node.frontmatter),
      },
    });
  });
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return createHomepage(createPage, graphql);
};
