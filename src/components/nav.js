import React, { Component } from 'react';
import { connect } from 'react-redux';

import $ from 'jquery';

import { toggleOverlay } from '../actions';

class Nav extends Component {
  scrollTo(section) {
    $('html, body').animate({
      scrollTop: $(`.js--section--${section}`).offset().top + 1
    }, 1000);
  }

  render() {
    return (
      <nav>
        <div className='row'>
          <img src="../../Assets/img/head.jpeg" alt="TZ logo" className="logo" />
          <ul className="main-nav js--main-nav">
            <li onClick={() => this.scrollTo('about')}>About</li>
            <li onClick={() => this.scrollTo('skill')}>Skills</li>
            <li onClick={() => this.scrollTo('work')}>Works</li>
            <li
              onClick={
              () => this.props.toggleOverlay({ overlay: true, component: 'contact' })
              }
            >Contact</li>
          </ul>

          <ul className="social-links">
            <li>
              <a href="https://www.linkedin.com/in/tim-zeng-5ab68549/" target='_blank'>
                <i className="ion-social-linkedin" />
              </a>
            </li>
            <li>
              <a href="https://github.com/TimZeng" target='_blank'>
                <i className="ion-social-github" />
              </a>
            </li>
          </ul>

        </div>
      </nav>
    );
  }
}

export default connect(null, { toggleOverlay })(Nav);
            // <li onClick={() => this.props.redirect('learnings')}>Learnings</li>
