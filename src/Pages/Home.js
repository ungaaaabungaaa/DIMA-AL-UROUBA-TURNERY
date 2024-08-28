import React, { useState, useEffect } from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/home.css';
import Marquee from "react-fast-marquee";
import Cards from '../Components/cards';
import { objectives } from '../Data/objectivesData';
import { departments } from '../Data/departmentsData';
import DepartmentCards from '../Components/departmentCards';
import SomethingImage from '../Resources/AboutUs4.webp'
import sale1 from '../Resources/SaleTools/ConcaveMillingCenter.webp';
import sale2 from '../Resources/SaleTools/FlyCutter.webp';
import sale3 from '../Resources/SaleTools/BallNoseEndMill.webp';
import sale4 from '../Resources/SaleTools/FaceMillingCenter.webp';
import sale5 from '../Resources/SaleTools/EndMillCutter.webp';
import sale6 from '../Resources/SaleTools/ThreadMillCutter.webp';
import { useNavigate } from 'react-router-dom';
import FAQ from '../Components/faq';
import CONTACT from '../Components/contact';
import heroImage1 from '../Resources/Hero/Hero1.webp';
import heroImage2 from '../Resources/Hero/Hero2.webp';
import heroImage3 from '../Resources/Hero/Hero3.webp';
import heroImage4 from '../Resources/Hero/Hero4.webp';
import heroImage5 from '../Resources/Hero/Hero5.webp';


function Home() {

 
  
  const handleContactClick = () => {
    const phoneNumber = '9665099096620';
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  };


  const navigate = useNavigate();

  const images = [heroImage1,heroImage2,heroImage3,heroImage4,heroImage5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change image every 5 seconds
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [images.length]);
  

  return (
    <>
    <Header></Header>
   
    <div className='hero'>
      <div className='hero_text'>
        <h1 className='hero_title'>DIMA AL UROUBA</h1>
        <h3 className='hero_title_h3'>Precision Crafting for a Brighter Tomorrow | صناعة  <br></br>دقيقة لمستقبل أكثر إشراقًا</h3>
        <br></br>
        <button onClick={handleContactClick} className='contact_button'>Contact</button>
      </div>
      <div
        className='hero_image'
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      ></div>
    </div>


    <div id='somethingelse' className="container">
      <div class="Something-Else-Image">
        <img className='something_Image' src={SomethingImage}></img>
      </div>
      <div id='Something-else-Text' class="Something-else-Text">
        <h1>Something Else | شيء آخر </h1>
        <p className='something_p'>Reaching the world in the field of industry, turning, and maintenance is not easy, but with patience and diligence we have reached what we aspire to, and for this reason we are trying to preserve the place we have reached, to always maintain our first ranking in our field, and thus we gain the trust of our customers</p>
        <br></br>
        <p className='something_p'>الوصول إلى العالمية في مجال الصناعة والخراطة والصيانة ليس بالأمر السهل، ولكن بالصبر والاجتهاد وصلنا إلى ما نطمح إليه، ولهذا السبب نحاول الحفاظ على المكانة التي وصلنا إليها، لنحافظ دائمًا على مكانتنا الأولى التصنيف في مجالنا، وبالتالي نكتسب ثقة عملائنا</p>
        <div className='highlights'>
          <div className='highlights_text'>
            <h1>8K+</h1>
            <p>Products Shipped</p>
          </div>
          <div className='highlights_text'>
            <h1>6K+</h1>
            <p>Happy Customer</p>
          </div>
          <div className='highlights_text'>
            <h1>2K+</h1>
            <p>Staff Support</p>
          </div>
        </div>
      </div>
    </div>

    <div className='departments_layout'>
      <h2>Departments | الأقسام</h2>
      <h3>Precision-engineered components crafted with expertise and <br></br> efficiency in our advanced  Department’s | مكونات مصممة بدقة ومصممة بخبرة وكفاءة في قسمنا المتقدم</h3>
      <br></br>
      <Marquee pauseOnHover pauseOnClick >
            {departments.map((department, index) => (
              <DepartmentCards 
                key={index} 
                name={department.name} 
                desc={department.description} 
                icon={department.icon} 
                path={department.path} 
              />
            ))}
      </Marquee>
     
    </div>


    <div className='sales'>
      <h2>Machine Tools <br></br>For Sales | أدوات آلية للبيع</h2>
      <br></br>
      <div className='sales_grid'>
        <div onClick={() => navigate('/concavemilingcenter')}  className='salesCard1'>
         <img src={sale1} className='salesimage'></img>
         <br></br>
         <h3 className='margin_bottom_zero'>Concave Miling Center</h3>
         <p>delivers precision and efficiency for industrial cutting</p>
        </div>
        <div onClick={() => navigate('/flycutter')} className='salesCard2'>
         <img src={sale2} className='salesimage'></img>
         <br></br>
         <h3 className='margin_bottom_zero'>Fly Cutter</h3>
         <p>engineered for high-precision surface finishing and facing operations</p>
        </div>
        <div onClick={() => navigate('/ballnoseendmill')} className='salesCard3'>
          <img src={sale3} className='salesimage'></img>
          <br></br>
          <h3 className='margin_bottom_zero'>Ball Nose End Mill</h3>
          <p>3D contouring and smooth surface finishes. With a durable 3-inch tungsten carbide</p>
        </div>
      </div>
      <br></br>
      <div className='sales_grid'>
        <div onClick={() => navigate('/facemillingcutter')} className='salesCard1'>
         <img src={sale4} className='salesimage'></img>
         <br></br>
         <h3 className='margin_bottom_zero'>Face Milling Cutter</h3>
         <p>engineered for efficient material removal and superior surface finishes on large</p>
        </div>

        <div onClick={() => navigate('/endmillcutter')} className='salesCard2'>
         <img src={sale5} className='salesimage'></img>
         <br></br>
         <h3 className='margin_bottom_zero'>End Mill Cutter</h3>
         <p>versatility for a wide range of milling tasks, from slotting to contouring</p>
        </div>

        <div onClick={() => navigate('/threadmillcutter')} className='salesCard3'>
          <img src={sale6} className='salesimage'></img>
          <br></br>
          <h3 className='margin_bottom_zero'>Thread Mill Cutter</h3>
          <p>designed for precise and efficient threading operations across a range of materials</p>
        </div>
      </div>

    </div>


    <div className='objectives'>
    <h2 className='objectives_h1'>Objectives | أهداف</h2>
    <h3 className='objectives_h3'>Crafting precision-engineered components with expertise and <br></br> efficiency in our advanced department <br></br> تصنيع مكونات مصممة بدقة مع الخبرة والكفاءة في قسمنا المتقدم</h3>
    <br></br>
      <Marquee pauseOnHover pauseOnClick autoFill>
          <Cards objective={objectives[0]} />
          <Cards objective={objectives[1]} />
          <Cards objective={objectives[2]} />
          <Cards objective={objectives[3]} />
          <Cards objective={objectives[4]} />
          <Cards objective={objectives[5]} />
      </Marquee>
    <br></br>
    <br></br>
    <br></br>
    </div>


    <FAQ></FAQ>

    <br></br>

    <CONTACT></CONTACT>

    

    <Footer></Footer>
    </>
  );
}

export default Home;