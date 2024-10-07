import EndMillCutterImage from '../Resources/SaleTools/EndMillCutter.webp';
import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import FAQ from 'react-faq-component';
import CONTACT from '../Components/contact';
import '../Styles/product.css';


function EndMillCutter() {

    

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
            <img className='product_image' src={EndMillCutterImage} ></img>
          </div>
          <div className='product_details_desc'>
            <h1>End Mill Cutter | مخرطة نهايات </h1>
            <p>The End Mill Cutter offers exceptional versatility for a wide range of milling tasks, from slotting to contouring. With a 4-flute tungsten carbide cutting edge and a 5-inch overall length, it delivers precision and durability in every cut. Compatible with standard milling machines, this tool is essential for both roughing and finishing operations.</p>
            <p className='arabic-text'>توفر قاطعة الطحن الطرفية تنوعًا استثنائيًا لمجموعة واسعة من مهام الطحن، من التشقق إلى تحديد الخطوط. بفضل حافة القطع المصنوعة من كربيد التنغستن ذات الأربعة أخاديد وطولها الإجمالي الذي يبلغ 5 بوصات، فإنها توفر الدقة والمتانة في كل قطع. متوافقة مع ماكينات الطحن القياسية، تعد هذه الأداة ضرورية لكل من عمليات التشطيب والتشطيب.</p>

            <div className='spilt_layout'>
              <div className='spilt_layout_1'>
                <h3>Generalized Specs</h3>
                <p>
                    <b>Materials :</b> Tungsten Carbide, High-Speed Steel <br></br>
                    <b>Dimensions :</b>  4-flute design, 5-inch total length  <br></br>
                    <b>Compatibility :</b>  Fits all standard milling machines <br></br>
                    <b>Cutting Profile :</b> Square end for clean and sharp edges  <br></br>
                    <b>Durability :</b> Heat-resistant for prolonged tool life  <br></br>
                    <b>Application :</b> Suitable for a variety of milling tasks including slotting, pocketing, and contouring  <br></br>
                    <b>Coating :</b> TiN coating for reduced wear and friction  <br></br>
                    <b>Shank Size :</b> 1/2-inch universal shank  <br></br>
                </p>
              
              </div>

              <div className='spilt_layout_2'>
                    <h3>المواصفات العامة</h3>
                    <p>
                        <b>المواد:</b> كربيد التنجستن، الفولاذ عالي السرعة <br></br>
                        <b>الأبعاد:</b> تصميم 4 شفرات، طول إجمالي 5 بوصات <br></br>
                        <b>التوافق:</b> يتناسب مع جميع آلات الطحن القياسية <br></br>
                        <b>ملف القطع:</b> طرف مربع للحصول على حواف نظيفة وحادة <br></br>
                        <b>المتانة:</b> مقاوم للحرارة لعمر أداة طويل <br></br>
                        <b>التطبيق:</b> مناسب لمجموعة متنوعة من مهام الطحن بما في ذلك التثقيب، وحفر الجيوب، والتشكيل <br></br>
                        <b>الطلاء:</b> طلاء TiN لتقليل التآكل والاحتكاك <br></br>
                        <b>حجم الساق:</b> ساق عالمي بقياس 1/2 بوصة <br></br>
                    </p>
                    
              </div>

            </div>

            <br></br>
            <br></br>
            <button onClick={handleSendMessage} className='order_now'>Contact Us | اتصل بنا </button>
          </div>

        </div>
       
        <FAQ></FAQ>
        <CONTACT></CONTACT>
        <Footer></Footer>
        </>
      );
    }
    
    export default EndMillCutter;