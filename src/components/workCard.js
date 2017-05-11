import React from 'react';

const WorkCard = ({ name, description, link, onClick }) => {
  const nameLower = name.toLowerCase().replace(/\s/g, '');
  const imgURL = `../../Assets/img/projects/${nameLower}-1.jpeg`;

  const renderName = () => {
    if (link === null) {
      return <h6>{name}</h6>;
    }

    return (
      <h6>
        {name}
        <a className='icon-link' href={link} target='_blank'>
          <i className='ion-link' />
        </a>
      </h6>
    );
  };

  return (
    <div
      onClick={() => onClick(name)}
      className='workCard'
    >
      <img
        className='work-small-view'
        src={imgURL}
        alt={name}
      />

      <div className='text'>
        {renderName()}
        <p>{description}</p>
      </div>

    </div>
  );
};

export default WorkCard;
