import type { Metadata } from 'next';

const SITE_NAME = 'New Delhi Dialogues';
const SITE_URL = 'https://newdelhidialogues.org';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`;

interface BuildMetadataArgs {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export function buildMetadata({ title, description, path, image }: BuildMetadataArgs): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = image ?? DEFAULT_OG_IMAGE;

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title, description, url,
      siteName: SITE_NAME,
      images: [{ url: ogImage }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title, description,
      images: [ogImage],
    },
  };
}

export { SITE_NAME, SITE_URL };
