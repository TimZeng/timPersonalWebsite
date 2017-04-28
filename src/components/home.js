import React from 'react';

console.log('in home component, about to log header');

import Header from './header';
import About from './about';

console.log('loaded header, trying to render');


const Home = () => (
  <div>
    <Header />
    <About />
  </div>
);

export default Home;
