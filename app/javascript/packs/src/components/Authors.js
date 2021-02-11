import React, { useEffect } from 'react';
import { connect } from 'react-redux';

function Authors({ authors, getAuthors }) {
  return <div></div>;
}

export default connect(
  (state) => ({ authors: state.entities.authors }),
  (dispatch) => ({ getAuthors: () => dispatch(actionFetchAuthors()) })
);
