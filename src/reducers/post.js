import { RECEIVE_POST } from '../actions/blog';

const post = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_POST:
      return action.data.posts[0];
    default:
      return state;
  }
}

export default post;
