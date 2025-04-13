import { Metadata } from 'next';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'مقالات التكنولوجيا | مدونة التكنولوجيا والربح',
  description: 'استكشف أحدث مقالات التكنولوجيا والتقنيات الحديثة وتأثيرها على حياتنا اليومية',
  keywords: 'تكنولوجيا، تقنية، برمجة، تطوير الويب، تطبيقات، هواتف ذكية',
  openGraph: {
    title: 'مقالات التكنولوجيا | مدونة التكنولوجيا والربح',
    description: 'استكشف أحدث مقالات التكنولوجيا والتقنيات الحديثة وتأثيرها على حياتنا اليومية',
    url: 'https://tech-profit-blog.com/categories/technology',
    siteName: 'مدونة التكنولوجيا والربح',
    locale: 'ar_AR',
    type: 'website',
  },
};

export default function TechnologyCategory() {
  // مقالات التكنولوجيا
  const technologyPosts = [
    {
      id: 1,
      title: "دليل شامل لتحسين محركات البحث SEO للمبتدئين",
      excerpt: "كل ما تحتاج معرفته عن تحسين محركات البحث وكيفية تطبيقه على موقعك الإلكتروني",
      slug: "complete-seo-guide-for-beginners",
      date: "1 أبريل 2025",
      imageUrl: "/images/seo-guide.jpg"
    },
    {
      id: 2,
      title: "مقارنة بين أفضل منصات التجارة الإلكترونية في 2025",
      excerpt: "دراسة مقارنة بين أشهر منصات التجارة الإلكترونية وأيها يناسب مشروعك",
      slug: "best-ecommerce-platforms-comparison-2025",
      date: "12 أبريل 2025",
      imageUrl: "/images/ecommerce.jpg"
    },
    {
      id: 3,
      title: "أفضل 5 لغات برمجة يجب تعلمها في 2025",
      excerpt: "تعرف على أكثر لغات البرمجة طلباً في سوق العمل وكيفية البدء في تعلمها",
      slug: "top-5-programming-languages-2025",
      date: "3 أبريل 2025",
      imageUrl: "/images/programming.jpg"
    },
    {
      id: 4,
      title: "كيف تحمي نفسك من هجمات التصيد الإلكتروني",
      excerpt: "نصائح وإرشادات لحماية بياناتك الشخصية من محاولات الاختراق والتصيد الإلكتروني",
      slug: "protect-yourself-from-phishing-attacks",
      date: "28 مارس 2025",
      imageUrl: "/images/cybersecurity.jpg"
    },
    {
      id: 5,
      title: "مستقبل تقنية الواقع المعزز في التعليم",
      excerpt: "كيف يمكن لتقنية الواقع المعزز أن تغير طريقة التعليم والتعلم في المستقبل القريب",
      slug: "future-of-ar-in-education",
      date: "20 مارس 2025",
      imageUrl: "/images/ar-education.jpg"
    },
    {
      id: 6,
      title: "أفضل أدوات إدارة المشاريع للفرق عن بعد",
      excerpt: "استعراض لأفضل الأدوات التي تساعد الفرق على العمل عن بعد بكفاءة وإنتاجية",
      slug: "best-project-management-tools-remote-teams",
      date: "15 مارس 2025",
      imageUrl: "/images/project-management.jpg"
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
              مقالات التكنولوجيا
            </h1>
            <p className="text-xl text-gray-600 text-center">
              استكشف أحدث المقالات والأخبار في عالم التكنولوجيا والتقنيات الحديثة
            </p>
          </div>
        </section>

        {/* قائمة المقالات */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologyPosts.map(post => (
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
              3
            </a>
            <a href="#" className="px-4 py-2 mx-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors">
              التالي
            </a>
          </nav>
        </section>

        {/* قسم الاشتراك في النشرة البريدية */}
        <section className="bg-blue-600 text-white rounded-lg p-8 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">ابق على اطلاع بأحدث التقنيات</h2>
            <p className="text-lg mb-6 text-blue-100">
              اشترك في نشرتنا البريدية للحصول على آخر أخبار التكنولوجيا والتقنيات الحديثة
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
      </main>

      <Footer />
    </>
  );
}
