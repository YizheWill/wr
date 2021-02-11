import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  actionFetchBook,
  actionFetchBooks,
  actionEditBook,
} from '../../actions/BooksAction';
import Drawer from './AuthorDrawer';
import Modal from './Modal';

import { useParams, useHistory } from 'react-router-dom';
import { makeStyles, fade, InputBase, Button } from '@material-ui/core';
import { Search } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '100px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '100px',
  },
  info: {
    minWidth: 300,
    maxWidth: 800,
  },
  search: {
    boxShadow: '1px 1px 3px 1px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '250px',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    height: '40px',
  },
  content: {
    fontSize: 25,
    fontWeight: 100,
  },
  titles: {
    fontSize: 25,
    fontWeight: 800,
  },
  menu: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '1rem',
    fontSize: 15,
    fontWeight: 800,
  },
  isbn: {
    marginLeft: '1rem',
    color: 'red',
  },
}));
const BooksMenu = ({ bks, book, editBook, setSearchBar }) => {
  console.log('bks', bks);
  const classes = useStyles();
  console.log(bks);

  const renderBooks = bks.filter((book) => !book.referenceBook);
  return (
    <div style={{ marginTop: '1rem' }}>
      {renderBooks.map((bk) => (
        <div key={bk.id} className={classes.menu}>
          <Modal
            book={book}
            editBook={editBook}
            refId={bk.id}
            setSearchBar={setSearchBar}
            title={bk.title}
          />
          {bk.title}, <span className={classes.isbn}>ISBN: {bk.iSBN}</span>
        </div>
      ))}
    </div>
  );
  // return <div>{books.map((book) => book.title)}</div>;
};

function SearchBar({
  sb,
  fetchBooks,
  books,
  editBook,
  book,
  setSearchBar = { setSearchBar },
}) {
  useEffect(() => {
    fetchBooks();
  }, []);
  console.log('sb', sb);
  if (!book.aliasBooks.length && !book.referenceBook) {
    sb = 'block';
  }
  const [search, setSearch] = useState('');
  const classes = useStyles();
  const searchBooks = (keyword) => {
    return Object.values(books).filter((book) =>
      book.title.toLowerCase().includes(keyword)
    );
  };
  const [res, setRes] = useState(Object.values(books));
  return (
    <div style={{ display: sb }}>
      <h1>SEARCH FOR REFERENCE BOOK</h1>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <Search />
        </div>
        <InputBase
          placeholder='Search…'
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setRes(searchBooks(e.target.value));
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      <BooksMenu
        bks={res}
        book={book}
        editBook={editBook}
        setSearchBar={setSearchBar}
      />
    </div>
  );
}
function Book({ book, fetchBook, searchBook, fetchBooks, books, editBook }) {
  const classes = useStyles();
  const history = useHistory();
  const { bookId } = useParams();
  const [sb, setSearchBar] = useState('none');
  useEffect(() => {
    fetchBook(bookId);
  }, [bookId]);

  if (!book.id) return null;
  return (
    <div className={classes.root}>
      <h1 style={{ fontSize: 50, fontWeight: 'bold' }}>{book.title}</h1>
      <div style={{ display: 'flex' }}>
        <div className={classes.info}>
          <h3 className={classes.titles}>
            ISBN: <span className={classes.content}>{book.iSBN}</span>
          </h3>
          <h2 className={classes.titles}>
            summary: <span className={classes.content}>{book?.summary}</span>
          </h2>
          <h2 className={classes.titles}>
            book quote: <span className={classes.content}>{book?.quote}</span>
          </h2>
          {book.referenceBook?.title ? (
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h2
                onClick={() => history.push(`/books/${book.referenceBook.id}`)}
                style={{
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  color: 'darkblue',
                }}
              >
                Reference Book: {book.referenceBook?.title}
              </h2>
              <div>
                <Button
                  onClick={() => {
                    setSearchBar('block');
                  }}
                >
                  Edit REference
                </Button>
                {book.referenceBook ? (
                  <Button
                    onClick={() => {
                      const { id, title } = book;
                      const bookData = {
                        id,
                        title,
                        reference_book_id: null,
                      };

                      editBook(bookData);
                      window.location.reload(false);
                    }}
                    color='secondary'
                  >
                    Delete Reference
                  </Button>
                ) : (
                  ''
                )}
              </div>
            </div>
          ) : (
            ''
          )}
          {book.aliasBooks.length ? (
            <div
              style={{
                boxShadow: '1px 1px 3px 1px rgba(0,0,0,0.1)',
                padding: '30px 70px',
              }}
            >
              <h1>THIS BOOK IS ALSO KNOWN AS: </h1>
              {book.aliasBooks.map((alias) => (
                <h3
                  style={{
                    cursor: 'pointer',
                    color: 'darkblue',
                    textDecoration: 'underline',
                  }}
                  key={alias.id}
                  onClick={() => {
                    history.push(`/books/${alias.id}`);
                  }}
                >
                  {alias.title}
                </h3>
              ))}
            </div>
          ) : !book.aliasBooks.length ? (
            <SearchBar
              searchBook={searchBook}
              sb={sb}
              fetchBooks={fetchBooks}
              books={books}
              book={book}
              editBook={editBook}
              setSearchBar={setSearchBar}
            />
          ) : (
            ''
          )}
        </div>
      </div>
      <div
        style={{
          position: 'fixed',
          right: 50,
          top: 150,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ width: 3, height: 100, backgroundColor: '#888' }}></div>
        <Drawer authors={book.authors} />
        <div style={{ width: 3, height: 100, backgroundColor: '#888' }}></div>
      </div>
    </div>
  );
}

export default connect(
  (state) => ({ book: state.entities.book, books: state.entities.books }),
  (dispatch) => ({
    fetchBook: (id) => dispatch(actionFetchBook(id)),
    searchBook: (search) => dispatch(actionSearchBook(search)),
    fetchBooks: () => dispatch(actionFetchBooks()),
    editBook: (book) => dispatch(actionEditBook(book)),
  })
)(Book);
