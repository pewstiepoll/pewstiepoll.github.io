import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import PostSection from '../components/posts-section/posts-section';

export default function HomePage({ data }) {
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <PostSection title="Latest Posts">
        {({ Post }) =>
          edges.map(({ node }) => (
            <Post
              key={node.fields.slug}
              {...node.frontmatter}
              link={`posts${node.fields.slug}`}
            />
          ))
        }
      </PostSection>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date
            description
            image
            category
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

HomePage.propTypes = {
  data: PropTypes.shape(Object).isRequired,
};
