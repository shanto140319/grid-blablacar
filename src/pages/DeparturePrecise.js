import { Box, Button, styled, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Map from '../components/Map';
import Modal from '../components/Modal';
import { Link } from 'react-router-dom';
//icons
import { BsQuestionCircle } from 'react-icons/bs';
import { BiChevronLeft } from 'react-icons/bi';
//styles
import { useStyles, Wrapper } from '../css/departurePrecise';

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
          <Link to='/offer'>
            <Button className={classes.button}>
              <BiChevronLeft />
            </Button>
          </Link>

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
          <Link to='/offer/arrival'>
            <Button className={classes.continueButton}>Continue</Button>
          </Link>
        </Box>
      </Box>
      <Box className={classes.map}>
        <Map />
      </Box>
    </Wrapper>
  );
};

export default DeparturePrecise;
