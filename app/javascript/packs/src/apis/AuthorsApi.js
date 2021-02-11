import { serialize } from 'object-to-formdata';
export const apiFetchAuthors = () =>
  fetch('/api/authors').then((res) => res.json());
export const apiFetchAuthor = (authorId) =>
  fetch('/api/authors/' + authorId).then((res) => res.json());

export const apiEditAuthor = (author) => {
  const url = '/api/authors/' + author.id;
  const formData = serialize({ author: author });
  const fetchRequestOptions = {
    method: 'PATCH',
    header: { 'Content-Type': 'application/json' },
    body: formData,
  };
  return fetch(url, fetchRequestOptions).then((res) => res.json());
};

export const apiCreateAuthor = (author) => {
  const url = '/api/authors';
  const formData = serialize({ author: author });
  const fetchRequestOptions = {
    method: 'POST',
    header: { 'Content-Type': 'application/json' },
    body: formData,
  };
  return fetch(url, fetchRequestOptions).then((res) => res.json());
};

export const apiDeleteAuthor = (authorId) =>
  fetch('/api/authors/' + authorId, { method: 'DELETE' }).then((res) =>
    res.json()
  );

export const apiSearchAuthor = (keyword) => {
  const url = '/api/authors?search=' + keyword;
  return fetch(url, { method: 'GET' }).then((res) => res.json());
};
