import { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'كيف يمكن للذكاء الاصطناعي تغيير مستقبل العمل في 2025 | مدونة التكنولوجيا والربح',
  description: 'استكشف كيف يؤثر الذكاء الاصطناعي على سوق العمل وما هي المهارات المطلوبة للمستقبل في عام 2025',
  keywords: 'الذكاء الاصطناعي، مستقبل العمل، وظائف المستقبل، مهارات 2025، سوق العمل',
  openGraph: {
    title: 'كيف يمكن للذكاء الاصطناعي تغيير مستقبل العمل في 2025',
    description: 'استكشف كيف يؤثر الذكاء الاصطناعي على سوق العمل وما هي المهارات المطلوبة للمستقبل',
    url: 'https://tech-profit-blog.com/posts/ai-future-of-work-2025',
    siteName: 'مدونة التكنولوجيا والربح',
    locale: 'ar_AR',
    type: 'article',
    publishedTime: '2025-04-10T10:00:00Z',
  },
};

export default function AIFutureOfWorkPost() {
  // المنتجات الموصى بها (روابط تابعة)
  const recommendedProducts = [
    {
      id: 1,
      title: "دورة الذكاء الاصطناعي للمبتدئين",
      description: "تعلم أساسيات الذكاء الاصطناعي وتطبيقاته العملية في سوق العمل",
      link: "#",
      discount: "خصم 30% لفترة محدودة"
    },
    {
      id: 2,
      title: "كتاب 'مستقبل العمل في عصر الذكاء الاصطناعي'",
      description: "دليل شامل للتعامل مع التغييرات القادمة في سوق العمل",
      link: "#",
      discount: "شحن مجاني لفترة محدودة"
    },
    {
      id: 3,
      title: "اشتراك في منصة Coursera Plus",
      description: "وصول غير محدود لآلاف الدورات من أفضل الجامعات والشركات العالمية",
      link: "#",
      discount: "تجربة مجانية لمدة 7 أيام"
    }
  ];

  // المقالات ذات الصلة
  const relatedPosts = [
    {
      id: 1,
      title: "دليل شامل لاستخدام ChatGPT في تطوير الأعمال",
      slug: "chatgpt-business-development-guide",
      category: "الذكاء الاصطناعي"
    },
    {
      id: 2,
      title: "مقارنة بين أفضل أدوات الذكاء الاصطناعي لإنشاء المحتوى",
      slug: "best-ai-content-creation-tools-comparison",
      category: "الذكاء الاصطناعي"
    },
    {
      id: 3,
      title: "10 طرق مضمونة للربح من الإنترنت بدون رأس مال في 2025",
      slug: "10-ways-to-make-money-online-2025",
      category: "الربح من الإنترنت"
    }
  ];

  return (
    <>
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          {/* رأس المقال */}
          <header className="mb-8">
            <div className="mb-4">
              <Link href="/categories/ai" className="text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium">
                الذكاء الاصطناعي
              </Link>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              كيف يمكن للذكاء الاصطناعي تغيير مستقبل العمل في 2025
            </h1>
            <div className="flex items-center text-gray-600 text-sm mb-6">
              <span className="ml-4">بواسطة: فريق التحرير</span>
              <span className="ml-4">10 أبريل 2025</span>
              <span>وقت القراءة: 8 دقائق</span>
            </div>
            <div className="h-64 md:h-96 bg-gray-200 rounded-lg relative mb-6">
              {/* سيتم استبدال هذا بصورة حقيقية لاحقاً */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                صورة المقال الرئيسية
              </div>
            </div>
          </header>

          {/* محتوى المقال */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="lead text-xl text-gray-600 mb-6">
              مع التطور المتسارع للذكاء الاصطناعي، يشهد سوق العمل تحولات جذرية ستغير مفهوم الوظائف والمهارات المطلوبة في المستقبل القريب. في هذا المقال، نستكشف كيف سيؤثر الذكاء الاصطناعي على مستقبل العمل في عام 2025 وما هي المهارات التي ستكون مطلوبة للنجاح في هذا العصر الجديد.
            </p>

            <h2>تأثير الذكاء الاصطناعي على سوق العمل</h2>
            <p>
              يتوقع الخبراء أن يؤدي الذكاء الاصطناعي إلى تغييرات كبيرة في سوق العمل خلال السنوات القادمة. وفقًا لتقرير المنتدى الاقتصادي العالمي، من المتوقع أن يؤدي الذكاء الاصطناعي إلى اختفاء بعض الوظائف التقليدية، لكنه سيخلق في المقابل ملايين الوظائف الجديدة التي تتطلب مهارات مختلفة.
            </p>
            <p>
              من بين الوظائف المعرضة للخطر، نجد تلك التي تعتمد على المهام الروتينية والمتكررة، مثل إدخال البيانات، خدمة العملاء البسيطة، والمحاسبة الأساسية. في المقابل، ستزدهر الوظائف التي تتطلب الإبداع، الذكاء العاطفي، والتفكير النقدي.
            </p>

            <h2>الوظائف الجديدة في عصر الذكاء الاصطناعي</h2>
            <p>
              مع انتشار تقنيات الذكاء الاصطناعي، ستظهر وظائف جديدة لم تكن موجودة من قبل. من بين هذه الوظائف:
            </p>
            <ul>
              <li>مهندس أخلاقيات الذكاء الاصطناعي</li>
              <li>مدرب الذكاء الاصطناعي</li>
              <li>محلل تحيز الخوارزميات</li>
              <li>مستشار التحول الرقمي</li>
              <li>مصمم تجارب الواقع المعزز والافتراضي</li>
              <li>خبير التعاون بين الإنسان والآلة</li>
            </ul>
            <p>
              هذه الوظائف ستتطلب مزيجًا من المهارات التقنية والإنسانية، مما يؤكد أهمية التعليم المستمر والتكيف مع المتغيرات.
            </p>

            <h2>المهارات المطلوبة للنجاح في 2025</h2>
            <p>
              للبقاء في المنافسة في سوق العمل المستقبلي، يجب التركيز على تطوير المهارات التالية:
            </p>
            <ol>
              <li>
                <strong>التفكير النقدي وحل المشكلات المعقدة:</strong> القدرة على تحليل المواقف المعقدة واتخاذ قرارات مدروسة.
              </li>
              <li>
                <strong>الإبداع والابتكار:</strong> القدرة على التفكير خارج الصندوق وإيجاد حلول مبتكرة.
              </li>
              <li>
                <strong>الذكاء العاطفي:</strong> فهم المشاعر والتعامل معها بفعالية، سواء كانت مشاعرك أو مشاعر الآخرين.
              </li>
              <li>
                <strong>المرونة والتكيف:</strong> القدرة على التكيف مع المتغيرات والتعلم المستمر.
              </li>
              <li>
                <strong>فهم أساسيات الذكاء الاصطناعي:</strong> معرفة كيفية عمل الذكاء الاصطناعي وكيفية الاستفادة منه.
              </li>
              <li>
                <strong>مهارات التعاون والعمل الجماعي:</strong> القدرة على العمل بفعالية ضمن فريق متنوع.
              </li>
            </ol>

            <h2>كيف تستعد لمستقبل العمل؟</h2>
            <p>
              للاستعداد لمستقبل العمل في عصر الذكاء الاصطناعي، يمكنك اتباع الخطوات التالية:
            </p>
            <ol>
              <li>الاستثمار في التعليم المستمر والتدريب على المهارات الجديدة.</li>
              <li>متابعة آخر التطورات في مجال الذكاء الاصطناعي وتأثيره على مجال عملك.</li>
              <li>تطوير مهاراتك الإنسانية التي يصعب على الآلات تقليدها.</li>
              <li>بناء شبكة علاقات مهنية قوية.</li>
              <li>التفكير في إمكانية تغيير مسارك المهني إذا كان مجالك معرضًا للأتمتة.</li>
            </ol>

            <h2>الخلاصة</h2>
            <p>
              الذكاء الاصطناعي سيغير بلا شك مستقبل العمل، لكن هذا التغيير يحمل فرصًا كبيرة لمن يستعد له جيدًا. من خلال تطوير المهارات المناسبة والتكيف مع المتغيرات، يمكنك ليس فقط البقاء في المنافسة، بل والازدهار في سوق العمل المستقبلي.
            </p>
            <p>
              تذكر أن الهدف ليس منافسة الذكاء الاصطناعي، بل التعاون معه والاستفادة من قدراته لتعزيز إمكاناتك البشرية الفريدة.
            </p>
          </div>

          {/* قسم المنتجات الموصى بها (التسويق بالعمولة) */}
          <section className="bg-gray-50 rounded-lg p-6 mb-12 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4">منتجات وموارد نرشحها لك</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recommendedProducts.map(product => (
                <div key={product.id} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-bold mb-2">{product.title}</h4>
                  <p className="text-gray-600 mb-3 text-sm">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 text-sm font-medium">{product.discount}</span>
                    <a href={product.link} className="text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium">
                      اطلع عليه الآن &larr;
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4">
              * تحتوي بعض الروابط أعلاه على روابط تابعة، مما يعني أننا قد نحصل على عمولة صغيرة إذا قمت بالشراء من خلالها، دون أي تكلفة إضافية عليك.
            </p>
          </section>

          {/* قسم مشاركة المقال */}
          <section className="mb-12">
            <h3 className="text-xl font-bold text-gray-800 mb-4">شارك المقال</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                فيسبوك
              </a>
              <a href="#" className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-colors">
                تويتر
              </a>
              <a href="#" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                واتساب
              </a>
              <a href="#" className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors">
                لينكد إن
              </a>
            </div>
          </section>

          {/* قسم التعليقات */}
          <section className="mb-12">
            <h3 className="text-xl font-bold text-gray-800 mb-4">التعليقات</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <form>
                <div className="mb-4">
                  <label htmlFor="comment" className="block text-gray-700 mb-2">أضف تعليقك</label>
                  <textarea 
                    id="comment" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="اكتب تعليقك هنا..."
                  ></textarea>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">الاسم</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="اسمك"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">البريد الإلكتروني</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="بريدك الإلكتروني"
                    />
                  </div>
                </div>
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                >
                  إرسال التعليق
                </button>
              </form>
            </div>
          </section>

          {/* المقالات ذات الصلة */}
          <section className="mb-12">
            <h3 className="text-xl font-bold text-gray-800 mb-6">مقالات ذات صلة</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(post => (
                <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="p-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full mb-2">
                      {post.category}
                    </span>
                    <h4 className="text-lg font-bold mb-2">
                      <Link href={`/posts/${post.slug}`} className="text-gray-800 hover:text-blue-600 transition-colors">
                        {post.title}
                      </Link>
                    </h4>
                    <Link href={`/posts/${post.slug}`} className="text-blue-600 hover:text-blue-800 transition-colors text-sm">
                      قراءة المقال &larr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* قسم الاشتراك في النشرة البريدية */}
          <section className="bg-blue-600 text-white rounded-lg p-8 mb-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">اشترك في نشرتنا البريدية</h3>
              <p className="text-lg mb-6 text-blue-100">
                احصل على أحدث المقالات والأخبار حول الذكاء الاصطناعي ومستقبل العمل
              </p>
              <form className="flex flex-col md:flex-row gap-4 justify-center">
                <input 
                  type="email" 
                  placeholder="أدخل بريدك الإلكتروني" 
                  className="px-4 py-3 rounded-lg text-gray-800 w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  dir="rtl"
                />
                <button 
                  type="submit" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  اشترك الآن
                </button>
              </form>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}
