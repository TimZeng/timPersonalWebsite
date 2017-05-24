import React, { Component } from 'react';

import $ from 'jquery';

import BlogPage from './blogPage';

class Learnings extends Component {
  componentWillMount() {
    $('nav').addClass('sticky animated fadeInDown');
  }

  render() {
    return (
        <BlogPage />
    );
  }
}

export default Learnings;
      // <section className='section-learnings'>
      // </section>
