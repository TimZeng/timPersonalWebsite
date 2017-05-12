import React from 'react';

import WorkCard from './workCard';

const Work = ({ toggleOverlay }) => {
  const onClick = (key) => {
    const indexes = {
      madsweepers: 0,
      tagme: 3,
      oneupeldercare: 6,
      peonygarden: 8,
    };

    const index = indexes[key] || 0;

    toggleOverlay(true, 'ImgDisplay', index);
  };

  return (
    <section className="section-work js--section--work" id="work">
      <div className="row">
        <h2>Works</h2>

        <div className='work-display'>
          <WorkCard
            name='Madsweepers'
            description='Web-based real-time multiplayer Minesweeper game'
            link='http://www.madsweepers.com/'
            onClick={onClick}
          />

          <WorkCard
            name='TagMe'
            description='Simple yet fun way to keep a journal of all your photos'
            link='https://itunes.apple.com/us/app/tagme-photo-journaling/id1172621808?mt=8'
            onClick={onClick}
          />
        </div>

        <div className='work-display'>
          <WorkCard
            name='OneUpElderCare'
            description='Easy and one-stop solution for crowd-sourced reviews about nursing homes'
            link={null}
            onClick={onClick}
          />

          <WorkCard
            name='Peony Garden'
            description='Simple Bootstrap website for product display'
            link={null}
            onClick={onClick}
          />
        </div>

      </div>
    </section>
  );
};

export default Work;
