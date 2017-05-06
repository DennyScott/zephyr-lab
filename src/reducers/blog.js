import { RECEIVE_BLOG } from '../actions/blog';

const blog = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_BLOG:
      return {
        ...state,
        blog: action.data.blog
      }
    default:
      return state;
  }
}

export default blog;
