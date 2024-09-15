
import FlyCutterImage from '../Resources/SaleTools/FlyCutter.webp';
import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import FAQ from '../Components/faq';
import CONTACT from '../Components/contact';
import '../Styles/product.css';


function FlyCutter() {

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
            <img className='product_image' src={FlyCutterImage} ></img>
          </div>
          <div className='product_details_desc'>
            <h1>Fly Cutter | قاطع الذباب </h1>
            <p>The Fly Cutter is engineered for high-precision surface finishing and facing operations. Featuring a robust 4-inch high-speed steel blade and an 8-inch total length, it delivers consistent performance across various materials. Designed to fit standard milling machines, this tool ensures efficient and smooth cuts in every application.</p>
            <p className='arabic-text'>تم تصميم أداة القطع الذبابية لعمليات التشطيب والتغطية السطحية عالية الدقة. تتميز بشفرة فولاذية عالية السرعة مقاس 4 بوصات وطول إجمالي 8 بوصات، وتوفر أداءً ثابتًا عبر مواد مختلفة. تم تصميم هذه الأداة لتناسب ماكينات الطحن القياسية، وتضمن قطعًا فعّالة وسلسة في كل تطبيق.</p>
            <h3>Generalized Specs | المواصفات العامة</h3>
            <p>
               <b>Materials :</b> High-Speed Steel, Tungsten Carbide <br></br>
                <b>Dimensions :</b> 4-inch blade, 8-inch total length  <br></br>
                <b>Compatibility :</b> Fits all standard milling machines  <br></br>
                <b>Cutting Profile :</b> Single-point, adjustable cutting blade  <br></br>
                <b>Durability :</b> Heat-treated for superior strength and longevity  <br></br>
                <b>Application :</b> Ideal for flat surface finishing and large-diameter facing  <br></br>
                <b>Coating :</b> Precision ground for reduced friction  <br></br>
                <b>Shank Size :</b> 1-inch universal shank  <br></br>
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
    
    export default FlyCutter;