export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  bio: string;
  avatarTone: 'sand' | 'gray';
  photo?: string;
}

export interface PolicyMilestone {
  year: string;
  title: string;
  description: string;
  featured?: boolean;
}

export interface Sutra {
  numeral: string;
  text: string;
}

export interface Podcast {
  slug: string;
  title: string;
  youtubeId: string | null;
  description: string;
  publishedAt: string;
  tags: string[];
}

export interface Vlog {
  slug: string;
  title: string;
  youtubeId: string | null;
  description: string;
  tag: string;
}

export interface Article {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  publishedAt: string;
  author: string;
}

export interface PressMention {
  outlet: string;
  headline: string;
  year: string;
}

export interface EventPlatform {
  slug: string;
  tag: string;
  title: string;
  description: string[];
  variant: 'default' | 'inverted';
  ctaLabel: string;
  ctaType: 'link' | 'form';
  formFields?: ('profession' | 'organisation' | 'nationality')[];
}

export interface Roundtable {
  id: string;
  title: string;
  description: string;
  date: string;
  status: 'upcoming' | 'recorded' | 'live';
  speakers: string[];
  recordingUrl: string | null;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  eventType: 'summit' | 'roundtable' | 'workshop' | 'awards' | 'pitch';
  venue: string;
  status: 'upcoming' | 'past';
}

export interface EventInitiative {
  slug: string;
  num: string;
  title: string;
  description: string;
  variant: 'default' | 'featured';
  formFields?: ('organisation')[];
}

export interface Speaker {
  slug: string;
  name: string;
  designation: string;
  topic: string;
  date: string;
  image: string;
  location?: string;
}

