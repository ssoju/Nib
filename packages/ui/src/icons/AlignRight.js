import React from 'react';

export default ({ fill, ...rest }) => (
  <svg width="20" height="20" {...rest}>
    <g fill={fill} fillRule="evenodd">
      <path d="M2 3h16v1H2zM8 6h10v1H8zM2 9h16v1H2zM2 15h16v1H2zM8 12h10v1H8z" />
    </g>
  </svg>
);
