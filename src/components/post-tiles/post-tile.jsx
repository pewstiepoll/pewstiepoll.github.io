import React from 'react';
import PropTypes from 'prop-types';

import styles from './post-tile.module.css';

// TODO:I: Move PostTile to "complex" components
export default function PostTileItem({ classes, category, post }) {
  const { title, image, slug } = post;

  return (
    <div className={`${styles.item} ${classes}`}>
      <a href={`/posts/${slug}`}>
        <img className={styles.image} src={image} alt="" />
      </a>
      <div className={styles.overlay}>
        <a className={styles.category} href={`/categories/${category}`}>
          {category}
        </a>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </div>
  );
}

PostTileItem.propTypes = {
  classes: PropTypes.string,
  category: PropTypes.string.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

PostTileItem.defaultProps = {
  classes: '',
};
