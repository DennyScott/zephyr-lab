import * as blogs from '../_posts';

let posts = [];

Object.keys(blogs).forEach(key => {
  posts.push(blogs[key]);
})

posts.sort((a,b) => {
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return new Date(b.created_at) - new Date(a.created_at);
});

const blog = {
  posts
};

export default blog;
