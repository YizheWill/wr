import { RECEIVE_AUTHOR } from '../actions/AuthorsAction';
export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_AUTHOR:
      return action.payload;
    default:
      return oldState;
  }
};
