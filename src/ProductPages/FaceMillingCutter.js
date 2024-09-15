
import FaceMillingCutterImage from '../Resources/SaleTools/FaceMillingCenter.webp';
import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import { useNavigate } from 'react-router-dom';
import FAQ from '../Components/faq';
import CONTACT from '../Components/contact';
import '../Styles/product.css';


function FaceMillingCutter() {

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
            <img className='product_image' src={FaceMillingCutterImage} ></img>
          </div>
          <div className='product_details_desc'>
            <h1>Face Milling Cutter</h1>
            <p>The Face Milling Cutter is engineered for efficient material removal and superior surface finishes on large, flat surfaces. Featuring a 5-inch tungsten carbide insert and a 10-inch overall diameter, it is ideal for heavy-duty milling tasks. This cutter is compatible with all standard milling machines, ensuring high performance and precision</p>
            <p className='arabic-text'>تم تصميم قاطع الطحن الوجهي لإزالة المواد بكفاءة وتشطيبات سطحية فائقة على الأسطح الكبيرة والمسطحة. يتميز بقطعة كربيد التنجستن مقاس 5 بوصات وقطر إجمالي 10 بوصات، وهو مثالي لمهام الطحن الشاقة. يتوافق هذا القاطع مع جميع ماكينات الطحن القياسية، مما يضمن الأداء العالي والدقة</p>
            <h3>Generalized Specs | المواصفات العامة</h3>
            <p>
               <b>Materials :</b> Tungsten Carbide Inserts, High-Speed Steel Body <br></br>
                <b>Dimensions :</b> 5-inch insert, 10-inch total diameter  <br></br>
                <b>Compatibility :</b> Fits all standard milling machines  <br></br>
                <b>Cutting Profile :</b> Multi-insert design for enhanced cutting efficiency  <br></br>
                <b>Durability :</b> Inserts are heat-treated for extended wear life  <br></br>
                <b>Application :</b> Ideal for face milling, roughing, and finishing operations  <br></br>
                <b>Coating :</b> PVD coating for improved cutting performance <br></br>
                <b>Shank Size :</b>  1-inch arbor hole for universal fit  <br></br>
            </p>
            <br></br>
            <br></br>
            <button  onClick={handleSendMessage} className='order_now'>Contact Us To Order</button>
          </div>

        </div>
       
        <FAQ></FAQ>
  
  
        <CONTACT></CONTACT>
        <Footer></Footer>
        </>
      );
    }
    
    export default FaceMillingCutter;