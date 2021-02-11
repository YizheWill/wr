import * as Api from '../apis/AuthorsApi';
export const RECEIVE_AUTHORS = 'RECEIVE_AUTHORS';
export const RECEIVE_AUTHOR = 'RECEIVE_AUTHOR';
export const REMOVE_AUTHOR = 'REMOVE_AUTHOR';

export const receiveAuthors = (authors) => ({
  type: RECEIVE_AUTHORS,
  payload: authors,
});

export const receiveAuthor = (author) => ({
  type: RECEIVE_AUTHORS,
  payload: author,
});

export const removeAuthor = (authorId) => ({
  type: REMOVE_AUTHOR,
  payload: authorId,
});

export const actionFetchAuthors = () => (dispatch) =>
  Api.apiFetchAuthors().then((res) => dispatch(receiveAuthors(res)));
export const actionFetchAuthor = (authorId) => (dispatch) =>
  Api.apiFetchAuthor(authorId).then((res) => dispatch(receiveAuthor(res)));
export const actionDeleteAuthor = (authorId) => (dispatch) =>
  Api.apiDeleteAuthor(authorId).then(() => dispatch(removeAuthor(authorId)));
