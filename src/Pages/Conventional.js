import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/Conventional.css';
import { useNavigate } from 'react-router-dom';
import GridImage from '../Resources/Grids/ConventionalMachineryGrid.webp';
import FAQ from '../Components/faq';
import CONTACT from '../Components/contact';

function Conventional() {
  const navigate = useNavigate();

  return (
    <>
      {/* SEO Metadata */}
      <head>
        <title>Conventional Machinery Services | DIMA AL UROUBA TURNERY</title>
        <meta 
          name="description" 
          content="Explore the traditional machining capabilities at DIMA AL UROUBA TURNERY. Our experienced machinists deliver precision and quality through advanced conventional machinery." 
        />
        <meta 
          name="keywords" 
          content="Conventional machinery, traditional machining, precision manufacturing, DIMA AL UROUBA TURNERY, high-quality machining services" 
        />
        <meta name="author" content="DIMA AL UROUBA TURNERY" />
      </head>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="conventional_hero">
        <h1 className="margin_bottom_zero">Conventional</h1>
        <h3 
          onClick={() => navigate('/departments')} 
          className="margin_bottom_zero clickable"
        >
          Departments
        </h3>
      </div>

      {/* Content Section */}
      <div className="conventional_grid_layout">
        {/* Image Section */}
        <div className="grid-image-layout">
          <img 
            src={GridImage} 
            className="grid-image" 
            alt="Conventional machinery at DIMA AL UROUBA TURNERY for precision manufacturing." 
          />
        </div>
        
        {/* Text Section */}
        <div id="conventional-grid-context-layout" className="grid-context-layout">
          <h1>Conventional Machinery | آلات تقليدية</h1>
          <p>
            At DIMA AL UROUBA TURNERY, our conventional machinery department plays a crucial role in our manufacturing process. 
            With a variety of traditional machining equipment, we are able to handle a wide range of manufacturing tasks with precision and efficiency. 
            Our experienced machinists are adept at operating these machines to produce high-quality parts that meet our clients' specifications.
          </p>
          <p>
            The combination of conventional machinery with our advanced CNC and lathe machines allows us to offer a comprehensive suite of manufacturing services. 
            This integration ensures that we can tackle complex projects while maintaining the flexibility to accommodate various production needs.
          </p>
          <p className="arabic-text" lang="ar">
            في شركة ديما العروبة للخراطة، يشكل قسم الآلات التقليدية دورًا حيويًا في عملية التصنيع لدينا. 
            مع مجموعة متنوعة من معدات التشغيل التقليدية، نحن قادرون على التعامل مع مجموعة واسعة من مهام التصنيع بدقة وكفاءة. 
            يتقن فنيو التشغيل لدينا تشغيل هذه الآلات لإنتاج قطع عالية الجودة تلبي مواصفات عملائنا.
          </p>
          <p className="arabic-text" lang="ar">
            إن دمج الآلات التقليدية مع ماكينات التحكم الرقمي CNC وماكينات الخراطة المتقدمة لدينا يتيح لنا تقديم مجموعة شاملة من خدمات التصنيع. 
            يضمن هذا التكامل قدرتنا على التعامل مع المشاريع المعقدة مع الحفاظ على المرونة لتلبية احتياجات الإنتاج المختلفة.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Section */}
      <CONTACT />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Conventional;
