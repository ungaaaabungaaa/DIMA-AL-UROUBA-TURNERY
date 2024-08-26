import WoodRuffCutterImage from '../Resources/SaleTools/WoodRuffCutter.webp';
import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import FAQ from '../Components/faq';
import CONTACT from '../Components/contact';
import '../Styles/product.css';


function WoodRuffCutter() {

      return (
        <>
        <Header></Header>
        
        <div className='product_details_layout'>
          <div className='product_details_image'>
            <img className='product_image' src={WoodRuffCutterImage} ></img>
          </div>
          <div className='product_details_desc'>
            <h1>Wood Ruff Cutter</h1>
            <p>The Woodruff Cutter is precision-engineered for creating keyways and slots with accuracy and efficiency. With a durable 2-inch tungsten carbide cutting edge and a 3-inch overall length, this cutter is ideal for both CNC and manual milling machines. It is specifically designed to produce clean and precise keyseat slots, ensuring a perfect fit for Woodruff keys</p>
            <h3>Generalized Specs :</h3>
            <p>
               <b>Materials :</b> Fits all standard CNC and manual milling machines <br></br>
                <b>Dimensions :</b> Half-moon design for cutting keyseat slots  <br></br>
                <b>Compatibility :</b> High wear resistance for extended tool life  <br></br>
                <b>Application :</b> Ideal for cutting Woodruff keyways, slots, and grooves  <br></br>
                <b>Coating :</b> TiN (Titanium Nitride) coating for enhanced durability and reduced friction  <br></br>
                <b>Shank Size :</b> 1/2-inch universal shank  <br></br>
                <b>Cutting Diameter :</b> Available in various diameters for different key sizes <br></br>
                <b>Helix Angle:</b> Straight flute design for clean cuts and chip removal <br></br>
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
    
    export default WoodRuffCutter;