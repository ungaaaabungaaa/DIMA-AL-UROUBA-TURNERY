import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/home.css';
import Marquee from "react-fast-marquee";
import Cards from '../Components/cards';
import { objectives } from '../Data/objectivesData';

function Home() {
  return (
    <>
    <Header></Header>
    <div className='departments'>
      <br></br>
      <br></br>
      <h2>Departments</h2>
      <h3>Precision-engineered components crafted with expertise and <br></br> efficiency in our advanced  Department’s</h3>
      <br></br>



     





      <br></br>
    </div>
    <div className='objectives'>
    <br></br>
    <br></br>
    <h2>Objectives</h2>
    <br></br>
      <Marquee autoFill>
          <Cards objective={objectives[0]} />
          <Cards objective={objectives[1]} />
          <Cards objective={objectives[2]} />
          <Cards objective={objectives[3]} />
          <Cards objective={objectives[4]} />
          <Cards objective={objectives[5]} />
      </Marquee>
    <br></br>
    </div>

    <Footer></Footer>
    </>
  );
}

export default Home;