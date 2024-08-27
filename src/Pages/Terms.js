import React from 'react';
import Footer from '../Components/footer';
import Header from '../Components/header';
import '../Styles/Terms.css';
import FAQ from '../Components/faq';
import CONTACT from '../Components/contact';

function Terms() {
  return (
    <>
    <Header></Header>
    <div className='terms'>

      <h1 className='terms_center'>Terms and Conditions / الشروط والأحكام</h1>
      
      <h3 className='terms_center'>1. Introduction / المقدمة</h3>
      <p className='terms_center'>Welcome to DIMA AL UROUBA TURNERY. By accessing our website, you agree to these terms and conditions.</p>
      <p className='terms_center'>مرحباً بكم في ديمة العروبة للخراطة. باستخدامكم لموقعنا الإلكتروني، توافقون على هذه الشروط والأحكام.</p>

      <h3 className='terms_center'>2. Use of Website / استخدام الموقع الإلكتروني</h3>
      <p className='terms_center'>You agree to use our website for lawful purposes and in a way that does not infringe on the rights of others.</p>
      <p className='terms_center'>توافقون على استخدام موقعنا لأغراض قانونية وبطريقة لا تنتهك حقوق الآخرين.</p>
      <p className='terms_center'>You must not use our website in any way that is fraudulent, harmful, or related to any unlawful purpose.</p>
      <p className='terms_center'>يجب عليكم عدم استخدام موقعنا بأي طريقة تكون احتيالية أو ضارة أو مرتبطة بأي غرض غير قانوني.</p>

      <h3 className='terms_center'>3. Products and Services / المنتجات والخدمات</h3>
      <p className='terms_center'>All products and services provided by DIMA AL UROUBA TURNERY are subject to availability and may be withdrawn at any time.</p>
      <p className='terms_center'>جميع المنتجات والخدمات المقدمة من ديمة العروبة للخراطة تخضع للتوافر ويمكن سحبها في أي وقت.</p>
      <p className='terms_center'>We reserve the right to modify the prices of our products and services at any time without prior notice.</p>
      <p className='terms_center'>نحتفظ بالحق في تعديل أسعار منتجاتنا وخدماتنا في أي وقت دون إشعار مسبق.</p>

      <h3 className='terms_center'>4. Orders and Payments / الطلبات والدفع</h3>
      <p className='terms_center'>By placing an order on our website, you agree to provide accurate and complete information.</p>
      <p className='terms_center'>عند تقديم طلب على موقعنا، توافقون على تقديم معلومات دقيقة وكاملة.</p>
      <p className='terms_center'>All payments must be made through the payment methods specified on our website.</p>
      <p className='terms_center'>يجب أن يتم الدفع من خلال طرق الدفع المحددة على موقعنا.</p>
      <p className='terms_center'>We are not responsible for any delays or errors in processing your payment.</p>
      <p className='terms_center'>نحن غير مسؤولين عن أي تأخير أو أخطاء في معالجة دفعتكم.</p>

      <h3 className='terms_center'>5. Shipping and Delivery / الشحن والتسليم</h3>
      <p className='terms_center'>We will make every effort to deliver your order within the estimated delivery time.</p>
      <p className='terms_center'>سنبذل قصارى جهدنا لتسليم طلبكم ضمن الوقت المقدر للتسليم.</p>
      <p className='terms_center'>Delivery times may vary depending on your location and external factors beyond our control.</p>
      <p className='terms_center'>قد تختلف أوقات التسليم بناءً على موقعكم والعوامل الخارجية التي لا نستطيع التحكم بها.</p>
      <p className='terms_center'>Any shipping costs will be displayed at checkout and are the responsibility of the customer.</p>
      <p className='terms_center' >سيتم عرض أي تكاليف شحن عند الدفع وهي مسؤولية العميل.</p>

      <h3 className='terms_center'>6. Returns and Refunds / الإرجاع والاسترداد</h3>
      <p className='terms_center'>If you are not satisfied with your purchase, you may return it within 30 days for a refund or exchange.</p>
      <p className='terms_center'>إذا لم تكن راضياً عن مشترياتك، يمكنك إرجاعها خلال 30 يوماً لاسترداد الأموال أو التبديل.</p>
      <p className='terms_center'>Returned items must be in their original condition and packaging.</p>
      <p className='terms_center'>يجب أن تكون العناصر المُعادة في حالتها الأصلية وتغليفها الأصلي.</p>
      <p className='terms_center'>Refunds will be processed using the original payment method.</p>
      <p className='terms_center'>سيتم معالجة الاستردادات باستخدام طريقة الدفع الأصلية.</p>

      <h3 className='terms_center'>7. Intellectual Property / الملكية الفكرية</h3>
      <p className='terms_center'>All content on our website, including images and text, is the property of DIMA AL UROUBA TURNERY and may not be used without permission.</p>
      <p className='terms_center'>جميع المحتويات الموجودة على موقعنا، بما في ذلك الصور والنصوص، هي ملك لديمة العروبة للخراطة ولا يجوز استخدامها بدون إذن.</p>
      <p className='terms_center'>You may not reproduce, distribute, or create derivative works from any content on our website without our explicit consent.</p>
      <p className='terms_center'>لا يجوز لكم إعادة إنتاج أو توزيع أو إنشاء أعمال مشتقة من أي محتوى على موقعنا دون موافقتنا الصريحة.</p>

      <h3 className='terms_center'>8. Privacy Policy / سياسة الخصوصية</h3>
      <p className='terms_center'>Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.</p>
      <p className='terms_center'>خصوصيتكم مهمة بالنسبة لنا. يرجى مراجعة سياسة الخصوصية الخاصة بنا لفهم كيفية جمع واستخدام وحماية معلوماتكم الشخصية.</p>

      <h3 className='terms_center'>9. Limitation of Liability / تحديد المسؤولية</h3>
      <p className='terms_center'>DIMA AL UROUBA TURNERY is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our website.</p>
      <p className='terms_center'>لا تتحمل ديمة العروبة للخراطة أي مسؤولية عن الأضرار المباشرة أو غير المباشرة أو العرضية أو التبعية الناجمة عن استخدام موقعنا.</p>
      <p className='terms_center'>We do not guarantee that our website will be error-free or uninterrupted.</p>
      <p className='terms_center'>لا نضمن أن يكون موقعنا خالياً من الأخطاء أو غير متقطع.</p>

      <h3 className='terms_center'>10. Governing Law / القانون الساري</h3>
      <p className='terms_center'> These terms and conditions are governed by the laws of [Your Country], and any disputes will be resolved in the courts of [Your Country].</p>
      <p className='terms_center'>تخضع هذه الشروط والأحكام لقوانين [بلدك]، وأي نزاعات سيتم حلها في محاكم [بلدك].</p>

      <h3 className='terms_center'>11. Changes to Terms / التغييرات في الشروط</h3>
      <p className='terms_center'>We reserve the right to update these terms and conditions at any time. Changes will be posted on this page.</p>
      <p className='terms_center'>نحتفظ بالحق في تحديث هذه الشروط والأحكام في أي وقت. سيتم نشر التغييرات على هذه الصفحة.</p>
      <p className='terms_center'>By continuing to use our website after any changes, you agree to the updated terms and conditions.</p>
      <p className='terms_center'>باستخدامكم المستمر لموقعنا بعد أي تغييرات، توافقون على الشروط والأحكام المحدثة.</p>
    </div>
    <FAQ></FAQ>
    <CONTACT></CONTACT>
    <Footer></Footer>
    </>
  );
}

export default Terms;