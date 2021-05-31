import { Box, Button, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Modal from '../components/Modal';
import Map from '../components/Map';

//icons
import { BsQuestionCircle } from 'react-icons/bs';
import { BiChevronLeft } from 'react-icons/bi';

//styles
import { Wrapper, useStyles } from './../css/arrivalPrecise';
const ArrivalPrecise = () => {
  const classes = useStyles();
  const [modal, setModal] = useState(false);
  return (
    <Wrapper>
      <Box className={classes.container}>
        <Typography variant='h1'>
          Where would you like to drop off passengers?
        </Typography>

        <Button className={classes.modalButton} onClick={() => setModal(true)}>
          <BsQuestionCircle />
          <span>Why an exact location?</span>
        </Button>
        {modal && <Modal setModal={setModal} />}
        <Box className={classes.wrapper}>
          <Button href='/offer/arrival' className={classes.button}>
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
          <Button
            href='/offer/choose-your-route'
            className={classes.continueButton}
          >
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

export default ArrivalPrecise;
