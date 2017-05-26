const fs = require('fs');

module.exports = {
  getBlog: {
    getBlogList: callback => {
      const blogList = require('../blogs/blog_list');

      // setTimeout(() => callback(null, blogList), 2000);
      callback(null, blogList);
    },

    getOneBlog: (blogID, callback) => {
      const blog = require(`../blogs/blog_${blogID}`);

      // setTimeout(() => callback(null, blog), 2000);
      callback(null, blog);
    }
  },
  postBlog: {
    saveBlog: (data, callback) => {
      var blogList = require('../blogs/blog_list').blogList;

      console.log(blogList);

      const id = blogList[0].id + 1;
      const { title, time, language, category, tags, description } = data;
      const newListItem = { id, title, time, language, category, tags, description };

      blogList.unshift(newListItem);

      const json = JSON.stringify(data);
      const fileString = `exports.blog = ${json};`;
      const fileName = `./blogs/blog_${id}.js`;

      const writeStream = fs.createWriteStream(fileName);
      writeStream.write(fileString);
      writeStream.end();

      const listJson = JSON.stringify(blogList);
      const listString = `exports.blogList = ${listJson};`;

      const newList = fs.createWriteStream('./blogs/blog_list.js');
      newList.write(listString);
      newList.end();

      callback();
    }
  }
};
