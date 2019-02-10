import React from 'react';
import PropTypes from 'prop-types';

import Post from '../composite/post';

import styles from './posts-section.module.css';
import withRenderProps from '../hoc/withRenderProps';

// TODO: Add pagination funcionality
function PostSection({ title, children }) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.posts}>{children}</div>
    </div>
  );
}

PostSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default withRenderProps({ Post })(PostSection);
