import React from 'react';
import { styled, Typography } from '@material-ui/core';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Offer from '../components/Offer';
import PopularRides from '../components/PopularRides';
const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Hero />
      <Offer />
      <PopularRides />
    </Wrapper>
  );
};
const Wrapper = styled('div')({});
export default Home;
