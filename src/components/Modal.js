import { Box, Button, Typography } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import React from 'react';

import modalImg from '../images/modalImg.jpg';
//icnons
import { IoMdClose } from 'react-icons/io';

//styles
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'relative',
    display: 'flex',
    padding: '24px',
    margin: ' 24px auto',
    maxWidth: '662px',
    height: 'auto',
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: '8px',
  },
  container: {
    marginTop: '4rem',
    display: 'grid',

    '@media (min-width : 800px)': {
      gridTemplateColumns: '230px 1fr',
    },
  },
  modalButton: {
    marginTop: '8px',
    backgroundColor: 'rgb(0, 175, 245)',
    color: '#fff',
    padding: '0px 24px',
    border: '1px solid transparent',
    borderRadius: '48px',
    fontSize: '16px',
    fontWeight: 600,
    fontFamily: 'inherit',
    height: '48px',
    minWidth: '48px',

    '&:hover': {
      backgroundColor: '#008fc1',
    },
  },
}));

const Modal = ({ setModal }) => {
  const classes = useStyles();
  return (
    <Wrapper>
      <Box className={classes.modal}>
        <Box
          style={{
            display: 'inline-block',
            cursor: 'pointer',
            color: 'rgb(0, 175, 245)',
            fontSize: '25px',
          }}
          onClick={() => setModal(false)}
        >
          <IoMdClose />
        </Box>
        <Box className={classes.container}>
          <Box>
            <img src={modalImg} alt='' />
          </Box>
          <Box>
            <Typography
              variant='h1'
              style={{ textAlign: 'center', marginRight: '2rem' }}
            >
              Enter a specific place so we can recommend your ride to people
              nearby!
            </Typography>
            <Box
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '2.5rem',
                marginBottom: '.5rem',
              }}
            >
              <Button
                className={classes.modalButton}
                onClick={() => setModal(false)}
              >
                Got it!
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Wrapper>
  );
};
const Wrapper = styled('div')({
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  position: 'fixed',
  inset: '0px',
  overflow: 'hidden',
  zIndex: '999',
  top: '0px',
  right: '0px',
  left: 0,
  width: '100%',
  height: '100%',
  overflowY: 'auto',
});
export default Modal;
