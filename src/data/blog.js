import * as blogs from '../_posts';

let posts = [];

Object.keys(blogs).forEach(key => {
  posts.push(blogs[key]);
})

const blog = {
  posts
};

export default blog;
