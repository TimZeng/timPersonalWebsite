import React from 'react';

import WorkCard from './workCard';

const Work = () => {
  const onClick = (text) => {
    console.log(text, 'is clicked');
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
            description='I am thinking on it'
            link={null}
            onClick={onClick}
          />
        </div>

      </div>
    </section>
  );
};

export default Work;
