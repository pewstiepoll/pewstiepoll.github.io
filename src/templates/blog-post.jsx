import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default function BlogPost({ data }) {
  const {
    frontmatter: { title },
    html,
  } = data.markdownRemark;
  return (
    <Layout>
      <h2 style={{ margin: 0 }}>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

BlogPost.propTypes = {
  data: PropTypes.shape(Object).isRequired,
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
