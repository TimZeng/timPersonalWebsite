import React, { Component } from 'react';

import Waypoint from 'react-waypoint';

import TechPieChart from './pieChart';
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

  // componentDidMount() {
  //   console.log(this.refs.a);
  //   // this.refs.a.tooltip();
  //   $(this.refs.a.getDOMNode()).tooltip();

  //   // $(ReactDom.findDOMNode(this.refs.a)).tooltip({
  //   //   animated: 'fade',
  //   //   placement: 'top',
  //   //   html: true
  //   // });
  // }

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
              size={180}
              strokewidth={45}
              value={this.state.Javascript}
              title='JavaScript'
            />

            <DonutChart
              size={180}
              strokewidth={45}
              value={this.state.ReactJS}
              title='ReactJS'
            />
          </div>

          <div className='charts'>
            <DonutChart
              size={180}
              strokewidth={45}
              value={this.state.HTMLCSS}
              title='HTML/CSS'
            />

            <DonutChart
              size={180}
              strokewidth={45}
              value={this.state.NodeJS}
              title='NodeJS'
            />
          </div>

          <h3>Other Technologies & Tools</h3>

          { this.renderWaypoint() }

          <ul className='tech-list'>
            <li>
              <TooltipImg
                className='tech-icon'
                src='../../Assets/img/tech-icons/ES6.jpg'
                id='ES6'
                label='ECMAScript 6 (ES6)'
              />
            </li>

            <li>
              <TooltipImg
                className='tech-icon'
                src='../../Assets/img/tech-icons/redux.png'
                id='Redux'
                label='Redux'
              />
            </li>

            <li>
              <TooltipImg
                className='tech-icon'
                src='../../Assets/img/tech-icons/react-native.png'
                id='ReactNative'
                label='ReactNative'
              />
            </li>

            <li>
              <TooltipImg
                className='tech-icon'
                src='../../Assets/img/tech-icons/webpack.png'
                id='Webpack'
                label='Webpack'
              />
            </li>

            <li>
              <TooltipImg
                className='tech-icon'
                src='../../Assets/img/tech-icons/angularjs.png'
                id='AngularJS'
                label='AngularJS'
              />
            </li>

            <li>
              <TooltipImg
                className='tech-icon'
                src='../../Assets/img/tech-icons/google_developers.png'
                id='Google-Developers'
                label='Google Developers'
              />
            </li>

            <li>
              <TooltipImg
                className='tech-icon'
                src='../../Assets/img/tech-icons/jquery.png'
                id='jQuery'
                label='jQuery'
              />
            </li>

            <li>
              <TooltipImg
                className='tech-icon'
                src='../../Assets/img/tech-icons/socket-io.gif'
                id='Socket.io'
                label='Socket.io'
              />
            </li>
          </ul>

          <ul className='tech-list'>
            <li>
              <TooltipImg
                className='tech-icon'
                src='../../Assets/img/tech-icons/MongoDB.png'
                id='MongoDB'
                label='MongoDB'
              />
            </li>

            <li>
              <TooltipImg
                className='tech-icon'
                src='../../Assets/img/tech-icons/MySQL.png'
                id='MySQL'
                label='MySQL'
              />
            </li>

            <li>
              <TooltipImg
                className='tech-icon'
                src='../../Assets/img/tech-icons/docker.png'
                id='Docker'
                label='Docker'
              />
            </li>

            <li>
              <TooltipImg
                className='tech-icon'
                src='../../Assets/img/tech-icons/AWS.png'
                id='AWS'
                label='Amazon Web Services'
              />
            </li>

            <li>
              <TooltipImg
                className='tech-icon'
                src='../../Assets/img/tech-icons/heroku.png'
                id='Heroku'
                label='Heroku'
              />
            </li>
          </ul>

        </div>

      </section>
    );
  }
}

export default Skill;
