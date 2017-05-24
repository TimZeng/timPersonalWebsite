import React from 'react';

const Paragraph = ({ content }) => {
  const renderContent = contentArr =>
    contentArr.map(span => (
      <span className={span.type}>
        {span.content}
      </span>
    ));

  return (
    <p className='paragraph'>
      {renderContent(content)}.
    </p>
  );
};

export { Paragraph };
