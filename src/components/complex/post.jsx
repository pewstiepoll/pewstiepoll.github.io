import React from 'react';

import { Button } from '../primitives';

import styles from './post.module.css';

export default function Post() {
  return (
    <article className={styles.container}>
      <img
        className={styles.image}
        src="https://contentberg.theme-sphere.com/wp-content/uploads/2018/09/shutterstock_555069928-370x370.jpg"
        alt="acticle_img"
      />
      <div className={styles.details}>
        <div className={styles.header}>
          <span className={styles.date}>MAY 15 2018</span>
          {/* TODO?: Category label to be link */}
          {/* TODO?: Make Category label more generic  */}
          <span className={styles.categoryLabel}>Gadgets</span>
        </div>
        <div className={styles.main}>
          <a href="//google.com" className={styles.title}>
            Explore the Sea world with Deep Sea Fishing
          </a>
          <span className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
            porro.
          </span>
        </div>
        <div className={styles.footer}>
          <Button link="//google.com" type="primary">
            Read More
          </Button>
        </div>
      </div>
    </article>
  );
}
