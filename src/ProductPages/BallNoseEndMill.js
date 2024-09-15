
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
            <h1>Ball Nose End Mill | مطحنة نهاية الأنف الكروي </h1>
            <p>The Ball Nose End Mill is designed for intricate 3D contouring and smooth surface finishes. With a durable 3-inch tungsten carbide cutting edge and a 6-inch overall length, it excels in precision machining. Compatible with standard CNC machines, this tool is perfect for detailed work in molds and complex geometries</p>
            <p className='arabic-text' >تم تصميم مطحنة نهاية الكرة لخطوط ثلاثية الأبعاد معقدة وتشطيبات سطحية ناعمة. مع حافة قطع متينة من كربيد التنغستن مقاس 3 بوصات وطول إجمالي 6 بوصات، فهي تتفوق في التصنيع الدقيق. متوافقة مع آلات CNC القياسية، هذه الأداة مثالية للعمل التفصيلي في القوالب والأشكال الهندسية المعقدة</p>
           
            <div className='spilt_layout'>

              <div className='spilt_layout_1'>
                <h3>Generalized Specs</h3>
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
              </div>

              <div className='spilt_layout_2'>
                    <h3>المواصفات العامة</h3>
                    <p className='arabic-text'>
                        <b>المواد:</b> كربيد التنجستن، الفولاذ عالي السرعة <br></br>
                        <b>الأبعاد:</b> حافة قطع 3 بوصات، طول إجمالي 6 بوصات <br></br>
                        <b>التوافق:</b> يتناسب مع جميع آلات CNC القياسية <br></br>
                        <b>ملف القطع:</b> تصميم ذو طرف كروي للتموجات ثلاثية الأبعاد السلسة <br></br>
                        <b>المتانة:</b> مقاومة عالية للتآكل لعمر أداة ممتد <br></br>
                        <b>التطبيق:</b> مثالي لصنع القوالب، الصب بالقوالب، والهياكل المعقدة <br></br>
                        <b>الطلاء:</b> طلاء TiAlN لتعزيز مقاومة الحرارة والأكسدة <br></br>
                        <b>حجم الساق:</b> ساق عالمي بقياس 1/2 بوصة <br></br>  
                    </p>
              </div>

            </div>

            

        

            <br></br>
            <br></br>
            <button onClick={handleSendMessage} className='order_now'>Contact Us To Order | اتصل بنا للطلب</button>
          </div>

        </div>
       
        <FAQ></FAQ>
  
  
        <CONTACT></CONTACT>
        <Footer></Footer>
        </>
      );
    }
    
export default BallNoseEndMill;