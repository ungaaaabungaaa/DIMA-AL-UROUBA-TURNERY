import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/Cnc.css';
import { useNavigate } from 'react-router-dom';
import GridImage from '../Resources/machining/machining_grid/bending-grid.webp';
import FAQ from '../Components/faq';
import CONTACT from '../Components/contact';

function BendingMachning() {
    const navigate = useNavigate();
    return (
      <>
      <Header></Header>
      <div id='bending_Machine'>
          <h1 className='margin_bottom_zero'>Bending Machine</h1>
      </div>
      <div className='cnc_grid_layout'>
          <div className='grid-image-layout'>
            <img id='grid-machining-image' src={GridImage} className='grid-image'></img>
          </div>
          <div id='bending-machine-context-layout' className='grid-context-layout'>
            <h1>Bending Machine | قسم ماكينات الثني</h1>
            <p>At DIMA AL UROUBA TURNERY, our Bending Machine department plays a crucial role in shaping and forming materials with precision and consistency. Utilizing cutting-edge bending machinery, we can handle a wide range of materials, including metals, to create custom parts and components that meet the exact dimensions and requirements of our clients. Our experienced technicians work meticulously to ensure each bend is performed with the highest level of accuracy, ensuring the integrity and quality of the final product.
            <br></br>
            <br></br>
            Whether it's sheet metal or other materials, our bending machines allow us to execute complex shapes and angles with ease. This flexibility and capability enable us to deliver products that are both highly functional and tailored to our clients' needs.
            </p>
            <br></br>
            <p className='arabic-text'> 
            في شركة ديما العروبة للخراطة، يشكل قسم ماكينات الثني دورًا أساسيًا في تشكيل المواد بدقة وثبات. باستخدام ماكينات ثني متطورة، يمكننا التعامل مع مجموعة واسعة من المواد، بما في ذلك المعادن، لإنشاء أجزاء ومكونات مخصصة تلبي الأبعاد والمتطلبات الدقيقة لعملائنا. يعمل فنينا المتمرسون بعناية لضمان تنفيذ كل انحناءة بأعلى مستوى من الدقة، مما يضمن سلامة وجودة المنتج النهائي.
            <br></br>
            <br></br>
            سواء كانت صفائح معدنية أو مواد أخرى، تتيح لنا ماكينات الثني تنفيذ أشكال وزوايا معقدة بسهولة. تمنحنا هذه المرونة والقدرة على تقديم منتجات وظيفية للغاية ومصممة خصيصًا لتلبية احتياجات عملائنا.
            </p>
          </div>

      </div>
      

      <FAQ></FAQ>
      <CONTACT></CONTACT>
      <Footer></Footer>
      </>
    );
  }
  
  export default BendingMachning;