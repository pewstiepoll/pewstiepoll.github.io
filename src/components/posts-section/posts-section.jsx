import React from 'react';
import PropTypes from 'prop-types';

import styles from './posts-section.module.css';
import postStyles from './posts-details.module.css';

import buttonStyles from './button.module.css';

function Button({ link, type, size, children }) {
  // TODO: Move Button component to a separate file
  // TODO: Use Link component from Gatsby
  if (!buttonStyles[type]) throw TypeError(`Unknown type of button ${type}`);

  const defaultStyles = buttonStyles.main;
  const typeStyles = buttonStyles[type];
  const sizeStyles = buttonStyles[size];

  return (
    <a href={link} className={`${defaultStyles} ${typeStyles} ${sizeStyles}`}>
      {children}
    </a>
  );
}

Button.defaultProps = {
  link: '/',
  type: 'primary',
  size: 'normal',
  children: '',
};

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.string,
  link: PropTypes.string,
};

const Post = () => (
  <article className={postStyles.container}>
    <img
      className={postStyles.image}
      src="https://contentberg.theme-sphere.com/wp-content/uploads/2018/09/shutterstock_555069928-370x370.jpg"
      alt="acticle_img"
    />
    <div className={postStyles.details}>
      <div className={postStyles.header}>
        <span className={postStyles.date}>MAY 15 2018</span>
        <span className={postStyles.categoryLabel}>Gadgets</span>
      </div>
      <div className={postStyles.main}>
        <h2 className={postStyles.title}>
          Explore the Sea world with Deep Sea Fishing
        </h2>
        <span className={postStyles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
          porro.
        </span>
      </div>
      <div className={postStyles.footer}>
        <Button type="primary">Read More</Button>
      </div>
    </div>
  </article>
);

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
