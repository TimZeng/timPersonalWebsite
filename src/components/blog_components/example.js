import React from 'react';

const Example = ({ title, content }) => (
  <div className='example'>
    <p className='blog-p'>{title}</p>

    <ul className='blog-list'>
      {content.map(p => <p className='blog-p blog-list-item'>{p}</p>)}
    </ul>
  </div>
);

export default Example;
