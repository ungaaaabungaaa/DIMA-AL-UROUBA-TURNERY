
import RoughingEndMillImage from '../Resources/SaleTools/RoughingEndMill.webp';
import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import FAQ from '../Components/faq';
import CONTACT from '../Components/contact';
import '../Styles/product.css';


function RoughingEndMill() {

    
  
    
  

      return (
        <>
        <Header></Header>


        <div className='product_details_layout'>
          <div className='product_details_image'>
            <img className='product_image' src={RoughingEndMillImage} ></img>
          </div>
          <div className='product_details_desc'>
            <h1>Roughing End Mill</h1>
            <p>The Roughing End Mill is engineered for rapid and efficient material removal in heavy-duty milling operations. Featuring a robust 4-flute design with a 1-inch cutting diameter and a 4-inch overall length, it excels in tackling tough materials while minimizing vibration and chatter. Compatible with all standard milling machines, this tool is essential for optimizing productivity in high-volume machining tasks.</p>
            <h3>Generalized Specs :</h3>
            <p>
               <b>Materials :</b> 1-inch cutting diameter, 4-inch overall length <br></br>
                <b>Dimensions :</b> 4-flute coarse pitch with serrated cutting edges  <br></br>
                <b>Compatibility :</b> Fits all standard milling machines and CNC machining centers  <br></br>
                <b>Cutting Profile :</b> Optimized for aggressive stock removal with reduced cutting forces  <br></br>
                <b>Durability :</b> Heat-treated and precision ground for enhanced strength and longevity  <br></br>
                <b>Coating :</b> TiAlN (Titanium Aluminum Nitride) coating for superior heat and wear resistance  <br></br>
                <b>Helix Angle :</b> 30-degree helix for efficient chip evacuation <br></br>
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
    
    export default RoughingEndMill;