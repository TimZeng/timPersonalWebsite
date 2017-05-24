import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getBlog } from '../actions';

import {
  Title,
  Paragraph,
  Example,
  Note,
  Logic,
  CodeBlock
} from './blog_components';

class BlogPost extends Component {
  // componentWillMount() {
  //   this.props.getBlog();
  // }

  renderTags(category, language, tags) {
    return (
      <p className='blog-p'>
        <span className='blog-tag tag-category'>{category}</span>
        <span className='blog-tag tag-language'>{language}</span>
        {tags.map(tag => <span className='blog-tag tag-tag'>{tag}</span>)}
      </p>
    );
  }

  renderContent(content) {
    return content.map(item => {
      if (item.type === 'paragraph') {
        return <Paragraph content={item.content} />;
      } else if (item.type === 'example') {
        return <Example content={item.content} />;
      } else if (item.type === 'note') {
        return <Note content={item.content} />;
      } else if (item.type === 'logic') {
        return <Logic content={item.content} />;
      } else if (item.type === 'code') {
        return <CodeBlock content={item.content} />;
      }


      return null;
    });
  }

  render() {
    console.log('in blogPage, blog =>>', this.props.blog);

    const { title, category, language, tags, time, content } = this.props.blog;

    return (
      <section className='section-blogPage'>
        <div className='row'>
          <Title
            title={title}
            time={time}
          />

          {this.renderTags(category, language, tags)}

          {this.renderContent(content)}

        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ blog }) => (
  { blog }
);

export default connect(mapStateToProps, { getBlog })(BlogPost);
