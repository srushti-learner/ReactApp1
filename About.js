import React, { useContext } from 'react'
import MainSection from './components/MainSection';
import { AppContext, GlobalProductContext } from './context/productcontex';
const About = () => {
  //const info = GlobalProductContext();

  const data = {
    name:'DevTown Ecommerce',
  };
  return (
  <>
  
  <MainSection myData={data} />
  </>)
  
};

export default About