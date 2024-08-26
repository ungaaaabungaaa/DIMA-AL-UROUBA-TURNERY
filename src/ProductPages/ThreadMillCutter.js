
import ThreadMillCutterImage from '../Resources/SaleTools/ThreadMillCutter.webp';
import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import FAQ from '../Components/faq';
import CONTACT from '../Components/contact';
import '../Styles/product.css';


function ThreadMillCutter() {

    
  

      return (
        <>
        <Header></Header>
       
        


        <div className='product_details_layout'>
          <div className='product_details_image'>
            <img className='product_image' src={ThreadMillCutterImage} ></img>
          </div>
          <div className='product_details_desc'>
            <h1>Thread Mill Cutter</h1>
            <p>The Thread Mill Cutter is designed for precise and efficient threading operations across a range of materials. With a durable 3-inch tungsten carbide cutting edge and a 4-inch total length, it ensures clean and accurate threads every time. This cutter is compatible with standard CNC and manual milling machines, making it a versatile tool for threading tasks</p>
            <h3>Generalized Specs :</h3>
            <p>
               <b>Materials :</b> Tungsten Carbide, High-Speed Steel <br></br>
                <b>Dimensions :</b> 3-inch cutting edge, 4-inch total length  <br></br>
                <b>Compatibility :</b> Fits all standard CNC and manual milling machines  <br></br>
                <b>Cutting Profile :</b> Multi-tooth design for creating internal and external threads  <br></br>
                <b>Durability :</b> High wear resistance for long-lasting performance  <br></br>
                <b>Application :</b> Ideal for threading in hard and soft materials, including metals and plastics  <br></br>
                <b>Coating :</b> TiAlN coating for enhanced cutting efficiency and tool life  <br></br>
                <b>Shank Size :</b> 1/4-inch universal shank <br></br>
            </p>
            <br></br>
            <br></br>
            <button className='order_now'>Contact Us To Order</button>
          </div>

        </div>

        <FAQ></FAQ>
        <CONTACT></CONTACT>
        <Footer></Footer>
        </>
      );
    }
    
    export default ThreadMillCutter;