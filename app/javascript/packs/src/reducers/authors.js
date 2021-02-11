import { RECEIVE_AUTHORS, REMOVE_AUTHOR } from '../actions/AuthorsAction';
export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_AUTHORS:
      return action.payload;
    default:
      return oldState;
  }
};
