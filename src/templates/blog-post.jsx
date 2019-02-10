import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default function BlogPost({ data }) {
  const {
    frontmatter: { title },
    html,
  } = data.markdownRemark;
  return (
    <Layout>
      <h3>{title}</h3>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

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
