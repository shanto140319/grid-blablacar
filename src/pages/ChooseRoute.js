import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Map from '../components/Map';
//icons
import { IoMdRadioButtonOn } from 'react-icons/io';

//styles
import { Wrapper, useStyles } from '../css/chooseRoute';

const ChooseRoute = () => {
  const classes = useStyles();
  return (
    <Wrapper>
      <Box className={classes.container}>
        <Typography variant='h1'>What is your route?</Typography>
        <Box className={classes.route}>
          <Box className={classes.single}>
            <Box className={classes.text}>
              <span>Mumbai - Agra National Hwy</span>
              <span className={classes.tolls}>Tolls</span>
            </Box>
            <Box className={classes.radio}>
              <input type='radio' name='route' />
            </Box>
          </Box>
          {/* ================ */}
          <Box className={classes.single}>
            <Box className={classes.text}>
              <span>Mumbai - Agra National Hwy</span>
              <span className={classes.tolls}>Tolls</span>
            </Box>
            <Box className={classes.radio}>
              <input type='radio' name='route' />
            </Box>
          </Box>
        </Box>
        <Box
          display='flex'
          justifyContent='center'
          style={{ width: '100%', marginTop: '32px' }}
        >
          <Link to='/offer/declared-stopovers'>
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
