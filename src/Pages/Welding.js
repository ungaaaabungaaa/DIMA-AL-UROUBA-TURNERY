import React, { useState } from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/Welding.css';
import { useNavigate } from 'react-router-dom';
import GridImage from '../Resources/Grids/WeildingGrid.webp';
import FAQ from '../Components/faq';


function Welding() {
   const navigate = useNavigate();
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
      <div className='Weilding_hero'>
          <h1 className='margin_bottom_zero'>Weilding</h1>
          <h3 onClick={() => navigate('/departments')} className='margin_bottom_zero'>Departments</h3>
      </div>

      <div className='mold_grid_layout'>
        <div className='grid-image-layout'>
           <img src={GridImage} className='grid-image'></img>
        </div>
       
        <div className='grid-context-layout'>
        <h1>Welding Department | قسم اللحام</h1>
        <p>
          At DIMA AL UROUBA TURNERY, our welding department is pivotal in ensuring the structural integrity and strength of our manufactured products. We specialize in various welding techniques, including MIG, TIG, and arc welding, to join metal components with precision and durability. Our team of certified welders is committed to delivering high-quality welds that meet the stringent standards of our clients.
          <br />
          <br />
          Our welding department collaborates closely with other departments to ensure that all welded components fit seamlessly into the overall manufacturing process. This coordination allows us to provide comprehensive solutions that enhance the performance and reliability of our clients' products.
        </p>
        <br />
        <p>
          في شركة ديمة العروبة للخراطة، يُعتبر قسم اللحام جزءًا أساسيًا في ضمان السلامة الهيكلية وقوة المنتجات التي نصنعها. نتخصص في تقنيات اللحام المختلفة، بما في ذلك لحام MIG و TIG ولحام القوس الكهربائي، لربط المكونات المعدنية بدقة ومتانة. يلتزم فريقنا من اللحامين المعتمدين بتقديم لحامات عالية الجودة تلبي المعايير الصارمة لعملائنا.
          <br />
          <br />
          يتعاون قسم اللحام لدينا بشكل وثيق مع الأقسام الأخرى لضمان أن تتكامل جميع المكونات الملحومة بسلاسة في عملية التصنيع الشاملة. يتيح لنا هذا التنسيق تقديم حلول شاملة تعزز من أداء وموثوقية منتجات عملائنا.
        </p>
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
  
  export default Welding;