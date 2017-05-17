import React, { Component } from 'react';

import Waypoint from 'react-waypoint';

import TooltipImg from './common_components/tooltipImg';
import DonutChart from './common_components/donutChart';

class Skill extends Component {
  state = {
    animated: false,
    Javascript: 0,
    ReactJS: 0,
    HTMLCSS: 0,
    NodeJS: 0
  };

  handleWaypointEnter() {
    this.setState({
      animated: true,
      Javascript: 70,
      ReactJS: 70,
      HTMLCSS: 60,
      NodeJS: 50
    });
  }

  renderWaypoint() {
    if (!this.state.animated) {
      return (
        <Waypoint
          onEnter={this.handleWaypointEnter.bind(this)}
        />
      );
    }
  }

  render() {
    return (
      <section className="section-skill js--section--skill" id="skill">

        <div className="row">
          <h2>Technical Skills</h2>

          <p className="long-copy">
            I've been focusing on front-end development with HTML/CSS and JavaScript and worked with a wide variety of JS technologies. I like ReactJS as front-end framework and use NodeJS/Express for the backend development.
          </p>

          <div className='charts'>
            <DonutChart
              size={150}
              strokewidth={30}
              value={this.state.Javascript}
              title='JavaScript'
            />

            <DonutChart
              size={150}
              strokewidth={30}
              value={this.state.ReactJS}
              title='ReactJS'
            />
          </div>

          <div className='charts'>
            <DonutChart
              size={150}
              strokewidth={30}
              value={this.state.HTMLCSS}
              title='HTML/CSS'
            />

            <DonutChart
              size={150}
              strokewidth={30}
              value={this.state.NodeJS}
              title='NodeJS'
            />
          </div>

          <h3>Other Technologies & Tools</h3>

          { this.renderWaypoint() }

          <div className='tech-list'>

              <TooltipImg
                className='tech-icon'
                src='../../Assets/img/tech-icons/ES6.jpg'
                id='ES6'
                label='ECMAScript 6 (ES6)'
              />



              <TooltipImg
                className='tech-icon'
                src='../../Assets/img/tech-icons/redux.png'
                id='Redux'
                label='Redux'
              />



              <TooltipImg
                className='tech-icon'
                src='../../Assets/img/tech-icons/react-native.png'
                id='ReactNative'
                label='ReactNative'
              />



              <TooltipImg
                className='tech-icon'
                src='../../Assets/img/tech-icons/webpack.png'
                id='Webpack'
                label='Webpack'
              />



              <TooltipImg
                className='tech-icon'
                src='../../Assets/img/tech-icons/angularjs.png'
                id='AngularJS'
                label='AngularJS'
              />



              <TooltipImg
                className='tech-icon'
                src='../../Assets/img/tech-icons/google_developers.png'
                id='Google-Developers'
                label='Google Developers'
              />



              <TooltipImg
                className='tech-icon'
                src='../../Assets/img/tech-icons/jquery.png'
                id='jQuery'
                label='jQuery'
              />



              <TooltipImg
                className='tech-icon'
                src='../../Assets/img/tech-icons/socket-io.gif'
                id='Socket.io'
                label='Socket.io'
              />

              <TooltipImg
                className='tech-icon'
                src='../../Assets/img/tech-icons/MongoDB.png'
                id='MongoDB'
                label='MongoDB'
              />

              <TooltipImg
                className='tech-icon'
                src='../../Assets/img/tech-icons/MySQL.png'
                id='MySQL'
                label='MySQL'
              />

              <TooltipImg
                className='tech-icon'
                src='../../Assets/img/tech-icons/docker.png'
                id='Docker'
                label='Docker'
              />

              <TooltipImg
                className='tech-icon'
                src='../../Assets/img/tech-icons/AWS.png'
                id='AWS'
                label='Amazon Web Services'
              />

              <TooltipImg
                className='tech-icon'
                src='../../Assets/img/tech-icons/heroku.png'
                id='Heroku'
                label='Heroku'
              />

          </div>

        </div>

      </section>
    );
  }
}

export default Skill;
