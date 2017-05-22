import React from 'react';

import Header from './header';
import About from './about';
import Skill from './skill';
import Work from './work';

const Home = ({ toggleOverlay }) => (
  <div>
    <Header
      text1='TIM ZENG'
      text2='SOFTWARE ENGINEER'
    />

    <Skill />
    <About />
    <Work
      toggleOverlay={toggleOverlay}
    />
  </div>
);

export default Home;
