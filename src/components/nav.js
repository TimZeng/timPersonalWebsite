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

  handleMobileNavClick() {
    const nav = $('.js--main-nav');
    const icon = $('.js--nav-icon i');

    nav.slideToggle(200);

    if (icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.removeClass('ion-close-round');
      icon.addClass('ion-navicon-round');
    }
  }

  render() {
    return (
      <nav>
        <div className='row'>
          <img src="../../Assets/img/head.jpeg" alt="TZ logo" className="logo" />
          <ul className="main-nav js--main-nav">
            <li onClick={() => this.scrollTo('skill')}>Skills</li>
            <li onClick={() => this.scrollTo('about')}>About</li>
            <li onClick={() => this.scrollTo('work')}>Works</li>
            <li
              onClick={
              () => this.props.toggleOverlay({ overlay: true, component: 'contact' })
              }
            >Contact</li>
          </ul>

          <a
            className="mobile-nav-icon js--nav-icon"
            onClick={() => this.handleMobileNavClick()}
          >
            <i className="ion-navicon-round" />
          </a>

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
