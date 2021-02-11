import { serialize } from 'object-to-formdata';
export const apiFetchBooks = () =>
  fetch('/api/books').then((res) => res.json());
export const apiFetchBook = (bookId) =>
  fetch('/api/books/' + bookId).then((res) => res.json());

export const apiEditBook = (book) => {
  const url = '/api/books/' + book.id;
  const formData = serialize({ book: book });
  const fetchRequestOptions = {
    method: 'PATCH',
    header: { 'Content-Type': 'application/json' },
    body: formData,
  };
  return fetch(url, fetchRequestOptions).then((res) => res.json());
};

export const apiCreateBook = (book) => {
  const url = '/api/books';
  const formData = serialize({ book: book });
  const fetchRequestOptions = {
    method: 'POST',
    header: { 'Content-Type': 'application/json' },
    body: formData,
  };
  return fetch(url, fetchRequestOptions).then((res) => res.json());
};

export const apiDeleteBook = (bookId) =>
  fetch('/api/books/' + bookId, { method: 'DELETE' }).then((res) => res.json());

export const apiSearchBook = (keyword) => {
  const url = '/api/books?search=' + keyword;
  return fetch(url, { method: 'GET' }).then((res) => res.json());
};
