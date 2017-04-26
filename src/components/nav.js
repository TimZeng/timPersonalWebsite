import React, { Component } from 'react';

import $ from 'jquery';

class Nav extends Component {
  scrollToAbout() {
    $('html, body').animate({ scrollTop: $('.js--section--about').offset().top - 77 }, 1000);
  }

  scrollToWork() {
    $('html, body').animate({ scrollTop: $('.js--section--work').offset().top - 77 }, 1000);
  }

  render() {
    return (
      <nav className='sticky'>
        <div className='row'>
          <img src="../../Assets/img/head.jpeg" alt="TZ logo" className="logo" />
          <ul className="main-nav js--main-nav">
            <li onClick={() => this.scrollToAbout()}><a>About</a></li>
            <li onClick={() => this.scrollToWork()}><a>Works</a></li>
            <li onClick={() => this.props.redirect('learnings')}><a>Learnings</a></li>
            <li><a>Contact</a></li>
          </ul>

            <ul className="social-links">
              <li><a href="https://github.com/TimZeng" target='_blank'><i className="ion-social-github"></i></a></li>
              <li><a href="https://www.linkedin.com/in/tim-zeng-5ab68549/" target='_blank'><i className="ion-social-linkedin"></i></a></li>
            </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
