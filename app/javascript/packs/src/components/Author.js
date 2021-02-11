import React, { useEffect } from 'react';
import AuthorCard from './AuthorCard';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { actionFetchAuthor } from '../actions/AuthorsAction';

function Author({ author, fetchAuthor }) {
  const { authorId } = useParams();
  useEffect(() => fetchAuthor(authorId), []);
  console.log('author', author);
  if (!author.id) return null;
  return (
    <div style={{ marginTop: 100 }}>
      <AuthorCard author={author} />
    </div>
  );
}

export default connect(
  (state) => ({ author: state.entities.author }),
  (dispatch) => ({ fetchAuthor: (id) => dispatch(actionFetchAuthor(id)) })
)(Author);
