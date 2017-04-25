import React from 'react';

const Nav = ({ redirect }) => (
  <nav className='sticky'>
    <div className='row'>
      <img src="../../Assets/img/head.jpeg" alt="TZ logo" className="logo" />
      <ul className="main-nav js--main-nav">
        <li>About</li>
        <li onPress={() => redirect('work')}>Works</li>
        <li>Learnings</li>
        <li>Contact</li>
      </ul>

        <ul className="social-links">
          <li><a href="#"><i className="ion-social-github"></i></a></li>
          <li><a href="#"><i className="ion-social-linkedin"></i></a></li>
        </ul>
    </div>
  </nav>
);

export default Nav;
      // <div className="col span-1-of-2">
      // </div>
          // <li><a href="#"><i className="ion-social-googleplus"></i></a></li>
          // <li><a href="#"><i className="ion-social-instagram"></i></a></li>
