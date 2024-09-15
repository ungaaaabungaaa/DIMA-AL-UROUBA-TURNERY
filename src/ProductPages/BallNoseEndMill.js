
import BallNoseEndMillImage from '../Resources/SaleTools/BallNoseEndMill.webp';
import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import FAQ from '../Components/faq';
import CONTACT from '../Components/contact';
import '../Styles/product.css';


function BallNoseEndMill() {
   

    const handleSendMessage = () => {
      const whatsappNumber = '+966509909620';
        const whatsappUrl = `https://wa.me/${whatsappNumber}`;
        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');
    };
  
      return (
        <>
        <Header></Header>

        <div className='product_details_layout'>
          <div className='product_details_image'>
            <img className='product_image' src={BallNoseEndMillImage} ></img>
          </div>
          <div className='product_details_desc'>
            <h1>Ball Nose End Mill</h1>
            <p>The Ball Nose End Mill is designed for intricate 3D contouring and smooth surface finishes. With a durable 3-inch tungsten carbide cutting edge and a 6-inch overall length, it excels in precision machining. Compatible with standard CNC machines, this tool is perfect for detailed work in molds and complex geometries</p>
            <h3>Generalized Specs :</h3>
            <p>
               <b>Materials :</b> Tungsten Carbide, High-Speed Steel <br></br>
                <b>Dimensions :</b> 3-inch cutting edge, 6-inch total length  <br></br>
                <b>Compatibility :</b> Fits all standard CNC machines  <br></br>
                <b>Cutting Profile :</b> Ball nose design for smooth 3D contouring  <br></br>
                <b>Durability :</b> High wear resistance for extended tool life  <br></br>
                <b>Application :</b> Ideal for mold-making, die-casting, and complex geometries  <br></br>
                <b>Coating :</b> TiAlN coating for enhanced heat and oxidation resistance  <br></br>
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
    
export default BallNoseEndMill;