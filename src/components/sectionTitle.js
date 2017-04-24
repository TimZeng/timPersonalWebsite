import React from 'react';

const SectionTitle = ({title, subtitle}) => (
  <div className="row">
    <h2>{title}</h2>
    <p className="long-copy">
      {subtitle}
    </p>
  </div>
);

export default SectionTitle;