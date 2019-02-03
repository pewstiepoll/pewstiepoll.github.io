import React from 'react';
import PropTypes from 'prop-types';

import styles from './posts-section.module.css';
import detailsStyle from './posts-details.module.css';

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

export default function PostSection() {
  // TODO: Mobile Adaptation
  return (
    <div className={styles.wrapper}>
      <article className={styles.container}>
        <img
          className={styles.image}
          src="https://contentberg.theme-sphere.com/wp-content/uploads/2018/09/shutterstock_555069928-370x370.jpg"
          alt="acticle_img"
        />
        <div className={detailsStyle.container}>
          <div className={detailsStyle.header}>
            <span className={detailsStyle.date}>MAY 15 2018</span>
            <span className={detailsStyle.categoryLabel}>Gadgets</span>
          </div>
          <div className={detailsStyle.main}>
            <h2 className={detailsStyle.title}>
              Explore the Sea world with Deep Sea Fishing
            </h2>
            <span className={detailsStyle.description}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
              porro.
            </span>
          </div>
          <div className={detailsStyle.footer}>
            <Button type="primary">Read More</Button>
          </div>
        </div>
      </article>
    </div>
  );
}
