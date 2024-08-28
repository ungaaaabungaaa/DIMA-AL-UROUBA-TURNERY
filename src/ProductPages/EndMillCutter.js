import EndMillCutterImage from '../Resources/SaleTools/EndMillCutter.webp';
import React, { useState } from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import FAQ from 'react-faq-component';
import CONTACT from '../Components/contact';
import '../Styles/product.css';


function EndMillCutter() {

    

      const handleSendMessage = () => {
        const whatsappNumber = '0509909620';
        const whatsappUrl = `https://wa.me/${whatsappNumber}`;
        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');
      };
   
  
      return (
        <>
        <Header></Header>
       

        <div className='product_details_layout'>
          <div className='product_details_image'>
            <img className='product_image' src={EndMillCutterImage} ></img>
          </div>
          <div className='product_details_desc'>
            <h1>End Mill Cutter</h1>
            <p>The End Mill Cutter offers exceptional versatility for a wide range of milling tasks, from slotting to contouring. With a 4-flute tungsten carbide cutting edge and a 5-inch overall length, it delivers precision and durability in every cut. Compatible with standard milling machines, this tool is essential for both roughing and finishing operations.</p>
            <h3>Generalized Specs :</h3>
            <p>
               <b>Materials :</b> Tungsten Carbide, High-Speed Steel <br></br>
                <b>Dimensions :</b>  4-flute design, 5-inch total length  <br></br>
                <b>Compatibility :</b>  Fits all standard milling machines <br></br>
                <b>Cutting Profile :</b> Square end for clean and sharp edges  <br></br>
                <b>Durability :</b> Heat-resistant for prolonged tool life  <br></br>
                <b>Application :</b> Suitable for a variety of milling tasks including slotting, pocketing, and contouring  <br></br>
                <b>Coating :</b> TiN coating for reduced wear and friction  <br></br>
                <b>Shank Size :</b> 1/2-inch universal shank  <br></br>
            </p>
            <br></br>
            <br></br>
            <button onClick={handleSendMessage} className='order_now'>Contact Us To Order</button>
          </div>

        </div>
       
        <FAQ></FAQ>
        <CONTACT></CONTACT>
        <Footer></Footer>
        </>
      );
    }
    
    export default EndMillCutter;