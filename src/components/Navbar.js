import {
  Box,
  Button,
  Icon,
  Link,
  styled,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';

//images
import logo from '../images/logo.PNG';

//icons
import { FiSearch } from 'react-icons/fi';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { BiChevronRight } from 'react-icons/bi';
//styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 42,
    wisth: 160,
    objectFit: 'cover',
    marginTop: 8,
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '0 24px',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '0 8px',
    color: 'rgb(0, 175, 245)',
    cursor: 'ponter',
    fontSize: '16px',
    fontWeight: 600,
    '& svg': {
      width: 24,
      height: 24,
    },
  },

  userbtn: {
    '& svg': {
      width: 24,
      height: 24,
      color: 'rgb(112, 140, 145)',
    },
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  user: {
    width: '48px!important',
    height: '48px!important',
    color: '#DDDDDD!important',
    marginRight: '16px',
  },
  content: {
    width: '400px',
    transform: ' translateY(-100vh)',
    left: 'auto',
    right: 'auto',
    top: 0,
    float: 'right',
    position: 'relative',
    zIndex: 2,
    bottom: '0px',
    overflowY: 'auto',
    marginRight: 40,
    backgroundColor: 'rgb(255, 255, 255)',
    transition: 'transform 200ms ease-in-out 0s',
    willChange: 'transform',
    maxWidth: '100%',
  },
  contentShow: {
    boxShadow: 'rgb(0 0 0 / 30%) 0px 36px 36px 0px',
    transform: 'translateY(0%)',
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
  },
  list: {
    padding: '10px 20px',
    fontSize: 18,
    '& a': {
      color: '#222',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      '& svg': {
        fontSize: 25,
        color: 'rgb(112, 140, 145)',
      },
    },
    '&:hover': {
      backgroundColor: '#ededed',
    },
  },

  show: {
    zIndex: '10',
    visibility: 'visible!important',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(false);
  if (user) {
    document.body.classList.add('fixScroll');
  } else {
    document.body.classList.remove('fixScroll');
  }

  return (
    <Nav>
      <Box
        display='flex'
        justifyContent='space-between'
        style={{ width: '100%' }}
      >
        <Toolbar>
          <a href='/'>
            <img src={logo} className={classes.logo} alt='' />
          </a>
        </Toolbar>
        <Toolbar>
          <ul className={classes.navLinks}>
            <li>
              <a href='/about' className={classes.link}>
                <FiSearch />
                Find a ride
              </a>
            </li>
            <li>
              <Link to='/about' className={classes.link}>
                <AiOutlinePlusCircle />
                Offer a ride
              </Link>
            </li>
            <li>
              <Button
                disableRipple
                className={classes.userbtn}
                onClick={() => setUser(!user)}
              >
                <FaUserCircle className={classes.user} />
                {user ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </Button>
            </li>
          </ul>
        </Toolbar>
      </Box>
      <Aside className={user && classes.show}>
        <Box
          className={
            user ? `${classes.content} ${classes.contentShow}` : classes.content
          }
        >
          <ul className={classes.menu}>
            <li className={classes.list}>
              <a href='#' type='button'>
                <span>Log in</span>
                <span>
                  <BiChevronRight />{' '}
                </span>
              </a>
            </li>
            <li className={classes.list}>
              <a href='#' type='button'>
                <span>Sign up</span>
                <span>
                  <BiChevronRight />{' '}
                </span>
              </a>
            </li>
          </ul>
        </Box>
      </Aside>
    </Nav>
  );
};
const Nav = styled('nav')({
  height: '72px',
  padding: ' 0px 15px',
  zIndex: '999',
  width: '100%',
  backgroundColor: 'rgb(255, 255, 255)',
  display: 'flex',
  alignItems: 'center',
  top: '0px',
});

const Aside = styled('aside')({
  inset: ' 72px auto 0px 50%',
  width: '100%',
  position: 'fixed',
  transform: 'translate(-50%, 0px)',
  backgroundColor: 'rgba(0,0,0,.05)',
  visibility: 'hidden',
  // transitionDelay: '200ms',
  // transitionProperty: 'visibility',
});
export default Navbar;
