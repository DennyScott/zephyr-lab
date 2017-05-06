import { RECEIVE_BLOG } from '../actions/blog';

const blog = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_BLOG:
      return {
        ...state,
        blog: action.data
      }
    default:
      return state;
  }
}

export default blog;
