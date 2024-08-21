import React, { useState } from 'react';
import Faq from 'react-faq-component';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/Aboutus.css';
import Image1 from '../Resources/AboutUs.webp';
import Image3 from '../Resources/AboutUs3.webp';
import AboutImage1 from '../Resources/Aboutus/aboutus.webp';
import AboutImage2 from '../Resources/Aboutus/about2.webp';




function About() {
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
    <div className='aboutus_1'>
      <h1 className='aboutus_1_title'>Vision | رؤية </h1>
      <p className='aboutus_1_p'>
         Reaching the world i n the field of industry, turning, and maintenance i s not easy, but with patience and diligence we have
         reached what we aspire to, and for this reason we are trying to preserve the place we have reached, to always maintain our first ranking in our field, and thus we gain the trust of our customers
         <br></br>
         <br></br>
         إن الوصول إلى العالمية في مجال الصناعة والخراطة والصيانة ليس بالأمر السهل ولكن بالصبر والاجتهاد نصل
وصلنا إلى ما نطمح إليه، ولهذا السبب نحاول الحفاظ على المكانة التي وصلنا إليها، لنحافظ دائمًا على تصنيفنا الأول في مجالنا، وبالتالي نكتسب ثقة   عملائنا   
      </p>
    </div>
    <br></br>
    <div className='aboutus_2'>
      <img className='image1' src={Image1}></img>
    </div>
   
    <div class="container">
      <div class="Aboutus3_image">
        <img className='image2' src={AboutImage1}></img>
      </div>
      <div class="Aboutus3_titel">
        <h1>What set us apart ? | ما الذي يميزنا ؟</h1>
          <p>
           On a local scale, we have successfully built a large customer base by offering a distinctive set of features that prioritize us over others. At Dima Al-Orouba Turnery, we stand out for
          </p>
          <p>
          "على الصعيد المحلي، تمكنا من بناء قاعدة عملاء كبيرة من خلال تقديم مجموعة مميزة من الميزات التي تجعلنا أفضلون عن الآخرين. في مخرطة ديمة العروبة، نتميز بـ..."
          </p>
          <ul>
              <li>Our prices are competitive and unbeatable.</li>
              <li>More than 10 years experience.</li>
              <li>Updated state-of-the-art CNC lathe, laser machines and best work experience Guarantee on manufacturing quality and speed of implementation.</li>
              <li>We were able to provide many services to the largest number of customers.</li>
              <li>Provide free maintenance service within the warranty period.</li>
          </ul>
          <ul>
              <li>أسعارنا تنافسية ولا تُقاوم.</li>
              <li>أكثر من 10 سنوات من الخبرة.</li>
              <li>أحدث مخرطة CNC وآلات الليزر وأفضل تجربة عمل ضمان جودة التصنيع وسرعة التنفيذ.</li>
              <li>تمكنا من تقديم العديد من الخدمات لأكبر عدد من العملاء.</li>
              <li>تقديم خدمة الصيانة المجانية خلال فترة الضمان.</li>
          </ul>
          <br></br>
      </div>
    </div>  
    <br></br>

    <div class="container2">
      <div class="Aboutus4_image">
        <img className='image3' src={Image3}></img>
      </div>
      <div class="Aboutus4_titel">
        <h1>Objectives | أهداف </h1>
         <p>
         At Dima Al-Orouba Turner Foundation for Maintenance, we have set a set of different goals that contribute to enriching our march with more successes, whether at the local or global level as well.
         With our goals, we have devised many practical solutions that have supported us in the labor market in the field of turning and maintenance.
         Our goals are
         </p>
         <ul>
            <li>Work to expand the circle of products to meet the needs of the labor market</li>
            <li>Attracting the largest number of trained cadres, especially the maintenance team</li>
            <li>Permanent development of our services and methods of work</li>
            <li>Work on the geographical expansion of our headquarters in all cities of the Kingdom of Saudi Arabia</li>
            <li>Work on making our work distinct and unique from others</li>
            <li>Work to manufacture all spare parts of all shapes and types</li>
          </ul>
         <p>
         قمنا في مؤسسة ديما العروبة تيرنر للصيانة بوضع مجموعة من الأهداف المختلفة التي تساهم في إثراء مسيرتنا بمزيد من النجاحات سواء على المستوى المحلي أو العالمي أيضاً.
         وبأهدافنا ابتكرنا العديد من الحلول العملية التي دعمتنا في سوق العمل في مجال الخراطة والصيانة.
         أهدافنا هي
         </p>
          <ul>
            <li>العمل على توسيع دائرة المنتجات لتلبية احتياجات سوق العمل</li>
            <li>جذب أكبر عدد من الكوادر المدربة، خاصة فريق الصيانة</li>
            <li>التطوير الدائم لخدماتنا وطرق عملنا</li>
            <li>العمل على التوسع الجغرافي لمقراتنا في جميع مدن المملكة العربية السعودية</li>
            <li>العمل على أن يكون عملنا متميزًا ومتفردًا عن الآخرين</li>
            <li>العمل على تصنيع جميع قطع الغيار بجميع الأشكال والأنواع</li>
          </ul>
          <br></br>
      </div>
    </div> 
    <br></br> 

    <div class="container">
      <div class="Aboutus3_image">
        <img className='image2' src={AboutImage2}></img>
      </div>
      <div class="Aboutus3_titel">
        <h1>Services | خدمات</h1>
        <p>
          We have succeeded in providing many services since we established the entity Al-Orouba lathe for
          maintenance and with the passage of days, we are developing our services to suit modern
          technology and the needs of the times and on top of that lathes or what is included under it and a large group of industrial equipment.
        </p>
        <br></br>
        <p>
          لقد نجحنا في تقديم العديد من الخدمات منذ أن أسسنا كيان "الخراطة العروبة"
          للصيانة ومع مرور الأيام نقوم بتطوير خدماتنا لتتناسب مع التكنولوجيا الحديثة واحتياجات العصر 
          وعلى رأس ذلك المخارط أو ما يندرج تحتها ومجموعة كبيرة من المعدات الصناعية.
        </p>
        <br></br>
      </div>
    </div>  
    <br></br>

    <div className='faq'>
      <div className='faq_context'>
        <Faq data={data}/>
      </div>
    </div>
    <br></br>
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

export default About;