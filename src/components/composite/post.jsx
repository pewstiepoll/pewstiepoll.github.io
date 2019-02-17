import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

import { Button } from '../primitives';

import styles from './post.module.css';

export default function Post({
  image,
  date,
  category,
  link,
  title,
  description,
}) {
  return (
    <article className={styles.container}>
      <img className={styles.image} src={image} alt={title} />
      <div className={styles.details}>
        <div className={styles.header}>
          <span className={styles.date}>{date}</span>
          {/* TODO?: Category label to be link */}
          {/* TODO?: Make Category label more generic  */}
          <span className={styles.categoryLabel}>{category}</span>
        </div>
        <div className={styles.main}>
          <Link to={link} className={styles.title}>
            {title}
          </Link>
          <span className={styles.description}>{description}</span>
        </div>
        <div className={styles.footer}>
          <Button link={link} type="primary">
            Read More
          </Button>
        </div>
      </div>
    </article>
  );
}

Post.propTypes = {
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
