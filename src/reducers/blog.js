import { RECEIVE_BLOG } from '../actions/blog';

const blog = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_BLOG:
      return {
        ...state,
        posts: action.data.posts,
        meta: action.data.meta
      }
    default:
      return state;
  }
}

export default blog;
