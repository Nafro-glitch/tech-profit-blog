import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://tech-profit-blog.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://tech-profit-blog.com/categories/technology',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://tech-profit-blog.com/categories/ai',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://tech-profit-blog.com/categories/online-income',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://tech-profit-blog.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://tech-profit-blog.com/newsletter',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    // مقالات مميزة
    {
      url: 'https://tech-profit-blog.com/posts/ai-future-of-work-2025',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://tech-profit-blog.com/posts/10-ways-to-make-money-online-2025',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://tech-profit-blog.com/posts/complete-seo-guide-for-beginners',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // أحدث المقالات
    {
      url: 'https://tech-profit-blog.com/posts/best-ecommerce-platforms-comparison-2025',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://tech-profit-blog.com/posts/create-engaging-video-content-for-sales',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://tech-profit-blog.com/posts/top-5-programming-languages-2025',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
