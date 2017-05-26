import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

import {
  BlogListItem
} from './blog_components';

import {
  getBlog,
  getBlogList,
  changeProcessing
} from '../actions';

class Learnings extends Component {
  componentWillMount() {
    $('nav').addClass('hidden');

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

  renderBlogList() {
    return this.props.blogList.map(item => (
      <BlogListItem
        item={item}
        fetchBlog={this.fetchBlog.bind(this)}
      />
    ));
  }

  render() {
    return (
      <section className='section-learnings'>
        <div className='row blog-list'>
          <h2>This is the learnings page</h2>

          {this.renderBlogList()}

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
