import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import PostsTileContainer from '../components/post-tiles/posts-tile-container';
import PostSection from '../components/posts-section/posts-section';

import {
  sortByCategories,
  pickFirstOfEachCategory,
} from '../helpers/post-data-transformations';

const HomePage = ({ pathContext }) => {
  const { posts } = pathContext;

  const sortedPosts = pickFirstOfEachCategory(sortByCategories(posts));

  return (
    <Layout>
      {/* Render a post tile for the latest post of each category */}
      <PostsTileContainer>
        {({ PostTile }) =>
          // TODO: Make tile link to category instead of posts.
          Object.entries(sortedPosts).map(([category, post]) => (
            <PostTile key={category} category={category} post={post} />
          ))
        }
      </PostsTileContainer>
      {/* Render the main section */}
      <PostSection posts={posts} />
    </Layout>
  );
};

HomePage.propTypes = {
  pathContext: PropTypes.shape({}).isRequired,
};
export default HomePage;
