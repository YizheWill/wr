import * as Api from '../apis/BooksApi';
export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export const receiveBooks = (books) => ({
  type: RECEIVE_BOOKS,
  payload: books,
});

export const receiveBook = (book) => ({
  type: RECEIVE_BOOKS,
  payload: book,
});

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  payload: bookId,
});

export const actionFetchBooks = () => (dispatch) =>
  Api.apiFetchBooks().then((res) => dispatch(receiveBooks(res)));
export const actionFetchBook = (bookId) => (dispatch) =>
  Api.apiFetchBook(bookId).then((res) => dispatch(receiveBook(res)));
export const actionDeleteBook = (bookId) => (dispatch) =>
  Api.apiDeleteBook(bookId).then(() => dispatch(removeBook(bookId)));
