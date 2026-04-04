import { MetadataRoute } from 'next';
import { TOOLS } from '@/utils/toolsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://imagetoolshub.com';

  const toolUrls = TOOLS.map((tool) => ({
    url: `${baseUrl}${tool.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    ...toolUrls,
  ];
}
