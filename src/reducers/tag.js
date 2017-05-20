import { RECEIVE_TAGS } from '../actions/blog';

const tag = (state = [], action) => {
    switch(action.type) {
      case RECEIVE_TAGS:
        return action.data.tags
      default:
        return state;
    }
}

export default tag;
