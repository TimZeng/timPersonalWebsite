import React from 'react';

import { Paragraph } from './Paragraph';

const Logic = ({ content }) => (
  <div className='blog-logics'>
    <p className='paragraph blog-section-title'>Approach:</p>

    {content.map(p =>
      <Paragraph content={p} />
    )}
  </div>
);

export { Logic };
