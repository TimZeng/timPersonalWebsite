import React from 'react';

const BlogListItem = ({ item, fetchBlog }) => (
  <div className='blog-list-item'>
    <span
      className='blog-list-title'
      onClick={() => fetchBlog(item.id)}
    >
      {item.title}
    </span>
    <span className='blog-list-time'>
      <i className='ion-ios-calendar-outline' />
      {item.time}
    </span>

    <p className='blog-list-description'>{item.description}</p>

    <p className='blog-p'>
      <span className='blog-tag tag-category'>{item.category}</span>
      <span className='blog-tag tag-language'>{item.language}</span>
      {item.tags.map(tag => <span className='blog-tag tag-tag'>{tag}</span>)}
    </p>
  </div>
);

export { BlogListItem };
