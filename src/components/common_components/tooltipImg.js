import React from 'react';
import ReactTooltip from 'react-tooltip';

const TooltipComponent = ({ src, id, label, className }) => (
  <div>
    <img
      className={className}
      src={src}
      alt={id}
      data-tip
      data-for={id}
    />
    <ReactTooltip id={id} type='dark' effect='solid'>
      <span>{label}</span>
    </ReactTooltip>
  </div>
);

export default TooltipComponent;
