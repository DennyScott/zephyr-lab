import { RECEIVE_POST } from '../actions/blog';

const post = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_POST:
      return action.data;
    default:
      return state;
  }
}

export default post;
