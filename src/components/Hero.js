import { Box, styled, Typography } from '@material-ui/core';
import React from 'react';
import bg from '../images/bg.svg';
//styles
import { makeStyles } from '@material-ui/core/styles';
import Destination from './Destination';

const useStyles = makeStyles((theme) => ({
  absolute: {
    position: 'absolute',
    bottom: '5%',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 2,
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <HeroSection>
      <Typography variant='h2'>Your ride. Your choice.</Typography>
      <Box className={classes.absolute}>
        <Destination />
      </Box>
    </HeroSection>
  );
};
const HeroSection = styled('div')({
  backgroundImage: `url(${bg})`,
  height: '45vh',
  Width: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  '& h2': {
    color: '#fff',
    marginTop: '1.2rem',
    fontSize: '60px',
    fontWeight: 500,
    letterSpacing: 0,
    zIndex: 2,
  },
  '&::before': {
    content: '""',
    display: 'block',
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,.1)',
    zIndex: 1,
  },
});
export default Hero;
