import React from 'react';

import Layout from '../components/layout';

function sortByCategories(posts) {
  return posts.reduce((categories, post) => {
    // If categories doesn't have a category of incomming post - create it
    if (!categories[post.category])
      return { ...categories, [post.category]: [post] };

    // Otherwise just add post to an existing category
    return {
      ...categories,
      [post.category]: [...categories[post.category], post],
    };
  }, {});
}

function pickFirstOfEachCategory(sortedPosts) {
  return Object.entries(sortedPosts).reduce((result, [category, posts]) => {
    return { ...result, [category]: posts[0] };
  }, {});
}

const HomePage = ({ pathContext }) => {
  const { posts } = pathContext;

  const sortedPosts = pickFirstOfEachCategory(sortByCategories(posts));

  return (
    <Layout>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }} />
      <h1>Home page</h1>
    </Layout>
  );
};
export default HomePage;
