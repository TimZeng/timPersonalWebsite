import React, { Component } from 'react';
import { connect } from 'react-redux';

class BlogPost extends Component {
  render() {
    console.log(this.props.blog);

    return (
      <div className='row'>
        <h2>Linkedlist - Remove Nth Node From End</h2>
        <p className="blog-p">
          Given a linked list, remove the nth node from the end of list and return its head.
        </p>

        <p className="blog-p">
          For example:
        </p>

        <p className="blog-p">
          Given linked list: <code>1->2->3->4->5</code>, and <code>n = 2</code>.
        </p>

        <p className='blog-p'>
          After removing the second node from the end, the linked list becomes <code>1->2->3->5</code>.
        </p>
        <p className='blog-p'>
          <span>Note:</span>
        </p>
        <p className='blog-p'>
          Given n will always be valid.
        </p>
        <p className='blog-p'>
          Try to do this in one pass.
        </p>
      </div>
    );
  }
}

const mapStateToProps = ({ blog }) => (
  { blog }
);

export default connect(mapStateToProps)(BlogPost);
