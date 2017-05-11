import React, { Component } from 'react';

import Waypoint from 'react-waypoint';

import TechPieChart from './pieChart';

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
      Javascript: 7,
      ReactJS: 7,
      HTMLCSS: 6,
      NodeJS: 5
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
            <TechPieChart
              title='JavaScript'
              val={this.state.Javascript}
              color='#e76270'
              componentSize='180'
            />

            <TechPieChart
              title='ReactJS'
              val={this.state.ReactJS}
              color='#e76270'
              componentSize='180'
            />
          </div>

          <div className='charts'>
            <TechPieChart
              title='HTML/CSS'
              val={this.state.HTMLCSS}
              color='#e76270'
              componentSize='180'
            />

            <TechPieChart
              title='NodeJS'
              val={this.state.NodeJS}
              color='#e76270'
              componentSize='180'
            />
          </div>

          { this.renderWaypoint() }

          <h3>Other Technologies & Tools</h3>

          <ul className='tech-list'>
            <li>
              <img
                className='tech-icon'
                src='../../Assets/img/tech-icons/ES6.jpg'
                alt='ES6'
              />
            </li>

            <li>
              <img
                className='tech-icon'
                src='../../Assets/img/tech-icons/redux.png'
                alt='Redux'
              />
            </li>

            <li>
              <img
                className='tech-icon'
                src='../../Assets/img/tech-icons/react-native.png'
                alt='ReactNative'
              />
            </li>

            <li>
              <img
                className='tech-icon'
                src='../../Assets/img/tech-icons/webpack.png'
                alt='Webpack'
              />
            </li>

            <li>
              <img
                className='tech-icon'
                src='../../Assets/img/tech-icons/angularjs.png'
                alt='AngularJS'
              />
            </li>

            <li>
              <img
                className='tech-icon'
                src='../../Assets/img/tech-icons/google_developers.png'
                alt='Google Developers'
              />
            </li>

            <li>
              <img
                className='tech-icon'
                src='../../Assets/img/tech-icons/jquery.png'
                alt='jQuery'
              />
            </li>

            <li>
              <img
                className='tech-icon'
                src='../../Assets/img/tech-icons/socket-io.gif'
                alt='Socketio'
              />
            </li>
          </ul>

          <ul className='tech-list'>
            <li>
              <img
                className='tech-icon'
                src='../../Assets/img/tech-icons/MongoDB.png'
                alt='MongoDB'
              />
            </li>

            <li>
              <img
                className='tech-icon'
                src='../../Assets/img/tech-icons/MySQL.png'
                alt='MySQL'
              />
            </li>

            <li>
              <img
                className='tech-icon'
                src='../../Assets/img/tech-icons/docker.png'
                alt='Docker'
              />
            </li>

            <li>
              <img
                className='tech-icon'
                src='../../Assets/img/tech-icons/AWS.png'
                alt='Amazon Web Services'
              />
            </li>

            <li>
              <img
                className='tech-icon'
                src='../../Assets/img/tech-icons/heroku.png'
                alt='Heroku'
              />
            </li>
          </ul>

        </div>

      </section>
    );
  }
}

export default Skill;
