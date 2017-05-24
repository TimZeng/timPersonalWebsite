import React from 'react';

const keys = {
  var: 'blue',
  'const ': 'blue',
  function: 'blue',
  '=> ': 'blue',
  '= ': 'red',
  '=== ': 'red',
  'if ': 'red',
  'return ': 'red',
  'else ': 'red',
  '+ ': 'red',
  '!': 'red',
  '.': 'red',
  'removeNthFromEnd ': 'green',
  'remove ': 'green',
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
  null: 'purple'
};

const CodeLine = ({ line }) => {
  const renderLine = content => {
    console.log(content);
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
