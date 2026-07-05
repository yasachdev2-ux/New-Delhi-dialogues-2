import type { Article } from '@/lib/types';

export const articles: Article[] = [
  {
    slug: 'seven-sutras-global-ai-ethics',
    title: "Why India's Seven Sutras Could Reshape Global AI Ethics",
    category: 'AI Policy',
    excerpt: "India's 2025 AI Governance Guidelines offer a human-first framework that contrasts sharply with Western risk-based approaches.",
    publishedAt: '2025-01-08',
    author: 'NDD Research Desk',
  },
  {
    slug: 'india-ai-mission-analysis',
    title: 'The IndiaAI Mission: A Rs 10,371 Crore Bet on Sovereignty',
    category: 'Technology Governance',
    excerpt: 'Breaking down the infrastructure, model development, and governance implications of the Cabinet-approved IndiaAI Mission.',
    publishedAt: '2024-12-22',
    author: 'Policy Analysis Unit',
  },
  {
    slug: 'algorithmic-accountability',
    title: 'Algorithmic Accountability in Public Services',
    category: 'Ethics and Society',
    excerpt: 'When AI makes decisions about welfare, policing, or education, who is accountable? A framework for India.',
    publishedAt: '2024-11-30',
    author: 'NDD Fellow',
  },
  {
    slug: 'labour-automation-india',
    title: "Labour and Automation: Preparing India's Workforce",
    category: 'Economics',
    excerpt: "Sector-by-sector projections and policy recommendations for managing automation's impact on India's 500-million strong workforce.",
    publishedAt: '2024-10-15',
    author: 'Research Desk',
  },
];

export const pressMentions = [
  { outlet: '[Publication Name]', headline: 'Placeholder: NDD headline article title will appear here', year: '2024' },
  { outlet: '[Publication Name]', headline: 'Placeholder: Opinion piece or interview coverage title', year: '2024' },
  { outlet: '[Publication Name]', headline: 'Placeholder: Event coverage or policy commentary', year: '2024' },
];
