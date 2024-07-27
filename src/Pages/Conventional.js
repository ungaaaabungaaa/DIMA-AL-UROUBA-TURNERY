import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/Conventional.css';

function Conventional() {
    return (
      <>
      <Header></Header>
      <div className='conventional_hero'>
          <h1 className='margin_bottom_zero'>Conventional</h1>
          <h3 className='margin_bottom_zero'>Departments</h3>
      </div>
      <Footer></Footer>
      </>
    );
  }
  
  export default Conventional;