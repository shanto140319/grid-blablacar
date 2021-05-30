import React from 'react';
import { styled, Typography } from '@material-ui/core';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Offer from '../components/Offer';

const Home = () => {
  return (
    <Wrapper>
      <Navbar />
      <Header />
      <Hero />

      <Offer />
    </Wrapper>
  );
};
const Wrapper = styled('div')({});
export default Home;
