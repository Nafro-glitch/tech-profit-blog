import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">مدونة التكنولوجيا والربح</h3>
            <p className="text-gray-300">
              مدونة متخصصة في مجال التكنولوجيا والذكاء الاصطناعي وطرق الربح من الإنترنت، 
              نقدم محتوى عربي قيم ومفيد لمساعدتك على مواكبة التطورات التقنية وتحقيق دخل إضافي.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/categories/technology" className="text-gray-300 hover:text-white transition-colors">
                  التكنولوجيا
                </Link>
              </li>
              <li>
                <Link href="/categories/ai" className="text-gray-300 hover:text-white transition-colors">
                  الذكاء الاصطناعي
                </Link>
              </li>
              <li>
                <Link href="/categories/online-income" className="text-gray-300 hover:text-white transition-colors">
                  الربح من الإنترنت
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  من نحن
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="ml-2">✉️</span>
                <a href="mailto:contact@tech-profit-blog.com" className="text-gray-300 hover:text-white transition-colors">
                  contact@tech-profit-blog.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="ml-2">🔗</span>
                <a href="https://twitter.com/techprofitblog" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  تويتر
                </a>
              </li>
              <li className="flex items-center">
                <span className="ml-2">🔗</span>
                <a href="https://facebook.com/techprofitblog" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  فيسبوك
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} مدونة التكنولوجيا والربح. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
