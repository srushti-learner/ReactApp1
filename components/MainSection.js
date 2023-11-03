import React  from 'react'
import { useState, useEffect } from 'react';

import styled from "styled-components";
import {Button} from '../styles/Button';
import { NavLink } from 'react-router-dom';
const MainSection = ({myData}) => {
  const imageUrls = ['https://s.yimg.com/uu/api/res/1.2/Dbd0gYccwSd8XyXU9CzLPA--~B/aD0xNDUxO3c9MjQwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2021-04/d1bce6d0-97a8-11eb-baee-1220f349268a.cf.jpg',
  "https://yourinfobucket.com/wp-content/uploads/2020/10/Earpods.jpg",
  "https://www.indabaa.com/wp-content/uploads/2020/06/feat-1920x1080.jpg",
];
const [currentImageIndex, setCurrentImageIndex] = useState(0);
const currentImageUrl = imageUrls[currentImageIndex];
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  }, 2500);  return () => {
    // Clear the interval when the component unmounts
    clearInterval(interval);
  };
}, []);
    const {name} = myData;
  return (
    <Wrapper>
        <div className ="container">
            <div className="grid grid-two-column">
                <div className="hero-section-data">
                    <p className="intro-data">Welcome to</p>
                    <h1>{name}</h1>
                    <p>We strive to cultivate a change in the current learning 
                      strategy of students and incorporate a reasonable learning methodology, to make them future-prepared 
                      with good knowledge of technologies and profound practical experience in those fields with developing projects.
                    </p>
                    <NavLink to='/products'>
                        <Button>Shop Now</Button>
                    </NavLink>
                </div>
                <div className='main-section-image'>
                    <figure>
                        <img src={currentImageUrl}  alt='main-image' className='img-style'></img>
                    </figure>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.fade {
  transition: opacity 1s;
}

padding: 12rem 0;
img {
  min-width: 10rem;
  height: 10rem;
}

.hero-section-data {
  p {
    margin: 2rem 0;
  }

  h1 {
    text-transform: capitalize;
    font-weight: bold;
  }

  .intro-data {
    color:#0859DE;
    margin-bottom: 0;
  }
}

.hero-section-image {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
figure {
  position: relative;

  &::after {
    content: "";
    width: 60%;
    height: 80%;
    background-color: rgba(81, 56, 238, 0.4);
    position: absolute;
    left: 50%;
    top: -5rem;
    z-index: -1;
  }
}
.img-style {
  width: 100%;
  height: auto;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid {
    gap: 10rem;
  }

  figure::after {
    content: "";
    width: 50%;
    height: 100%;
    left: 0;
    top: 10%;
    /* bottom: 10%; */
    background-color: rgba(81, 56, 238, 0.4);
  }
}`;

export default MainSection;