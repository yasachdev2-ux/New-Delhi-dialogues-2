import type { Podcast } from '@/lib/types';

export const podcasts: Podcast[] = [
  {
    slug: 'ai-governance-in-india',
    title: 'AI Governance in India - A Policy Dialogue',
    youtubeId: 'O8sYlCKXEh8',
    description: "A conversation on the emerging frameworks shaping India's approach to AI governance, ethical deployment, and cross-sector accountability.",
    publishedAt: '2024-11-14',
    tags: ['AI Governance', 'Policy'],
  },
  {
    slug: 'digital-public-infrastructure-democratic-rights',
    title: 'Digital Public Infrastructure and Democratic Rights',
    youtubeId: null,
    description: "Examining how India's DPI stack intersects with civil liberties, data protection, and democratic accountability.",
    publishedAt: '2024-10-28',
    tags: ['DPI', 'Democracy'],
  },
  {
    slug: 'health-data-governance',
    title: 'Health Data Governance - Who Holds the Key?',
    youtubeId: null,
    description: 'An expert roundtable on the regulatory landscape for health data, AI diagnostics, and patient rights in Indian healthcare.',
    publishedAt: '2024-09-10',
    tags: ['Health', 'Data'],
  },
];
