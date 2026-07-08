import { teamMembers } from '@/data/team';
import { podcasts } from '@/data/podcasts';
import { vlogs } from '@/data/vlogs';
import { articles, pressMentions } from '@/data/articles';
import { platforms, roundtables, allEvents, initiatives } from '@/data/events';
import type { TeamMember } from './types';

export function getTeamMembers(): TeamMember[] {
  return teamMembers;
}
export function getTeamMemberBySlug(slug: string) {
  return teamMembers.find((m) => m.slug === slug);
}

export function getAllPodcasts() {
  return [...podcasts].sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
}
export function getPodcastBySlug(slug: string) {
  return podcasts.find((p) => p.slug === slug);
}

export function getAllVlogs() {
  return vlogs;
}
export function getVlogBySlug(slug: string) {
  return vlogs.find((v) => v.slug === slug);
}

export function getAllArticles() {
  return [...articles].sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
}
export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}
export function getPressMentions() {
  return pressMentions;
}

export function getPlatforms() { return platforms; }

export function getRoundtables(limit?: number) {
  const sorted = [...roundtables].sort((a, b) => +new Date(b.date) - +new Date(a.date));
  return limit ? sorted.slice(0, limit) : sorted;
}

export function getAllEvents() {
  const upcoming = allEvents
    .filter((e) => e.status === 'upcoming')
    .sort((a, b) => +new Date(a.date) - +new Date(b.date));
  const past = allEvents
    .filter((e) => e.status === 'past')
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
  return [...upcoming, ...past];
}
export function getUpcomingEvents() {
  return getAllEvents().filter((e) => e.status === 'upcoming');
}

export function getInitiatives() { return initiatives; }
export function getInitiativeBySlug(slug: string) { return initiatives.find((i) => i.slug === slug); }

import { speakers } from '@/data/speakers';

export function getAllSpeakers() {
  return [...speakers].sort((a, b) => +new Date(a.date) - +new Date(b.date));
}
export function getSpeakerBySlug(slug: string) {
  return speakers.find((s) => s.slug === slug);
}
export function getRecentSpeakers(limit = 8) {
  return [...speakers].sort((a, b) => +new Date(b.date) - +new Date(a.date)).slice(0, limit);
}

