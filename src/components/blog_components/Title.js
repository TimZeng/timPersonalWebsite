import React from 'react';

const Title = ({ title, time }) => (
  <div>
    <h2 className='blog-title'>{title}</h2>
    <h3 className='blog-time'>{time}</h3>
  </div>
);

export { Title };
