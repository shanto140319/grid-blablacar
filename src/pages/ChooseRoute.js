import React from 'react';
import { Box, Button, styled, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Map from '../components/Map';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '1rem 2rem',
    '& h1': {
      textAlign: 'center',
      fontSize: 37,
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
const Wrapper = styled('section')({
  display: 'grid',
  '@media (min-width : 800px)': {
    gridTemplateColumns: '1fr 1fr',
  },
});
export default ChooseRoute;
