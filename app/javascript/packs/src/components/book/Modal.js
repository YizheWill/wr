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

export default function Md({ book, editBook, refId }) {
  const history = useHistory();
  const title = book.title;
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
    history.push('/');
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
            <h2 id='transition-modal-title'>
              Now You are changing the current book's reference book to be{' '}
              {title}
            </h2>

            <p id='transition-modal-description'>Are You Sure?</p>
            <Button onClick={handleSubmit}>yes</Button>
            <Button
              onClick={() => {
                setChecked(false);
                handleClose();
              }}
            >
              cancel
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
