import React from 'react';
import PropTypes from 'prop-types';
import buttonStyles from './button.module.css';

export default function Button({ link, type, size, children }) {
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
