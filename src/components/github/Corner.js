import React from 'react';

import './style.css';

export default () => (
  <a>
    <svg
      width="80"
      height="80"
      viewBox="0 0 250 250"
      style={{
        fill: '#151513',
        color: '#fff',
        position: 'absolute',
        top: '0',
        border: '0',
        left: '0',
        transform: 'scale(-1, 1)'
      }}
      aria-hidden="true"
    >
      <path />
      <path
        d=""
        fill="currentColor"
        style={{ transformOrigin: '130px 106px' }}
        className="octo-arm"
      />
      <path
        d=""
        fill="currentColor"
        className="octo-body"
      />
    </svg>
  </a>
);
