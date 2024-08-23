import WoodRuffCutterImage from '../Resources/SaleTools/WoodRuffCutter.webp';
import React, { useState } from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import Faq from 'react-faq-component';
import '../Styles/product.css';


function WoodRuffCutter() {

    const [message, setMessage] = useState('');
  
    const handleSendMessage = () => {
      if (message.trim() !== '') {
        const whatsappNumber = '9665099096620';
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');
  
        // Clear the input field after sending
        setMessage('');
      }
    };
  
    const data = {
      title: "FAQ",
      rows: 
      [
        {
          title: "What products do you manufacture?",
          content: "We manufacture a wide range of metal parts and components. Our seven departments specialize in various aspects of manufacturing, including CNC machining and lathe work. Additionally, we sell a selection of high-quality tools."
        },
        {
          title: "How can I place an order ?",
          content: "You can place an order by contacting our sales team via email or phone"
        },
        {
          title: "Do you offer custom manufacturing services?",
          content: "Yes, we offer custom manufacturing services to meet your specific needs. Please reach out to us with your requirements, and our team will work with you to develop a tailored solution"
        },
        {
          title: "How can I get in touch with customer support?",
          content: "You can contact our customer support team through the contact form on our website, by email, or by calling our support hotline. We are here to assist you with any questions or concerns you may have."
        },
        {
          title: "What is your lead time for manufacturing and delivery?",
          content: "Our lead time for manufacturing varies depending on the complexity of your order and our current production schedule. Typically, it ranges from 1 to 4 weeks. Once your order is processed, we will provide an estimated delivery date"
        }
      
      ]
    }
  

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
       
        <div className='faq'>
          <div className='faq_context'>
            <Faq data={data}/>
          </div>
        </div>
  
  
        <div className='Contact_us'>
          <h1>Do You Have Any Questions? <br></br>
          Get Help From Us</h1>
          <div className='contact_us_highlight'>
              <div className='highlight'>
              <svg className='margin_right' xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" viewBox="0 0 24 24">
                <path fill="#695346" d="m8.6 22.5l-1.9-3.2l-3.6-.8l.35-3.7L1 12l2.45-2.8l-.35-3.7l3.6-.8l1.9-3.2L12 2.95l3.4-1.45l1.9 3.2l3.6.8l-.35 3.7L23 12l-2.45 2.8l.35 3.7l-3.6.8l-1.9 3.2l-3.4-1.45zm.85-2.55l2.55-1.1l2.6 1.1l1.4-2.4l2.75-.65l-.25-2.8l1.85-2.1l-1.85-2.15l.25-2.8l-2.75-.6l-1.45-2.4L12 5.15l-2.6-1.1L8 6.45l-2.75.6l.25 2.8L3.65 12l1.85 2.1l-.25 2.85l2.75.6zm1.5-4.4L16.6 9.9l-1.4-1.45l-4.25 4.25l-2.15-2.1L7.4 12z" />
              </svg>
                <p>Chat live On Whats App</p>
              </div>
              <br></br>
              <div className='highlight'>
                <svg className='margin_right' xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" viewBox="0 0 24 24">
                  <path fill="#695346" d="m8.6 22.5l-1.9-3.2l-3.6-.8l.35-3.7L1 12l2.45-2.8l-.35-3.7l3.6-.8l1.9-3.2L12 2.95l3.4-1.45l1.9 3.2l3.6.8l-.35 3.7L23 12l-2.45 2.8l.35 3.7l-3.6.8l-1.9 3.2l-3.4-1.45zm.85-2.55l2.55-1.1l2.6 1.1l1.4-2.4l2.75-.65l-.25-2.8l1.85-2.1l-1.85-2.15l.25-2.8l-2.75-.6l-1.45-2.4L12 5.15l-2.6-1.1L8 6.45l-2.75.6l.25 2.8L3.65 12l1.85 2.1l-.25 2.85l2.75.6zm1.5-4.4L16.6 9.9l-1.4-1.45l-4.25 4.25l-2.15-2.1L7.4 12z" />
                </svg>
                <p>Browse our FAQ</p>
              </div>
          </div>
          <div className='message_box'>
          <input 
              className='contact_message' 
              type="text" 
              placeholder="Enter your Message" 
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
    
    export default WoodRuffCutter;