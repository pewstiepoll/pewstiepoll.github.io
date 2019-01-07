import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import PostsTileContainer from '../components/post-tiles/posts-tile-container';

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
          Object.entries(sortedPosts).map(([category, post]) => (
            <PostTile key={category} category={category} post={post} />
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
