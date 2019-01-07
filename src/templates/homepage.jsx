import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import PostsTileContainer from '../components/tiles/posts-tile-container';

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
  // Walk through each category and pick up the first post object from it
  return Object.entries(sortedPosts).reduce(
    (result, [category, posts]) => ({ ...result, [category]: posts[0] }),
    {}
  );
}

const HomePage = ({ pathContext }) => {
  const { posts } = pathContext;

  const sortedPosts = pickFirstOfEachCategory(sortByCategories(posts));

  return (
    <Layout>
      {/* Draw a post tile for the latest post of each category */}
      <PostsTileContainer>
        {({ PostTile }) =>
          Object.entries(sortedPosts).map(([category, post]) => (
            <PostTile
              key={category}
              category={category}
              title={post.title}
              image={post.image}
            />
          ))
        }
      </PostsTileContainer>
    </Layout>
  );
};

HomePage.propTypes = {
  pathContext: PropTypes.shape({}).isRequired,
};
export default HomePage;
