import React from 'react';
import PropTypes from 'prop-types';

import PostTile from './post-tile';

import styles from './posts-tile-container.module.css';

const PostTileWithStyles = props => (
  <PostTile classes={styles.item} {...props} />
);

export default function PostsTileContainer({ children }) {
  return (
    <div className={styles.container}>
      {children({ PostTile: PostTileWithStyles })}
    </div>
  );
}

PostsTileContainer.propTypes = {
  children: PropTypes.func,
};

PostsTileContainer.defaultProps = {
  children: () => {},
};
