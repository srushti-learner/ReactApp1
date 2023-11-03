import React from 'react';
import MainSection from './components/MainSection';
import FeatureProduct from './components/FeatureProduct';
const Home = () => {

  const data = {
    name:'Our Store',
  };
  return (
  <>
  <MainSection myData={data} />
  <FeatureProduct/>
  </>)
  
};


export default Home