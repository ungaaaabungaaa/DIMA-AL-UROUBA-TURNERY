import Faq from 'react-faq-component';
import '../Styles/faq.css';

function FAQ() {
  const data = {
    title: "FAQ",
    rows: [
      {
        title: "What products do you manufacture? | ما هي المنتجات التي تصنعونها؟",
        content: (
          <>
            <p>
              We manufacture a wide range of metal parts and components. Our seven departments specialize in various aspects of manufacturing, including CNC machining and lathe work. Additionally, we sell a selection of high-quality tools.
            </p>
            <p className='arabic-text'>
              نحن نصنع مجموعة واسعة من الأجزاء والمكونات المعدنية. تتخصص أقسامنا السبعة في جوانب مختلفة من التصنيع، بما في ذلك التصنيع باستخدام الحاسب الآلي والعمل على المخرطة. بالإضافة إلى ذلك، نبيع مجموعة مختارة من الأدوات عالية الجودة.
            </p>
          </>
        ),
      },
      {
        title: "How can I place an order? | كيف يمكنني تقديم الطلب؟",
        content: (
          <>
            <p>
              You can place an order by contacting our sales team via email or phone.
            </p>
            <p className='arabic-text'>
              يمكنك تقديم الطلب عن طريق التواصل مع فريق المبيعات لدينا عبر البريد الإلكتروني أو الهاتف.
            </p>
          </>
        ),
      },
      {
        title: "Do you offer custom manufacturing services? | هل تقدمون خدمات التصنيع المخصصة؟",
        content: (
          <>
            <p>
              Yes, we offer custom manufacturing services to meet your specific needs. Please reach out to us with your requirements, and our team will work with you to develop a tailored solution.
            </p>
            <p className='arabic-text'>
              نعم، نحن نقدم خدمات التصنيع المخصصة لتلبية احتياجاتك المحددة. يرجى التواصل معنا بمتطلباتك، وسيعمل فريقنا معك لتطوير حل مخصص.
            </p>
          </>
        ),
      },
      {
        title: "How can I get in touch with customer support? | كيف يمكنني التواصل مع خدمة العملاء؟",
        content: (
          <>
            <p>
              You can contact our customer support team through the contact form on our website, by email, or by calling our support hotline. We are here to assist you with any questions or concerns you may have.
            </p>
            <p className='arabic-text'>
              يمكنك التواصل مع فريق دعم العملاء لدينا من خلال نموذج الاتصال الموجود على موقعنا الإلكتروني، أو عبر البريد الإلكتروني، أو عن طريق الاتصال بخط الدعم الساخن الخاص بنا. نحن هنا لمساعدتك في أي أسئلة أو مخاوف قد تكون لديك.
            </p>
          </>
        ),
      },
      {
        title: "What is your lead time for manufacturing and delivery? | ما هي المهلة الزمنية اللازمة للتصنيع والتسليم؟",
        content: (
          <>
            <p>
              Our lead time for manufacturing varies depending on the complexity of your order and our current production schedule. Typically, it ranges from 1 to 4 weeks. Once your order is processed, we will provide an estimated delivery date.
            </p>
            <p className='arabic-text'>
              يختلف وقت التسليم لدينا حسب تعقيد طلبك وجدول الإنتاج الحالي لدينا. وعادةً ما يتراوح من أسبوع إلى أربعة أسابيع. بمجرد معالجة طلبك، سنزودك بتاريخ تسليم تقديري.
            </p>
          </>
        ),
      },
    ],
  };

  return (
    <div className='faq'>
      <div className='faq_context'>
        <Faq data={data} />
      </div>
    </div>
  );
}

export default FAQ;
