import { MetadataRoute } from'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: '2024-09-25T12:18:30.868Z',
      changeFrequency: 'yearly',
      priority: 1,
    }
  ]
}