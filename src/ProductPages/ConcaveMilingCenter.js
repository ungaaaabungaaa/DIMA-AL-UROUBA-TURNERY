import ConcaveMilingCenterImage from '../Resources/SaleTools/ConcaveMillingCenter.webp';
import React, { useState } from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import FAQ from '../Components/faq';
import '../Styles/product.css';


function ConcaveMilingCenter() {

    const [message, setMessage] = useState('');
  
    const handleSendMessage = () => {
      if (message.trim() !== '') {
        const whatsappNumber = '0509909620';
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');
        // Clear the input field after sending
        setMessage('');
      }
    };
  
    
  

      return (
        <>
        <Header></Header>


        <div className='product_details_layout'>
          <div className='product_details_image'>
            <img className='product_image' src={ConcaveMilingCenterImage} ></img>
          </div>
          <div className='product_details_desc'>
            <h1>Concave Miling Center</h1>
            <p>Our Concave Milling Center delivers precision and efficiency for industrial cutting applications. Designed with a 6-inch tungsten carbide blade and a 12-inch total length, it ensures smooth and accurate material removal. Compatible with all standard industrial cutting machines, this tool is ideal for demanding manufacturing environments.</p>
            <h3>Generalized Specs :</h3>
            <p>
               <b>Materials :</b> Tungsten Carbide, High-Speed Steel <br></br>
                <b>Dimensions :</b> 6-inch blade, 12-inch total length  <br></br>
                <b>Compatibility :</b> Fits all standard industrial cutting machines  <br></br>
                <b>Cutting Angle :</b> 45-degree concave cutting edge <br></br>
                <b>Durability :</b> Heat-treated for enhanced wear resistance  <br></br>
                <b>Application :</b> Suitable for both heavy-duty and fine milling tasks  <br></br>
                <b>Coating :</b> Anti-corrosion coating for extended tool life  <br></br>
                <b>Shank Size :</b> 1-inch universal shank  <br></br>
            </p>
            <br></br>
            <br></br>
            <button className='order_now'>Contact Us To Order</button>
          </div>
        </div>
       
       <FAQ></FAQ>
  
  
        <div className='Contact_us'>
          <h1>Do You Have Any Questions? <br></br>
          Get Help From Us | هل لديك أي أسئلة؟
          احصل على المساعدة منا </h1>
          <div className='contact_us_highlight'>
              <div className='highlight'>
              <svg className='margin_right' xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" viewBox="0 0 24 24">
                <path fill="#695346" d="m8.6 22.5l-1.9-3.2l-3.6-.8l.35-3.7L1 12l2.45-2.8l-.35-3.7l3.6-.8l1.9-3.2L12 2.95l3.4-1.45l1.9 3.2l3.6.8l-.35 3.7L23 12l-2.45 2.8l.35 3.7l-3.6.8l-1.9 3.2l-3.4-1.45zm.85-2.55l2.55-1.1l2.6 1.1l1.4-2.4l2.75-.65l-.25-2.8l1.85-2.1l-1.85-2.15l.25-2.8l-2.75-.6l-1.45-2.4L12 5.15l-2.6-1.1L8 6.45l-2.75.6l.25 2.8L3.65 12l1.85 2.1l-.25 2.85l2.75.6zm1.5-4.4L16.6 9.9l-1.4-1.45l-4.25 4.25l-2.15-2.1L7.4 12z" />
              </svg>
                <p>Chat live On Whats App | الدردشة المباشرة على تطبيق واتس اب</p>
              </div>
              <br></br>
              <div className='highlight'>
                <svg className='margin_right' xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" viewBox="0 0 24 24">
                  <path fill="#695346" d="m8.6 22.5l-1.9-3.2l-3.6-.8l.35-3.7L1 12l2.45-2.8l-.35-3.7l3.6-.8l1.9-3.2L12 2.95l3.4-1.45l1.9 3.2l3.6.8l-.35 3.7L23 12l-2.45 2.8l.35 3.7l-3.6.8l-1.9 3.2l-3.4-1.45zm.85-2.55l2.55-1.1l2.6 1.1l1.4-2.4l2.75-.65l-.25-2.8l1.85-2.1l-1.85-2.15l.25-2.8l-2.75-.6l-1.45-2.4L12 5.15l-2.6-1.1L8 6.45l-2.75.6l.25 2.8L3.65 12l1.85 2.1l-.25 2.85l2.75.6zm1.5-4.4L16.6 9.9l-1.4-1.45l-4.25 4.25l-2.15-2.1L7.4 12z" />
                </svg>
                <p>Browse our FAQ | تصفح الأسئلة الشائعة لدينا</p>
              </div>
          </div>
          <div className='message_box'>
          <input 
              className='contact_message' 
              type="text" 
              placeholder="Enter your Message | أدخل رسالتك" 
              value={message}  
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className='contact_button' onClick={handleSendMessage}>Send</button>
         </div>
        </div>
        <Footer></Footer>
        </>
      );
    }
    
    export default ConcaveMilingCenter;