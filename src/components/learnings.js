import React, { Component } from 'react';

import $ from 'jquery';

import BlogPage from './blogPage';

class Learnings extends Component {
  componentWillMount() {
    $('nav').addClass('sticky animated fadeInDown');
  }

  render() {
    return (
      <section className='section-learnings'>
        <BlogPage />
      </section>
    );
  }
}

export default Learnings;
