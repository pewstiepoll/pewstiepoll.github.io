import React from 'react';

import Post from '../complex/post';

import styles from './posts-section.module.css';

// TODO: Add pagination funcionality later
export default function PostSection() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Latest</h1>
      <div className={styles.posts}>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
