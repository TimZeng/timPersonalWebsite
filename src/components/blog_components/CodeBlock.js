import React from 'react';

import CodeLine from './CodeLine';

const CodeBlock = ({ content }) => (
  <pre className='blog-code-block language-jsx line-number'>
    <code className='language-jsx'>
      {content.map(line =>
        <CodeLine line={line} />
      )}
    </code>
  </pre>

);

export { CodeBlock };
