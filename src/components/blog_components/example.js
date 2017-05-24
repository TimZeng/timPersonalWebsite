import React from 'react';

import { Paragraph } from './Paragraph';

const Example = ({ content }) => (
  <div className='blog-example'>
    <p className='paragraph blog-section-title'>For example:</p>

    {content.map(p =>
      <Paragraph content={p} />
    )}
  </div>
);

export { Example };
