import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';

import Map from '../components/Map';
//styles
import { Wrapper, useStyles } from '../css/chooseRoute';
import { Link } from 'react-router-dom';
const ChooseRoute = () => {
  const classes = useStyles();
  return (
    <Wrapper>
      <Box className={classes.container}>
        <Typography variant='h1'>What is your route?</Typography>

        <Box
          display='flex'
          justifyContent='center'
          style={{ width: '100%', marginTop: '32px' }}
        >
          <Link to='/offer/choose-your-route'>
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

export default ChooseRoute;
