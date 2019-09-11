import React from 'react';
import PropTypes from 'prop-types';

export default function Slide({ children }) {
  return <section>{children}</section>;
}

Slide.propTypes = {
  children: PropTypes.node,
};
