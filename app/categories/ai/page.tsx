import { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'الذكاء الاصطناعي | مدونة التكنولوجيا والربح',
  description: 'استكشف أحدث مقالات الذكاء الاصطناعي وتطبيقاته وتأثيره على مستقبل العمل والحياة',
  keywords: 'ذكاء اصطناعي، تعلم آلي، شات جي بي تي، معالجة اللغة الطبيعية، الروبوتات',
  openGraph: {
    title: 'الذكاء الاصطناعي | مدونة التكنولوجيا والربح',
    description: 'استكشف أحدث مقالات الذكاء الاصطناعي وتطبيقاته وتأثيره على مستقبل العمل والحياة',
    url: 'https://tech-profit-blog.com/categories/ai',
    siteName: 'مدونة التكنولوجيا والربح',
    locale: 'ar_AR',
    type: 'website',
  },
};

export default function AICategory() {
  // مقالات الذكاء الاصطناعي
  const aiPosts = [
    {
      id: 1,
      title: "كيف يمكن للذكاء الاصطناعي تغيير مستقبل العمل في 2025",
      excerpt: "استكشف كيف يؤثر الذكاء الاصطناعي على سوق العمل وما هي المهارات المطلوبة للمستقبل",
      slug: "ai-future-of-work-2025",
      date: "10 أبريل 2025",
      imageUrl: "/images/ai-future.jpg"
    },
    {
      id: 2,
      title: "دليل شامل لاستخدام ChatGPT في تطوير الأعمال",
      excerpt: "كيفية الاستفادة من ChatGPT لتحسين إنتاجية عملك وتطوير استراتيجيات التسويق",
      slug: "chatgpt-business-development-guide",
      date: "5 أبريل 2025",
      imageUrl: "/images/chatgpt-business.jpg"
    },
    {
      id: 3,
      title: "مقارنة بين أفضل أدوات الذكاء الاصطناعي لإنشاء المحتوى",
      excerpt: "استعراض لأفضل أدوات الذكاء الاصطناعي لإنشاء النصوص والصور والفيديوهات",
      slug: "best-ai-content-creation-tools-comparison",
      date: "1 أبريل 2025",
      imageUrl: "/images/ai-content-tools.jpg"
    },
    {
      id: 4,
      title: "كيف تبدأ في تعلم الذكاء الاصطناعي من الصفر",
      excerpt: "دليل خطوة بخطوة للمبتدئين الراغبين في تعلم الذكاء الاصطناعي وعلوم البيانات",
      slug: "learn-ai-from-scratch-guide",
      date: "25 مارس 2025",
      imageUrl: "/images/learn-ai.jpg"
    },
    {
      id: 5,
      title: "تطبيقات الذكاء الاصطناعي في مجال الرعاية الصحية",
      excerpt: "كيف يساهم الذكاء الاصطناعي في تطوير الرعاية الصحية وتشخيص الأمراض",
      slug: "ai-applications-healthcare",
      date: "20 مارس 2025",
      imageUrl: "/images/ai-healthcare.jpg"
    },
    {
      id: 6,
      title: "أخلاقيات الذكاء الاصطناعي: التحديات والحلول",
      excerpt: "نظرة على التحديات الأخلاقية التي يواجهها الذكاء الاصطناعي وكيفية التعامل معها",
      slug: "ai-ethics-challenges-solutions",
      date: "15 مارس 2025",
      imageUrl: "/images/ai-ethics.jpg"
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
              الذكاء الاصطناعي
            </h1>
            <p className="text-xl text-gray-600 text-center">
              استكشف أحدث المقالات والأخبار في عالم الذكاء الاصطناعي وتطبيقاته المختلفة
            </p>
          </div>
        </section>

        {/* قائمة المقالات */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiPosts.map(post => (
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">ابق على اطلاع بأحدث تطورات الذكاء الاصطناعي</h2>
            <p className="text-lg mb-6 text-blue-100">
              اشترك في نشرتنا البريدية للحصول على آخر أخبار وتطبيقات الذكاء الاصطناعي
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
