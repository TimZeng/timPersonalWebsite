import React from 'react';

import Header from './header';
import About from './about';
import Skill from './skill';
// import Work from './work';

const Home = () => (
  <div>
    <Header
      text1='TIM ZENG'
      text2='SOFTWARE ENGINEER'
    />

    <About />
    <Skill />
  </div>
);

export default Home;

    // <Work />

