import React from 'react';

const ImgDisplay = ({ img, clickLeft, clickRight, toggleOverlay }) => {
  const imgURL = `../../Assets/img/projects/${img}.jpeg`;

  const renderImg = () => {
    const type = img.slice(0, 5) === 'tagme' ? 'portrait' : 'landscape';

    return (
      <img
        className={`work-large-view ${type}`}
        src={imgURL}
        alt={img}
      />
    );
  };

  return (
    <div className='img-display'>

      <i
        onClick={() => toggleOverlay(false, '')}
        className='ion-close-circled'
      />

      <div className='img-container'>

        <div className='arrow'>
          <i
            onClick={() => clickLeft()}
            className='ion-chevron-left'
          />
        </div>

        {renderImg()}

        <div className='arrow'>
          <i
            onClick={() => clickRight()}
            className='ion-chevron-right'
          />
        </div>

      </div>

    </div>
  );
};

export default ImgDisplay;

