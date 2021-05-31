import { Box, Button, styled, Typography } from '@material-ui/core';
import React, { useState } from 'react';

//icons
import { BsQuestionCircle } from 'react-icons/bs';
import { BiChevronLeft } from 'react-icons/bi';
//styles
import { makeStyles } from '@material-ui/core/styles';
import Map from '../components/Map';
import Modal from '../components/Modal';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '1rem 2rem',
    '& h1': {
      textAlign: 'center',
      fontSize: 37,
    },
  },
  modalButton: {
    padding: ' 6px 16px 6px 8px',
    border: ' 1px solid rgb(221, 221, 221)',
    borderRadius: '24px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    cursor: 'pointer',
    color: 'rgb(112, 140, 145)',
    fontWeight: 500,
    backgroundColor: 'rgb(255, 255, 255)',
    '-webkit-tap-highlight-color': 'rgba(221, 221, 221, 0.4)',
    maxWidth: '100%',
    marginTop: 32,
    '& svg': {
      color: 'rgb(112, 140, 145)',
      height: 24,
      width: 24,
      marginRight: 8,
    },
  },
  wrapper: {
    marginTop: '1.5rem',
    position: 'relative',
    display: 'flex',
    color: 'rgb(5, 71, 82)',
    backgroundColor: 'rgb(237, 237, 237)',
    borderRadius: '16px',
    border: '1px solid rgb(237, 237, 237)',
    boxShadow: 'none',
    height: 55,
    width: '98%',
  },
  button: {
    backgroundColor: 'transparent',
    color: 'rgb(112, 140, 145)',
    height: 'auto',
    '& svg': {
      fontSize: 20,
    },
  },
  input: {
    border: 'none',
    backgroundColor: 'transparent',
    color: 'rgb(5, 71, 82)',
    display: 'flex',
    justifyContent: 'space-between',
    marginRight: 48,
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: 0.1,
    width: '100%',
    '&:focus': {
      outline: 'none',
    },
    '&::placeholder': {
      color: '#889191',
    },
  },

  continueButton: {
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

const DeparturePrecise = () => {
  const classes = useStyles();
  const [modal, setModal] = useState(false);
  return (
    <Wrapper>
      <Box className={classes.container}>
        <Typography variant='h1'>
          Where would you like to pick up passengers?
        </Typography>

        <Button className={classes.modalButton} onClick={() => setModal(true)}>
          <BsQuestionCircle />
          <span>Why an exact location?</span>
        </Button>
        {modal && <Modal setModal={setModal} />}
        <Box className={classes.wrapper}>
          <Button href='/offer' className={classes.button}>
            <BiChevronLeft />
          </Button>
          <input
            className={classes.input}
            type='search'
            name='departure_place'
          ></input>
        </Box>
        <Box
          display='flex'
          justifyContent='center'
          style={{ width: '100%', marginTop: '32px' }}
        >
          <Button href='/offer/arrival' className={classes.continueButton}>
            Continue
          </Button>
        </Box>
      </Box>
      <Box className={classes.map}>
        <Map />
      </Box>
    </Wrapper>
  );
};
const Wrapper = styled('section')({
  display: 'grid',
  '@media (min-width : 800px)': {
    gridTemplateColumns: '1fr 1fr',
  },
});
export default DeparturePrecise;
