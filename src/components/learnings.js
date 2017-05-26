import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

import {
  getBlog,
  getBlogList,
  changeProcessing
} from '../actions';

class Learnings extends Component {
  componentWillMount() {
    $('nav').addClass('sticky animated fadeInDown');

    if (this.props.blogList.length === 0) {
      this.props.changeProcessing(true);
      this.props.getBlogList();
    }
  }

  fetchBlog(id) {
    this.props.changeProcessing(true);
    this.props.getBlog(id);
  }

  openBlogPage() {
    this.props.redirect('blog');
  }

  render() {
    return (
      <section className='section-learnings'>
        <div className='row'>
          <h2>This is the learnings page</h2>

          <h3
            onClick={() => this.fetchBlog(1)}
          >
            Linkedlist - Remove Node From End
          </h3>

          <h3
            onClick={() => this.fetchBlog(2)}
          >
            Array - Next Permutation
          </h3>
        </div>
        {this.props.blogReady ? this.openBlogPage() : null}
      </section>
    );
  }
}

const mapStateToProps = ({ blogList, blogReady }) => (
  { blogList, blogReady }
);

export default connect(mapStateToProps, {
  getBlog,
  getBlogList,
  changeProcessing
})(Learnings);
