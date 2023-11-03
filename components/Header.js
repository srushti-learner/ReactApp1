import React from 'react';
import {NavLink} from "react-router-dom";
import styled from 'styled-components';
import NavBar from './NavBar';
const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
            <img src="https://global-uploads.webflow.com/6077f96cf4fa19216396daaf/63f36981950c481a7701e95f_logo.png" alt="logo"/>
        </NavLink>
        <NavBar></NavBar>
    </MainHeader>
  )
};

const MainHeader = styled.header`
padding: 0 4.8rem;
height: 10rem;
background-color:${({theme})=>theme.colors.bg};
display: flex;
justify-content: space-between;
align-items:center;
position: relative;
.logo{
    height: 5rem;
}
img{
  width:35rem;
  height:20rem;
}
`;

export default Header