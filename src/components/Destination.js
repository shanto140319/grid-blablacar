import { styled } from '@material-ui/styles';
import React from 'react';
import { Box, Button } from '@material-ui/core';
//icon
import { CgShapeCircle } from 'react-icons/cg';
import { FiSearch } from 'react-icons/fi';
//images
import calendar from '../images/calendar.PNG';
import seat from '../images/seat.PNG';

//styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  single: {
    paddingLeft: 8,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0 5px',
    color: 'rgb(112, 140, 145)',
    fontSize: '16px',
    fontWeight: 600,
    '& svg': {
      width: '28px',
      height: '28px',
      color: 'rgb(112, 140, 145)',
    },
  },
  leave: {
    width: 278,
    paddingLeft: 10,
  },
  go: {
    width: 240,
  },
  date: {
    width: 160,
    color: 'rgb(5, 71, 82)',
    '& img': {
      width: 22,
      height: 22,
      objectFit: 'cover',
      marginRight: 8,
    },
  },
  passenger: {
    width: 160,
    color: 'rgb(5, 71, 82)',
    marginRight: 8,
    '& img': {
      width: 22,
      height: 22,
      objectFit: 'cover',
      marginRight: 3,
    },
  },

  hr: {
    marginLeft: 'auto',
    border: 'none',
    backgroundColor: 'rgb(237, 237, 237)',
    width: '1px',
    height: '40px',
    margin: '0px',
  },

  submitButton: {
    width: '88px',
    height: '56px',
    borderRadius: '0px 16px 16px 0px',
    backgroundColor: ' rgb(0, 175, 245)',
    padding: '0px',
    margin: 0,

    '& svg': {
      width: '28px',
      height: '28px',
      fontWeight: 'bolder',
      color: 'rgb(256, 256, 256)',
    },
    '&:hover': {
      backgroundColor: ' rgb(0, 170, 240)',
    },
  },
}));

const Destination = () => {
  const classes = useStyles();
  return (
    <Wrapper>
      <Box className={`${classes.single} ${classes.leave}`}>
        <CgShapeCircle />
        Leaving from...
        <hr className={classes.hr} />
      </Box>
      <Box className={`${classes.single} ${classes.go}`}>
        <CgShapeCircle />
        Going to...
        <hr className={classes.hr} />
      </Box>
      <Box className={`${classes.single} ${classes.date}`}>
        <img src={calendar} alt='' />
        Today
        <hr className={classes.hr} />
      </Box>
      <Box className={`${classes.single} ${classes.passenger}`}>
        <img src={seat} alt='' />1 passenger
      </Box>
      <Button className={classes.submitButton} type='submit'>
        <FiSearch />
      </Button>
    </Wrapper>
  );
};
const Wrapper = styled('div')({
  maxWidth: 928,
  backgroundColor: 'rgb(255, 255, 255)',
  boxShadow: 'rgb(0 0 0 / 16%) 0px 1pt 4pt, rgb(0 0 0 / 8%) 0px 2pt 8pt',
  borderRadius: '16px',
  height: 'auto',
  display: 'flex',
  '-webkit-box-align': 'center',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  gap: '2rem 0',
  '@media (max-width : 900px)': {
    flexWrap: 'wrap',
  },
});
export default Destination;
