import WoodRuffCutterImage from '../Resources/SaleTools/WoodRuffCutter.webp';
import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import FAQ from '../Components/faq';
import CONTACT from '../Components/contact';
import '../Styles/product.css';

function WoodRuffCutter() {
      
  
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
            <img className='product_image' src={WoodRuffCutterImage} ></img>
          </div>
          <div className='product_details_desc'>
            <h1>Wood Ruff Cutter | أداة قطع الخشب (راف)</h1>
            <p>The Woodruff Cutter is precision-engineered for creating keyways and slots with accuracy and efficiency. With a durable 2-inch tungsten carbide cutting edge and a 3-inch overall length, this cutter is ideal for both CNC and manual milling machines. It is specifically designed to produce clean and precise keyseat slots, ensuring a perfect fit for Woodruff keys</p>
            <p className='arabic-text'>تم تصميم أداة قطع الخشب (راف) بدقة لإنشاء فتحات ومفاتيح بدقة وكفاءة. مع حافة قطع متينة من كربيد التنغستن مقاس 2 بوصة وطول إجمالي 3 بوصات، تعد هذه القاطعة مثالية لكل من ماكينات الطحن CNC واليدوية. تم تصميمها خصيصًا لإنتاج فتحات مقاعد المفاتيح النظيفة والدقيقة، مما يضمن ملاءمة مثالية لمفاتيح أداة قطع الخشب (راف)</p>
      
            <div className='spilt_layout'>

              <div className='spilt_layout_1'>
                <h3>Generalized Specs</h3>
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
              
              </div>

              <div className='spilt_layout_2'>
                    <h3>المواصفات العامة</h3>
                    <p>
                      <b>المواد:</b> يتناسب مع جميع آلات الطحن واليدوية القياسية  <br></br>
                      <b>الأبعاد:</b> تصميم نصف دائري لقطع فتحات المفاتيح <br></br>
                      <b>التوافق:</b> مقاومة عالية للتآكل لعمر أداة ممتد <br></br>
                      <b>التطبيق:</b> مثالي لقطع فتحات مفاتيح وودروف، والفجوات، والأخاديد <br></br>
                      <b>الطلاء:</b> طلاء TiN (نيتريد التيتانيوم) لتحسين المتانة وتقليل الاحتكاك <br></br>
                      <b>حجم الساق:</b> ساق عالمي بقياس 1/2 بوصة <br></br>
                      <b>قطر القطع:</b> متوفر بأقطار مختلفة لأحجام المفاتيح المختلفة <br></br>
                      <b>زاوية الحلزون:</b> تصميم بشفرة مستقيمة لقطع نظيف وإزالة الرقائق <br></br>
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
    
    export default WoodRuffCutter;