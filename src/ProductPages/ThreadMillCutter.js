
import ThreadMillCutterImage from '../Resources/SaleTools/ThreadMillCutter.webp';
import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import FAQ from '../Components/faq';
import CONTACT from '../Components/contact';
import '../Styles/product.css';


function ThreadMillCutter() {

  
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
            <img className='product_image' src={ThreadMillCutterImage} ></img>
          </div>
          <div className='product_details_desc'>
            <h1>Thread Mill Cutter | قاطعة الخيوط </h1>
            <p>The Thread Mill Cutter is designed for precise and efficient threading operations across a range of materials. With a durable 3-inch tungsten carbide cutting edge and a 4-inch total length, it ensures clean and accurate threads every time. This cutter is compatible with standard CNC and manual milling machines, making it a versatile tool for threading tasks</p>
            <p className='arabic-text'>تم تصميم قاطعة الخيط لعمليات الخيط الدقيقة والفعّالة عبر مجموعة من المواد. بفضل حافة القطع المتينة المصنوعة من كربيد التنجستن مقاس 3 بوصات والطول الإجمالي 4 بوصات، تضمن خيوطًا نظيفة ودقيقة في كل مرة. هذه القاطعة متوافقة مع ماكينات الطحن اليدوية والرقمية القياسية، مما يجعلها أداة متعددة الاستخدامات لمهام الخيط</p>
           
            
            <div className='spilt_layout'>

              <div className='spilt_layout_1'>
                <h3>Generalized Specs</h3>
                <p>
                <b>Materials :</b> Tungsten Carbide, High-Speed Steel <br></br>
                <b>Dimensions :</b> 3-inch cutting edge, 4-inch total length  <br></br>
                <b>Compatibility :</b> Fits all standard CNC and manual milling machines  <br></br>
                <b>Cutting Profile :</b> Multi-tooth design for creating internal and external threads  <br></br>
                <b>Durability :</b> High wear resistance for long-lasting performance  <br></br>
                <b>Application :</b> Ideal for threading in hard and soft materials, including metals and plastics  <br></br>
                <b>Coating :</b> TiAlN coating for enhanced cutting efficiency and tool life  <br></br>
                <b>Shank Size :</b> 1/4-inch universal shank <br></br>
               </p>
              </div>

              <div className='spilt_layout_2'>
                <h3>المواصفات العامة</h3>
                <p>
                  <b>المواد:</b> كربيد التنجستن، الفولاذ عالي السرعة <br></br>
                  <b>الأبعاد:</b> حافة قطع بطول 3 بوصات، طول إجمالي 4 بوصات <br></br>
                  <b>التوافق:</b> يتناسب مع جميع آلات الطحن CNC واليدوية القياسية <br></br>
                  <b>ملف القطع:</b> تصميم متعدد الأسنان لإنشاء الخيوط الداخلية والخارجية <br></br>
                  <b>المتانة:</b> مقاومة عالية للتآكل لأداء طويل الأمد <br></br>
                  <b>التطبيق:</b> مثالي للخيوط في المواد الصلبة واللينة، بما في ذلك المعادن والبلاستيك <br></br>
                  <b>الطلاء:</b> طلاء TiAlN لتحسين كفاءة القطع وعمر الأداة <br></br>
                  <b>حجم الساق:</b> ساق عالمي بقياس 1/4 بوصة <br></br>
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
    
    export default ThreadMillCutter;