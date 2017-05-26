import React from 'react';

import CodeLine from './CodeLine';

const CodeBlock = ({ content, functions }) => (
  <pre className='blog-code-block language-jsx line-number'>
    <code className='language-jsx'>
      {content.map(line =>
        <CodeLine line={line} functions={functions} />
      )}
    </code>
  </pre>

);

export { CodeBlock };
