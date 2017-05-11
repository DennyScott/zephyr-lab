import fetch from 'isomorphic-fetch';

const default_params = {
  clientId: "ghost-frontend",
  clientSecret: "915c8752231c"
}

const blogUrl = "https://zephyrlabs.ghost.io/ghost/api/v0.1/";
const clientUrl = `client_id=${default_params.clientId}&client_secret=${default_params.clientSecret}`;

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

export const REQUEST_POST= 'REQUEST_POST';
function requestPost(post) {
  return {
    type: REQUEST_POST,
    post
  }
}

export const RECEIVE_POST = 'RECEIVE_POST';
function receivePost(post, json) {
  return {
    type: RECEIVE_POST,
    post,
    data: json
  }
}

export function fetchBlog(blog) {

  return function (dispatch) {
    dispatch(requestBlog(blog));

    return fetch(`${blogUrl}${blog}?${clientUrl}`)
      .then(response => response.json())
      .then(json => dispatch(receiveBlog(blog, json)))
  }
}

export function fetchPost(postId) {
  return function(dispatch) {
    dispatch(requestPost(postId));

    return fetch(`${blogUrl}posts/${postId}?${clientUrl}`)
      .then(response => response.json())
      .then(json => dispatch(receivePost(postId, json)));

  }
}
