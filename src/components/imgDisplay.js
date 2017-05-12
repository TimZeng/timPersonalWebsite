import React from 'react';

const ImgDisplay = ({ img, clickLeft, clickRight, toggleOverlay }) => {
  const imgURL = `../../Assets/img/projects/${img}.jpeg`;

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

        <img
          className='work-large-view animated fadeIn'
          src={imgURL}
          alt={img}
          onClick={() => clickRight()}
        />

        <div className='arrow'>
          <i
            onClick={() => clickRight()}
            className='ion-chevron-right'
          />
        </div>


      </div>

      <p className='img-label'>{img}</p>

    </div>
  );
};

export default ImgDisplay;

