import fetch from 'isomorphic-fetch';

const default_params = {
  clientId: "ghost-frontend",
  clientSecret: "915c8752231c"
}

export const REQUEST_BLOG = 'REQUEST_BLOG';
function requestBlog(blog) {
  return {
    type: REQUEST_BLOG,
    blog
  }
}

export const RECEIVE_BLOG = 'RECEIVE_BLOG';
function receiveBlog(blog, json) {
  return {
    type: RECEIVE_BLOG,
    blog,
    data: json
  }
}

export function fetchBlog(blog) {

  return function (dispatch) {
    dispatch(requestBlog(blog));

    return fetch(`https://zephyrlabs.ghost.io/ghost/api/v0.1/${blog}?client_id=${default_params.clientId}&client_secret=${default_params.clientSecret}`)
      .then(response => response.json())
      .then(json => dispatch(receiveBlog(blog, json)))
  }
}
