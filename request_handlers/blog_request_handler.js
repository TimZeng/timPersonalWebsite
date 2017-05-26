module.exports = {
  getBlog: {
    getBlogList: callback => {
      const blogList = require('../blogs/blog_list');

      setTimeout(() => callback(null, blogList), 2000);
      // callback(null, blogList);
    },

    getOneBlog: (blogID, callback) => {
      const blog = require(`../blogs/temp_data_${blogID}`);

      setTimeout(() => callback(null, blog), 2000);
    }
  }
};
