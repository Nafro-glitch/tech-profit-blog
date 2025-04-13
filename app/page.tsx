import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  // مقالات مميزة
  const featuredPosts = [
    {
      id: 1,
      title: "كيف يمكن للذكاء الاصطناعي تغيير مستقبل العمل في 2025",
      excerpt: "استكشف كيف يؤثر الذكاء الاصطناعي على سوق العمل وما هي المهارات المطلوبة للمستقبل",
      category: "الذكاء الاصطناعي",
      slug: "ai-future-of-work-2025",
      date: "10 أبريل 2025",
      imageUrl: "/images/ai-future.jpg"
    },
    {
      id: 2,
      title: "10 طرق مضمونة للربح من الإنترنت بدون رأس مال في 2025",
      excerpt: "تعرف على أفضل الطرق للربح من الإنترنت التي لا تتطلب استثمارات كبيرة وكيفية البدء بها",
      category: "الربح من الإنترنت",
      slug: "10-ways-to-make-money-online-2025",
      date: "5 أبريل 2025",
      imageUrl: "/images/online-income.jpg"
    },
    {
      id: 3,
      title: "دليل شامل لتحسين محركات البحث SEO للمبتدئين",
      excerpt: "كل ما تحتاج معرفته عن تحسين محركات البحث وكيفية تطبيقه على موقعك الإلكتروني",
      category: "التكنولوجيا",
      slug: "complete-seo-guide-for-beginners",
      date: "1 أبريل 2025",
      imageUrl: "/images/seo-guide.jpg"
    }
  ];

  // أحدث المقالات
  const latestPosts = [
    {
      id: 4,
      title: "مقارنة بين أفضل منصات التجارة الإلكترونية في 2025",
      excerpt: "دراسة مقارنة بين أشهر منصات التجارة الإلكترونية وأيها يناسب مشروعك",
      category: "التكنولوجيا",
      slug: "best-ecommerce-platforms-comparison-2025",
      date: "12 أبريل 2025",
      imageUrl: "/images/ecommerce.jpg"
    },
    {
      id: 5,
      title: "كيفية إنشاء محتوى فيديو جذاب لزيادة المبيعات",
      excerpt: "نصائح وإرشادات لإنشاء محتوى فيديو احترافي يساعد في زيادة المبيعات والتحويلات",
      category: "التسويق الرقمي",
      slug: "create-engaging-video-content-for-sales",
      date: "8 أبريل 2025",
      imageUrl: "/images/video-content.jpg"
    },
    {
      id: 6,
      title: "أفضل 5 لغات برمجة يجب تعلمها في 2025",
      excerpt: "تعرف على أكثر لغات البرمجة طلباً في سوق العمل وكيفية البدء في تعلمها",
      category: "البرمجة",
      slug: "top-5-programming-languages-2025",
      date: "3 أبريل 2025",
      imageUrl: "/images/programming.jpg"
    }
  ];

  return (
    <>
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* قسم الترحيب */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-12 shadow-sm">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              مرحباً بك في مدونة التكنولوجيا والربح
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              مصدرك الأول للمعلومات حول التكنولوجيا والذكاء الاصطناعي وطرق الربح من الإنترنت
            </p>
            <div className="flex justify-center gap-4">
              <Link 
                href="/categories/technology" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-colors"
              >
                استكشف المقالات
              </Link>
              <Link 
                href="/newsletter" 
                className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-2 px-6 rounded-full border border-blue-200 transition-colors"
              >
                اشترك في النشرة البريدية
              </Link>
            </div>
          </div>
        </section>

        {/* المقالات المميزة */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">مقالات مميزة</h2>
            <Link href="/featured" className="text-blue-600 hover:text-blue-800 transition-colors">
              عرض الكل
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map(post => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 relative">
                  {/* سيتم استبدال هذا بصورة حقيقية لاحقاً */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    صورة المقال
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
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

        {/* أحدث المقالات */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">أحدث المقالات</h2>
            <Link href="/latest" className="text-blue-600 hover:text-blue-800 transition-colors">
              عرض الكل
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map(post => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 relative">
                  {/* سيتم استبدال هذا بصورة حقيقية لاحقاً */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    صورة المقال
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
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

        {/* قسم الاشتراك في النشرة البريدية */}
        <section className="bg-blue-600 text-white rounded-lg p-8 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">اشترك في نشرتنا البريدية</h2>
            <p className="text-lg mb-6 text-blue-100">
              احصل على أحدث المقالات والنصائح حول التكنولوجيا والربح من الإنترنت مباشرة إلى بريدك الإلكتروني
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
