import React, { useState } from 'react';
import { makeStyles, Checkbox, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Md({ book, editBook, refId, setSearchBar, title }) {
  const [checked, setChecked] = useState(false);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    const bookData = { ...book };
    bookData.reference_book_id = refId;
    editBook(bookData);
    handleClose();
    setSearchBar('none');
    window.location.reload(false);
  };

  return (
    <div>
      <Checkbox
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          handleOpen();
        }}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />

      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={() => {
          setChecked(false);
          handleClose();
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div id='transition-modal-title' style={{ fontSize: 20 }}>
              Now You are changing the{' '}
              <span
                style={{
                  color: 'red',
                  fontStyle: 'italic',
                  marginRight: '1rem',
                }}
              >
                {book.title}'s
              </span>
              reference book to be {': '}
              <div
                style={{
                  margin: '2rem auto',
                  width: '100%',
                  textAlign: 'center',
                  color: 'red',
                  fontStyle: 'italic',
                }}
              >
                {title}
              </div>
            </div>

            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Button
                onClick={handleSubmit}
                variant='contained'
                style={{ backgroundColor: '#444', color: 'gold' }}
              >
                confirm
              </Button>
              <Button
                onClick={() => {
                  setChecked(false);
                  handleClose();
                }}
                variant='contained'
                color='secondary'
              >
                cancel
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
