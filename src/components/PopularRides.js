import { Box, Button, styled, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

//icons
import { BsArrowRightShort } from 'react-icons/bs';
import { BiChevronRight } from 'react-icons/bi';

//styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '95vw',
    maxWidth: '1016px',
    margin: '0 auto',
    '& h2': {
      fontSize: '30px',
      lineHeight: 1.06,
      fontWeight: 500,
      padding: '24px 0px',
    },
  },
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '8px 16px',
    gridAutoRows: 'minmax(4.75em, auto)',

    '@media (min-width : 900px)': {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
  },
  clickable: {
    display: 'flex',
    minHeight: '4.75em',
    '-webkit-box-align': 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255, 255, 255)',
    color: 'rgb(5, 71, 82)',
    fontSize: '18px',
    lineHeight: '20px',
    padding: '0 1rem',
    justifyContent: 'space-between',
    borderRadius: 10,
    color: '#222',
    fontWeight: 500,
    '& svg': {
      color: 'rgb(112, 140, 145)',
      fontSize: 25,
    },
  },
  price: {
    marginLeft: '1.1rem',
    fontWeight: 600,
    fontSize: 20,
  },
  ridesButton: {
    backgroundColor: 'transparent',
    borderRadius: 'inherit',
    color: 'rgb(0, 175, 245)',
  },
}));

const PopularRides = () => {
  const classes = useStyles();
  return (
    <Section>
      <Box className={classes.container}>
        <Typography variant='h2'>Where do you want to go?</Typography>
        <Box className={classes.wrapper}>
          <Box className={classes.item}>
            <Link to='#' className={classes.clickable}>
              <span>Delhi</span>
              <span>
                <BsArrowRightShort />
              </span>
              <span>Chandigarh</span>
              <span className={classes.price}>₹500</span>
              <span>
                <BiChevronRight />
              </span>
            </Link>
          </Box>
          <Box className={classes.item}>
            <Link to='#' className={classes.clickable}>
              <span>Delhi</span>
              <span>
                <BsArrowRightShort />
              </span>
              <span>Chandigarh</span>
              <span className={classes.price}>₹500</span>
              <span>
                <BiChevronRight />
              </span>
            </Link>
          </Box>
          <Box className={classes.item}>
            <Link to='#' className={classes.clickable}>
              <span>Delhi</span>
              <span>
                <BsArrowRightShort />
              </span>
              <span>Chandigarh</span>
              <span className={classes.price}>₹500</span>
              <span>
                <BiChevronRight />
              </span>
            </Link>
          </Box>
        </Box>
        <Box display='flex' justifyContent='flex-end' style={{ width: '100%' }}>
          <Button className={classes.ridesButton}>
            See our most popular rides
          </Button>
        </Box>
      </Box>
    </Section>
  );
};
const Section = styled('section')({
  width: '100%',
  backgroundColor: 'rgb(5, 71, 82)',
  color: '#fff',
  minHeight: 215,
  marginTop: '2rem',
});
export default PopularRides;
