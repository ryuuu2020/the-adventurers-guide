import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://theadventurersguide.wiki';
  const lastModified = new Date();

  const routes = [
    '',
    '/planner',
    '/classes',
    '/combat',
    '/patch-notes',
    '/camp-morale-guide',
    '/talent-trees-guide',
    '/about',
    '/contact',
    '/privacy',
    '/faq',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}${route === '' ? '/' : '/'}`,
    lastModified,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/planner' || route === '/classes' || route === '/combat' ? 0.9 : 0.7,
  }));
}
