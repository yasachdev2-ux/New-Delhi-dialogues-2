import type { EventPlatform, Roundtable, EventItem, EventInitiative } from '@/lib/types';

export const platforms: EventPlatform[] = [
  {
    slug: 'summit',
    tag: 'Annual Summit',
    title: 'The New Delhi Dialogue - Summit',
    description: [
      'A flagship annual summit featuring inaugural addresses, thematic sessions, and interactive discussions shaping responsible narratives and promoting sustainable, human-centric innovation in governance and AI.',
      "Bringing together government officials, industry leaders, academics, and civil society organisations for India's most important policy dialogue.",
    ],
    variant: 'default',
    ctaLabel: 'Register Interest',
    ctaType: 'link',
  },
  {
    slug: 'international',
    tag: 'International',
    title: 'The New Delhi Dialogue - International',
    description: [
      "An international engagement platform convening Embassies, Multinationals, and Global Think-Tanks on cross-border governance frameworks.",
      "Curated roundtables focused on global policy coordination and India's role in shaping international AI governance standards.",
    ],
    variant: 'inverted',
    ctaLabel: 'Partner With Us',
    ctaType: 'form',
    formFields: ['profession', 'organisation', 'nationality'],
  },
];

export const roundtables: Roundtable[] = [
  {
    id: 'r1',
    title: 'AI in Healthcare: Balancing Innovation and Patient Safety',
    description: 'A closed-door dialogue with clinicians, AI developers, regulators, and patient advocates on governance frameworks for clinical AI deployment in India.',
    date: '2025-03-18',
    status: 'upcoming',
    speakers: ['Dr. A. Sharma', 'Prof. R. Mehta', 'Ms. P. Kapoor', 'Dr. S. Iyer'],
    recordingUrl: null,
  },
  {
    id: 'r2',
    title: 'Data Localisation vs. Global Interoperability',
    description: "Policymakers, tech companies, and civil society examine the trade-offs between data sovereignty and India's integration into the global digital economy.",
    date: '2025-02-12',
    status: 'recorded',
    speakers: ['Mr. V. Anand', 'Dr. N. Singh', 'Ms. L. Das'],
    recordingUrl: 'https://www.youtube.com/watch?v=O8sYlCKXEh8',
  },
  {
    id: 'r3',
    title: 'Electoral Integrity in the Age of Deepfakes',
    description: 'An expert conversation on regulating AI-generated political content, disinformation, and the role of the Election Commission in the 2024 cycle.',
    date: '2025-01-25',
    status: 'recorded',
    speakers: ['Prof. K. Reddy', 'Mr. A. Bose', 'Dr. F. Khan', 'Ms. C. Thomas'],
    recordingUrl: null,
  },
  {
    id: 'r4',
    title: 'Climate Policy and Digital Infrastructure',
    description: "Examining the carbon footprint of India's digital ambitions, data centres, and AI compute alongside green transition strategies.",
    date: '2025-04-07',
    status: 'upcoming',
    speakers: ['Dr. M. Pillai', 'Mr. T. Nair'],
    recordingUrl: null,
  },
];

export const allEvents: EventItem[] = [
  { id: 'e1', title: 'NDD Annual Summit 2025', description: "The flagship annual summit bringing together policymakers, industry leaders, academics, and civil society on India's AI governance agenda.", date: '2025-04-22', eventType: 'summit', venue: 'India Habitat Centre, New Delhi', status: 'upcoming' },
  { id: 'e2', title: 'Roundtable: AI in Healthcare', description: 'Closed-door expert dialogue on clinical AI governance, patient rights, and regulatory frameworks.', date: '2025-03-18', eventType: 'roundtable', venue: 'AIIMS Conference Centre, New Delhi', status: 'upcoming' },
  { id: 'e3', title: 'GovTech Startup Pitch Day', description: 'Curated pitches from AI, GovTech, and CivicTech startups before a panel of investors and government officials.', date: '2025-03-05', eventType: 'pitch', venue: 'T-Hub, Hyderabad', status: 'upcoming' },
  { id: 'e4', title: 'Workshop: DPDP Act Implementation for SMEs', description: 'Practical guidance session on complying with the Digital Personal Data Protection Act 2023 for small and medium enterprises.', date: '2025-02-27', eventType: 'workshop', venue: 'Online / NDD Delhi Office', status: 'upcoming' },
  { id: 'e5', title: 'Data Localisation Roundtable', description: "Expert dialogue on data sovereignty, cross-border flows, and India's digital economy integration.", date: '2025-02-12', eventType: 'roundtable', venue: 'The Oberoi, New Delhi', status: 'past' },
  { id: 'e6', title: 'Ethical AI in Healthcare Awards', description: 'Annual awards recognising impactful ethical AI innovation in Indian healthcare.', date: '2024-12-14', eventType: 'awards', venue: 'Taj Palace, New Delhi', status: 'past' },
];

export const initiatives: EventInitiative[] = [
  {
    slug: 'startup-pitch',
    num: '01',
    title: 'Startup Pitch Segment',
    description: 'Curated pitching sessions for AI, HealthTech, GovTech, and CivicTech startups to access grants, pilots, and investments from government and institutional partners.',
    variant: 'default',
    formFields: ['organisation'],
  },
  {
    slug: 'awards',
    num: '02',
    title: 'Awards and Recognition',
    description: 'Ethical AI in Healthcare Awards to recognise impactful innovation, supported by institutional and corporate sponsors. Open to startups, researchers, and practitioners.',
    variant: 'featured',
    formFields: ['organisation'],
  },
  {
    slug: 'digital',
    num: '03',
    title: 'Digital Extension',
    description: "Live streaming of key sessions, digital access to recordings, and premium knowledge content ensuring NDD's dialogues are accessible nationally and globally.",
    variant: 'default',
    formFields: ['organisation'],
  },
];
