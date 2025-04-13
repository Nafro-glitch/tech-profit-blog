import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">مدونة التكنولوجيا والربح</span>
            </Link>
          </div>
          
          <nav className="flex items-center space-x-1 space-x-reverse">
            <Link href="/" className="px-3 py-2 rounded hover:bg-blue-700 transition-colors">
              الرئيسية
            </Link>
            <Link href="/categories/technology" className="px-3 py-2 rounded hover:bg-blue-700 transition-colors">
              التكنولوجيا
            </Link>
            <Link href="/categories/ai" className="px-3 py-2 rounded hover:bg-blue-700 transition-colors">
              الذكاء الاصطناعي
            </Link>
            <Link href="/categories/online-income" className="px-3 py-2 rounded hover:bg-blue-700 transition-colors">
              الربح من الإنترنت
            </Link>
            <Link href="/about" className="px-3 py-2 rounded hover:bg-blue-700 transition-colors">
              من نحن
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
