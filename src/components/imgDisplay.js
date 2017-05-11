import React from 'react';

const ImgDisplay = ({ img }) => {
  const imgURL = `../../Assets/img/projects/${img}.jpeg`;

  return (
    <div className='img-display'>
      <img
        className='work-large-view'
        src={imgURL}
        alt={img}
      />
    </div>
  );
};

export default ImgDisplay;
