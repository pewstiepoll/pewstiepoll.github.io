import React from 'react';
import PropTypes from 'prop-types';

import styles from './post-tile.module.css';

export default function PostTileItem({ classes, category, title, image }) {
  console.log('image: ', image);
  return (
    <div className={`${styles.item} ${classes}`}>
      <a href="//google.com">
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
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

PostTileItem.defaultProps = {
  classes: '',
};
