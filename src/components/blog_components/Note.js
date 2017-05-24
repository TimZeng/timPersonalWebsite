import React from 'react';

import { Paragraph } from './Paragraph';

const Note = ({ content }) => (
  <div className='blog-note'>
    <p className='paragraph'>Note:</p>

    {content.map(p =>
      <Paragraph content={p} />
    )}
  </div>
);

export { Note };
