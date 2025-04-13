import { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'الربح من الإنترنت | مدونة التكنولوجيا والربح',
  description: 'تعرف على أفضل طرق الربح من الإنترنت بدون رأس مال كبير وكيفية تحقيق دخل إضافي عبر الإنترنت',
  keywords: 'الربح من الإنترنت، العمل الحر، التسويق بالعمولة، التجارة الإلكترونية، المدونات المربحة',
  openGraph: {
    title: 'الربح من الإنترنت | مدونة التكنولوجيا والربح',
    description: 'تعرف على أفضل طرق الربح من الإنترنت بدون رأس مال كبير وكيفية تحقيق دخل إضافي عبر الإنترنت',
    url: 'https://tech-profit-blog.com/categories/online-income',
    siteName: 'مدونة التكنولوجيا والربح',
    locale: 'ar_AR',
    type: 'website',
  },
};

export default function OnlineIncomeCategory() {
  // مقالات الربح من الإنترنت
  const onlineIncomePosts = [
    {
      id: 1,
      title: "10 طرق مضمونة للربح من الإنترنت بدون رأس مال في 2025",
      excerpt: "تعرف على أفضل الطرق للربح من الإنترنت التي لا تتطلب استثمارات كبيرة وكيفية البدء بها",
      slug: "10-ways-to-make-money-online-2025",
      date: "5 أبريل 2025",
      imageUrl: "/images/online-income.jpg"
    },
    {
      id: 2,
      title: "دليل شامل للتسويق بالعمولة للمبتدئين",
      excerpt: "كل ما تحتاج معرفته عن التسويق بالعمولة وكيفية تحقيق دخل مستدام من خلاله",
      slug: "affiliate-marketing-guide-for-beginners",
      date: "2 أبريل 2025",
      imageUrl: "/images/affiliate-marketing.jpg"
    },
    {
      id: 3,
      title: "كيفية إنشاء متجر إلكتروني ناجح بميزانية محدودة",
      excerpt: "خطوات عملية لإنشاء متجر إلكتروني مربح حتى لو كانت ميزانيتك محدودة",
      slug: "create-successful-ecommerce-store-limited-budget",
      date: "28 مارس 2025",
      imageUrl: "/images/ecommerce-store.jpg"
    },
    {
      id: 4,
      title: "كيف تربح من يوتيوب في 2025: دليل خطوة بخطوة",
      excerpt: "استراتيجيات فعالة لإنشاء قناة يوتيوب ناجحة وتحقيق دخل منها",
      slug: "how-to-make-money-from-youtube-2025",
      date: "25 مارس 2025",
      imageUrl: "/images/youtube-income.jpg"
    },
    {
      id: 5,
      title: "العمل الحر عبر الإنترنت: كيف تبدأ وتنجح",
      excerpt: "دليل شامل للعمل الحر عبر الإنترنت وكيفية بناء مسيرة مهنية ناجحة كمستقل",
      slug: "freelancing-how-to-start-and-succeed",
      date: "20 مارس 2025",
      imageUrl: "/images/freelancing.jpg"
    },
    {
      id: 6,
      title: "كيفية تحويل مدونتك إلى مصدر دخل مستدام",
      excerpt: "استراتيجيات فعالة لتحقيق الربح من مدونتك وتحويلها إلى مصدر دخل مستدام",
      slug: "turn-your-blog-into-sustainable-income",
      date: "15 مارس 2025",
      imageUrl: "/images/blog-income.jpg"
    }
  ];

  return (
    <>
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* عنوان القسم */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
              الربح من الإنترنت
            </h1>
            <p className="text-xl text-gray-600 text-center">
              تعرف على أفضل طرق الربح من الإنترنت وكيفية تحقيق دخل إضافي عبر العالم الرقمي
            </p>
          </div>
        </section>

        {/* قائمة المقالات */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {onlineIncomePosts.map(post => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 relative">
                  {/* سيتم استبدال هذا بصورة حقيقية لاحقاً */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    صورة المقال
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    <Link href={`/posts/${post.slug}`} className="text-gray-800 hover:text-blue-600 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{post.date}</span>
                    <Link href={`/posts/${post.slug}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                      قراءة المزيد
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* التنقل بين الصفحات */}
        <section className="flex justify-center mb-16">
          <nav className="inline-flex">
            <a href="#" className="px-4 py-2 mx-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors">
              السابق
            </a>
            <a href="#" className="px-4 py-2 mx-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              1
            </a>
            <a href="#" className="px-4 py-2 mx-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors">
              2
            </a>
            <a href="#" className="px-4 py-2 mx-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors">
              التالي
            </a>
          </nav>
        </section>

        {/* قسم الاشتراك في النشرة البريدية */}
        <section className="bg-blue-600 text-white rounded-lg p-8 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">احصل على أحدث فرص الربح من الإنترنت</h2>
            <p className="text-lg mb-6 text-blue-100">
              اشترك في نشرتنا البريدية للحصول على آخر طرق وفرص الربح من الإنترنت
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

        {/* قسم الروابط التابعة */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12 border border-gray-200">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">منتجات وخدمات نرشحها لك</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">منصة Hostinger لاستضافة المواقع</h3>
                <p className="text-gray-600 mb-4">أفضل استضافة للمبتدئين بأسعار تنافسية وأداء ممتاز</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
                  احصل على خصم 75% &larr;
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">منصة Canva Pro للتصميم</h3>
                <p className="text-gray-600 mb-4">أداة تصميم احترافية سهلة الاستخدام لإنشاء محتوى بصري جذاب</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
                  جرب مجاناً لمدة 30 يوم &larr;
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2">دورة التسويق بالعمولة للمبتدئين</h3>
                <p className="text-gray-600 mb-4">تعلم أساسيات التسويق بالعمولة وابدأ في تحقيق أرباحك الأولى</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
                  سجل الآن بخصم 50% &larr;
                </a>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-6 text-center">
              * تحتوي بعض الروابط أعلاه على روابط تابعة، مما يعني أننا قد نحصل على عمولة صغيرة إذا قمت بالشراء من خلالها، دون أي تكلفة إضافية عليك.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
