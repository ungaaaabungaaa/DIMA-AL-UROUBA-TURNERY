import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/Aboutus.css';
import Image1 from '../Resources/AboutUs.jpg';
import Image2 from '../Resources/AboutUs2.jpg';
import Image3 from '../Resources/AboutUs3.jpg';
import Image4 from '../Resources/AboutUs4.jpg';


function About() {
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
    <br></br>


    <div class="container">
      <div class="Aboutus3_image">
        <img className='image2' src={Image2}></img>
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
        <img className='image2' src={Image4}></img>
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



    <Footer></Footer>
    </>
  );
}

export default About;