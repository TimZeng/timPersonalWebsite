import React from 'react';

const Nav = ({ redirect }) => (
  <nav className='sticky'>
    <div className='row'>
      <img src="../../Assets/img/head.jpeg" alt="TZ logo" className="logo" />
      <ul className="main-nav js--main-nav">
        <li onClick={() => redirect('')}><a>About</a></li>
        <li onClick={() => redirect('work')}><a>Works</a></li>
        <li onClick={() => redirect('learnings')}><a>Learnings</a></li>
        <li><a>Contact</a></li>
      </ul>

        <ul className="social-links">
          <li><a href="https://github.com/TimZeng" target='_blank'><i className="ion-social-github"></i></a></li>
          <li><a href="https://www.linkedin.com/in/tim-zeng-5ab68549/" target='_blank'><i className="ion-social-linkedin"></i></a></li>
        </ul>
    </div>
  </nav>
);

export default Nav;
