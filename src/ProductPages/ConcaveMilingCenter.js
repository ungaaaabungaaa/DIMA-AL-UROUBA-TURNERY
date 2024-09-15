import ConcaveMilingCenterImage from '../Resources/SaleTools/ConcaveMillingCenter.webp';
import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import FAQ from '../Components/faq';
import CONTACT from '../Components/contact';
import '../Styles/product.css';


function ConcaveMilingCenter() {

    

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
            <img className='product_image' src={ConcaveMilingCenterImage} ></img>
          </div>
          <div className='product_details_desc'>
            <h1>Concave Miling Center | مركز ميلينغ المقعر </h1>
            <p>Our Concave Milling Center delivers precision and efficiency for industrial cutting applications. Designed with a 6-inch tungsten carbide blade and a 12-inch total length, it ensures smooth and accurate material removal. Compatible with all standard industrial cutting machines, this tool is ideal for demanding manufacturing environments.</p>
            <p className='arabic-text'>يوفر مركز الطحن المقعر لدينا الدقة والكفاءة لتطبيقات القطع الصناعية. تم تصميمه بشفرة من كربيد التنجستن مقاس 6 بوصات وطول إجمالي 12 بوصة، مما يضمن إزالة المواد بسلاسة ودقة. متوافق مع جميع آلات القطع الصناعية القياسية، هذه الأداة مثالية لبيئات التصنيع الصعبة.</p>
            <h3>Generalized Specs | المواصفات العامة</h3>
            <p>
               <b>Materials :</b> Tungsten Carbide, High-Speed Steel <br></br>
                <b>Dimensions :</b> 6-inch blade, 12-inch total length  <br></br>
                <b>Compatibility :</b> Fits all standard industrial cutting machines  <br></br>
                <b>Cutting Angle :</b> 45-degree concave cutting edge <br></br>
                <b>Durability :</b> Heat-treated for enhanced wear resistance  <br></br>
                <b>Application :</b> Suitable for both heavy-duty and fine milling tasks  <br></br>
                <b>Coating :</b> Anti-corrosion coating for extended tool life  <br></br>
                <b>Shank Size :</b> 1-inch universal shank  <br></br>
            </p>
            <br></br>
            <br></br>
            <button onClick={handleSendMessage} className='order_now'>Contact Us To Order</button>
          </div>
        </div>
       
       <FAQ></FAQ>
       <CONTACT></CONTACT>
        <Footer></Footer>
        </>
      );
    }
    
    export default ConcaveMilingCenter;