import React from 'react';
import PropTypes from 'prop-types';

export default function withRenderPropsHOC(params) {
  return function hoc(Component) {
    /**
     * @func withRenderProps
     * @param {Object{children}} params
     * @returns Component that uses render props with given params
     */
    function withRenderProps({ children, ...restProps }) {
      return <Component {...restProps}>{children(params)}</Component>;
    }

    withRenderProps.propTypes = {
      children: PropTypes.func,
    };

    withRenderProps.defaultProps = {
      children: () => {},
    };

    return withRenderProps;
  };
}

// Usage: withRenderProps({ RenderPropComponent })(Container);
