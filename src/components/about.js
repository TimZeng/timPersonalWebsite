import React from 'react';

const About = () => (
  <section className="section-about js--section--about" id="about">

    <div className="row">
      <h2>About</h2>
      <p className="long-copy">
        A detail-oriented person focusing on front-end architecture and modular design systems
      </p>
    </div>

    <div className="row js--wp-1">
      <div>
        <h3>Projects</h3>

        <h6>Madsweepers <a href='http://www.madsweepers.com/' target='_blank'><i className='ion-link link-icon' /></a></h6>
        <p className="brief-description">
          Web-based real-time multiplayer Minesweeper game
        </p>
        <ul className='bullet'>
          <li>Utilized <strong>Redux</strong> to manage client side game states and designed <strong>custom middleware</strong> for server communications</li>
          <li>Utilized <strong>Websocket</strong> to synchronize changes of game states resulted from real-time user interactions</li>
          <li>Deployed application services through <strong>Docker containers</strong> and leveraged <strong>AWS ECS clusters</strong> and <strong>EC2 load balancers</strong> to enhance performance and allow potential scaling</li>
          <li>Created service-oriented architecture and micro-services using Docker containers and networking links</li>
          <li>
            <img src='../../Assets/img/react-hexagon.png' className='tech-icon' alt='ReactJS' />
            <img src='../../Assets/img/redux.png' className='tech-icon' alt='Redux' />
            <img src='../../Assets/img/nodejs.png' className='tech-icon' alt='NodeJS' />
            <img src='../../Assets/img/socket-io.gif' className='tech-icon' alt='Websocket' />
            <img src='../../Assets/img/docker.png' className='tech-icon' alt='Docker' />
            <img src='../../Assets/img/AWS.png' className='tech-icon' alt='AWS-ECS' />
          </li>
        </ul>

        <h6>TagMe Photo Journaling <a href='https://itunes.apple.com/us/app/tagme-photo-journaling/id1172621808?mt=8' target='_blank'><i className='ion-link link-icon' /></a></h6>
        <p className="brief-description">
          Simple yet fun way to keep a journal of all your photos
        </p>
        <ul className='bullet'>
          <li>Designed <strong>React Native</strong> views and routes for a responsive user interface</li>
          <li>Assembled <strong>NodeJS</strong> server to work with <strong>Clarifai</strong> machine learning API and process image tagging</li>
          <li>Utilized <strong>AWS S3</strong> to store image data and <strong>MongoDB</strong> to manage flexible and dynamic data needs</li>
          <li>Leveraged device GPS, Apple Maps, and <strong>Google Maps Geocoding API</strong> to implement location/direction features</li>
          <li>
            <img src='../../Assets/img/react-native.png' className='tech-icon' alt='React Native' />
            <img src='../../Assets/img/clarifai.png' className='tech-icon' alt='Clarifai' />
            <img src='../../Assets/img/MongoDB.png' className='tech-icon' alt='MongoDB' />
            <img src='../../Assets/img/google_developers.png' className='tech-icon' alt='Google' />
            <img src='../../Assets/img/heroku.png' className='tech-icon' alt='Heroku' />
          </li>
        </ul>

        <h6>One Up Eldercare</h6>
        <p className="brief-description">
          Easy and one-stop solution for crowd-sourced reviews about nursing homes
        </p>
        <ul className='bullet'>
          <li>Constructed Query strings, SQL statements, and <strong>MySQL</strong> database schemas to handle dynamic multidimensional searching/filtering functionalities</li>
          <li>Deployed <strong>Express</strong> server on <strong>DigitalOcean</strong> for MySQL integration, client on <strong>Heroku</strong> for React and <strong>ES6</strong> optimization, and established HTTPS connection between two platforms</li>
          <li>
            <img src='../../Assets/img/react-hexagon.png' className='tech-icon' alt='ReactJS' />
            <img src='../../Assets/img/express.png' className='tech-icon' alt='Express' />
            <img src='../../Assets/img/MySQL.png' className='tech-icon' alt='MySQL' />
            <img src='../../Assets/img/ES6.jpg' className='tech-icon' alt='ES6' />
            <img src='../../Assets/img/heroku.png' className='tech-icon' alt='Heroku' />
          </li>
        </ul>

        <h6>Fun Events</h6>
        <p className="brief-description">
          Event holding application for community building
        </p>
        <ul className='bullet'>
          <li>Designed <strong>Angular</strong> ui-router and nested controllers to manage dynamic front-end view rendering</li>
          <li>Built <strong>Express</strong> server to handle dynamic data requests and serve static files</li>
          <li>
            <img src='../../Assets/img/angularjs.png' className='tech-icon' alt='AngularJS' />
            <img src='../../Assets/img/angular-ui-router.png' className='tech-icon' alt='Angular UI Router' />
            <img src='../../Assets/img/SQLite.png' className='tech-icon' alt='SQLite' />
            <img src='../../Assets/img/bookshelfJS.png' className='tech-icon' alt='BookshelfJS' />
            <img src='../../Assets/img/bower.png' className='tech-icon' alt='Bower' />
          </li>
        </ul>

        <h3>Education</h3>
        <p className='long-copy'>
          <img src='../../Assets/img/hack-reactor.png' className='tech-icon' alt="USC" />
          <span>Hack Reactor - Advanced Software Engineering Immersive Program</span>
        </p>
        <p className='long-copy'>
          <img src='../../Assets/img/usc.png' className='tech-icon' alt="USC" />
          <span>University of Southern California - Enterprise Information System</span>
        </p>

        <h3 id='contact-2'>
          <a href="mailto:zengtiantian1122@gmail.com">let's get in touch</a>
        </h3>
      </div>

    </div>

  </section>
);

export default About;
