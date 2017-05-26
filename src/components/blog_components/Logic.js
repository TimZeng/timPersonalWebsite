import React from 'react';

import { Paragraph } from './Paragraph';

const Logic = ({ title, content }) => (
  <div className='blog-logics'>
    <p className='paragraph blog-section-title'>{title}</p>

    {content.map(p =>
      <Paragraph content={p} />
    )}
  </div>
);

export { Logic };
