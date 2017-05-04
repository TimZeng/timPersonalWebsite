import React from 'react';

const SkillCard = ({ icon, text, skills, length }) => (
  <div className='skill-card'>
    <img src={icon} alt='Skills' />
    <h6>{text}</h6>

    <div>
      <ul className='bullet skill-list'>
        {skills.slice(0, Math.ceil(length / 2)).map(skill => <li>{skill}</li>)}
      </ul>

      <ul className='bullet skill-list'>
        {skills.slice(Math.ceil(length / 2)).map(skill => <li>{skill}</li>)}
      </ul>
    </div>

  </div>
);

export default SkillCard;
