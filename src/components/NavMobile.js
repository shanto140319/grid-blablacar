import { Box, Button, Icon, Toolbar, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const NavMobile = () => {
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
        <Button
          disableRipple
          className={classes.userbtn}
          onClick={() => setUser(!user)}
        >
          <FaUserCircle className={classes.user} />
          {user ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </Button>
      </Box>
    </Nav>
  );
};

const Nav = styled.div`
  height: 72px;
  padding: 0px 15px;
  z-index: 999;
  width: 100%;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  top: 0px;
  @media (min-width: 900px) {
    display: none;
  }
`;
export default NavMobile;
