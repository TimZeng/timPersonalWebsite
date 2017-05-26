import React from 'react';

const keys = {
  'var ': 'blue',
  'const ': 'blue',
  function: 'blue',
  '=> ': 'blue',
  'console': 'blue',
  'log': 'blue',
  'Infinity ': 'blue',
  'Infinity': 'blue',
  'Math': 'blue',
  '= ': 'red',
  '=': 'red',
  '&': 'red',
  '& ': 'red',
  '|': 'red',
  '| ': 'red',
  '< ': 'red',
  '> ': 'red',
  '<= ': 'red',
  '>= ': 'red',
  '=== ': 'red',
  'if ': 'red',
  'return ': 'red',
  'while ': 'red',
  'for ': 'red',
  'in ': 'red',
  'else ': 'red',
  '+ ': 'red',
  '- ': 'red',
  '+': 'red',
  '-': 'red',
  '* ': 'red',
  '/ ': 'red',
  '*': 'red',
  '/': 'red',
  '? ': 'red',
  '!': 'red',
  '.': 'red',
  0: 'purple',
  1: 'purple',
  2: 'purple',
  3: 'purple',
  4: 'purple',
  5: 'purple',
  6: 'purple',
  7: 'purple',
  8: 'purple',
  9: 'purple',
  'null': 'purple',
  'null ': 'purple',
  'true': 'purple',
  'true ': 'purple',
  'false': 'purple',
  'false ': 'purple',
};

const CodeLine = ({ line, functions }) => {
  functions.forEach(func => { keys[func] = 'green'; });

  const renderLine = content => {
    if (content.type === 'code') {
      return content.content.map(word => {
        const className = keys[word.trimLeft()] || 'text';

        return (
          <span className={className}>{word}</span>
        );
      });
    } else if (content.type === 'text') {
      return <span className='pseudo'>{content.content}</span>;
    }

    return <br />;
  };

  return (
    <p className='code-line'>
      {renderLine(line)}
    </p>
  );
};


export default CodeLine;
