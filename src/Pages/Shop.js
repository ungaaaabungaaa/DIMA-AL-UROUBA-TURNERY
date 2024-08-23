import React, { useState } from 'react';

import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/shop.css';
import Faq from 'react-faq-component';
import Marquee from 'react-fast-marquee';
import product1 from '../Resources/Icons/cnc.svg';
import product2 from '../Resources/Icons/drill.svg';
import product3 from '../Resources/Icons/laser.svg';
import product4 from '../Resources/Icons/mill.svg';
import product5 from '../Resources/Icons/waves.svg';
import product6 from '../Resources/Icons/patjhsvg.svg';
import product7 from '../Resources/Icons/trim.svg';
import product8 from '../Resources/Icons/cutting.svg';
import { useNavigate } from 'react-router-dom';


function Shop() {
  
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  // Handle sending a message via WhatsApp
  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const whatsappNumber = '9665099096620';
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
      setMessage('');
    }
  };



  const data = {
    title: "FAQ",
    rows: 
    [
      {
        title: "What products do you manufacture? | ما هي المنتجات التي تصنعونها؟",
        content: "We manufacture a wide range of metal parts and components. Our seven departments specialize in various aspects of manufacturing, including CNC machining and lathe work. Additionally, we sell a selection of high-quality tools.| نحن نصنع مجموعة واسعة من الأجزاء والمكونات المعدنية. تتخصص أقسامنا السبعة في جوانب مختلفة من التصنيع، بما في ذلك التصنيع باستخدام الحاسب الآلي والعمل على المخرطة. بالإضافة إلى ذلك، نبيع مجموعة مختارة من الأدوات عالية الجودة."
      },
      {
        title: "How can I place an order ? | كيف يمكنني تقديم الطلب؟",
        content: "You can place an order by contacting our sales team via email or phone | يمكنك تقديم الطلب عن طريق التواصل مع فريق المبيعات لدينا عبر البريد الإلكتروني أو الهاتف"
      },
      {
        title: "Do you offer custom manufacturing services? | هل تقدمون خدمات التصنيع المخصصة؟",
        content: "Yes, we offer custom manufacturing services to meet your specific needs. Please reach out to us with your requirements, and our team will work with you to develop a tailored solution | نعم، نحن نقدم خدمات التصنيع المخصصة لتلبية احتياجاتك المحددة. يرجى التواصل معنا بمتطلباتك، وسيعمل فريقنا معك لتطوير حل مخصص"
      },
      {
        title: "How can I get in touch with customer support? | كيف يمكنني التواصل مع خدمة العملاء؟",
        content: "You can contact our customer support team through the contact form on our website, by email, or by calling our support hotline. We are here to assist you with any questions or concerns you may have. | يمكنك التواصل مع فريق دعم العملاء لدينا من خلال نموذج الاتصال الموجود على موقعنا الإلكتروني، أو عبر البريد الإلكتروني، أو عن طريق الاتصال بخط الدعم الساخن الخاص بنا. نحن هنا لمساعدتك في أي أسئلة أو مخاوف قد تكون لديك"
      },
      {
        title: "What is your lead time for manufacturing and delivery? | ما هي المهلة الزمنية اللازمة للتصنيع والتسليم؟",
        content: "Our lead time for manufacturing varies depending on the complexity of your order and our current production schedule. Typically, it ranges from 1 to 4 weeks. Once your order is processed, we will provide an estimated delivery date | يختلف وقت التسليم لدينا حسب تعقيد طلبك وجدول الإنتاج الحالي لدينا. وعادةً ما يتراوح من أسبوع إلى أربعة أسابيع. بمجرد معالجة طلبك، سنزودك بتاريخ تسليم تقديري"
      }
    
    ]
  }


  return (
    <>
      <Header />
      <Marquee className='sale_marquee_layout' autoFill>
        <h3 className='sale_marquee'>Tools Available For Sale | الأدوات المتاحة للبيع</h3>
      </Marquee>
      <div  className='container_shop'>
        <div onClick={() => navigate('/concavemilingcenter')}  className='Product1'>
          <img className='logo_grid_2' src={product1} alt="Concave Milling Center" />
          <h3 className='product_title'>Concave Milling Center</h3>
          <p className='product_des'>Concave Milling Center, designed for high-quality metalworking and accurate concave surface machining.</p>
        </div>
        <div onClick={() => navigate('/flycutter')}  className='Product2'>
          <img className='logo_grid_2' src={product2} alt="Fly Cutter" />
          <h3 className='product_title'>Fly Cutter</h3>
          <p className='product_des'>High-quality finishes with our Fly Cutter, perfect for facing large flat surfaces in metalworking.</p>
        </div>
        <div onClick={() => navigate('/ballnoseendmill')} className='Product3'>
          <img  className='logo_grid_2' src={product3} alt="Ball Nose End Mill" />
          <h3 className='product_title'>Ball Nose End Mill</h3>
          <p className='product_des'>Perfect for 3D contouring and smooth finishes, our Ball Nose End Mill delivers precision in complex metalworking tasks.</p>
        </div>
        <div onClick={() => navigate('/facemillingcutter')}  className='Product4'>
          <img className='logo_grid_2' src={product4} alt="Face Milling Cutter" />
          <h3 className='product_title'>Face Milling Cutter</h3>
          <p className='product_des'>Optimize surface finishing with our Face Milling Cutter, engineered for efficient and precise removal of material on large flat surfaces.</p>
        </div>
      </div>

      <div className='sale_highlight_layout'>
        <div className='sales_highligh_box'>
          <h3>Industrial Machine Tools Available For Sale | أدوات الآلات الصناعية المتاحة للبيع</h3>
          <div className='highlight_points'>
            <p>CNC Milling | Turning Tools الطحن باستخدام الحاسب الآلي | أدوات تحول <br /> CNC Holder | حامل CNC <br /> Carbide End Mill (Flat & Round) <br /> Carbide Insert (For CNC Milling | Turning) | مطحنة نهاية الكربيد (مسطحة ومستديرة) <br /> Micro Meter | ميكرومتر <br /> Vernier Caliper (Digital & Manual) | الورنية الفرجار (الرقمية ومانويل) <br /> Dial Indicator | اطلب مؤشر <br /> Drill Bit (Carbide & HSS) | لقمة الحفر (كربيد وHSS)</p>
          </div>
        </div>
      </div>

      <div className='container_shop'>
        <div onClick={() => navigate('/endmillcutter')}  className='Product1'>
          <img className='logo_grid_2' src={product5} alt="End Mill Cutter" />
          <h3 className='product_title'>End Mill Cutter</h3>
          <p className='product_des'>Enhance your machining versatility with our End Mill Cutter, ideal for precision cutting, slotting, and profiling in metalworking.</p>
        </div>
        <div onClick={() => navigate('/threadmillcutter')} className='Product2'>
          <img className='logo_grid_2' src={product6} alt="Thread Mill Cutter" />
          <h3 className='product_title'>Thread Mill Cutter</h3>
          <p className='product_des'>Achieve precise and clean threads with our Thread Mill Cutter, designed for efficient and reliable threading operations in metalworking.</p>
        </div>
        <div onClick={() => navigate('/roughingendmill')} className='Product3'>
          <img className='logo_grid_2' src={product7} alt="Roughing End Mill" />
          <h3 className='product_title'>Roughing End Mill</h3>
          <p className='product_des'>Maximize material removal with our Roughing End Mill, perfect for heavy-duty cutting and rapid stock removal in tough materials.</p>
        </div>
        <div  onClick={() => navigate('/woodruffcutter')} className='Product4'>
          <img className='logo_grid_2' src={product8} alt="Woodruff Cutter" />
          <h3 className='product_title'>Woodruff Cutter</h3>
          <p className='product_des'>Create accurate keyways and slots with ease using our Woodruff Cutter, ideal for precise and efficient machining in metalworking.</p>
        </div>
      </div>

      <div className='faq'>
        <div className='faq_context'>
          <Faq data={data} />
        </div>
      </div>

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

      <Footer />
    </>
  );
}

export default Shop;
