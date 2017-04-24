import React from 'react';

const Header = () => (
  <header>

    <nav>
      <div className='row'>
        <img src="../../Assets/img/head.jpeg" alt="Omnifood logo" className="logo" />
        <ul className="main-nav js--main-nav">
          <li><a href="#features">About</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#cities">Notes</a></li>
          <li><a href="#plans">Message</a></li>
        </ul>
      </div>
    </nav>

    <div className="hero-text-box">
      <h1>Software Engineer</h1>
      <p style={{ color: 'white' }}>&nbsp; &nbsp; &nbsp; &nbsp;@ San Francisco Bay Area</p>
      <p style={{ color: 'white' }}>&nbsp; &nbsp; &nbsp; &nbsp;{Date(Date.UTC(2012, 11, 12, 3, 0, 0))}</p>
      <a className="btn btn-full js--scroll-to-plans" href="#">Contact</a>
      <a className="btn btn-ghost js--scroll-to-start" href="#">Know More</a>
    </div>

  </header>
);

export default Header;


        // <img src="../../Assets/img/logo.png" alt="Omnifood logo" class="logo-black" />
        // <a class="mobile-nav-icon js--nav-icon"><i class="ion-navicon-round"></i></a>

        // Date(Date.UTC(2012, 11, 12, 3, 0, 0))