import type { Speaker } from '@/lib/types';

// NOTE: `date` values below are sequential placeholders in the order provided -
// replace each with the real session date before publishing, since the
// timeline and homepage carousel both sort by this field.
// `image` is '' for speakers with no photo on file yet - the UI shows a
// fallback initials badge in that case, so nothing breaks.

export const speakers: Speaker[] = [
  { slug: 'pushkar-singh-dhami', name: 'Shri Pushkar Singh Dhami', designation: "Hon'ble Chief Minister of Uttarakhand", topic: 'Statesmen and Public Leaders', date: '2024-01-01', image: '/images/speakers/pushkar-singh-dhami.png' },
  { slug: 'suresh-prabhu', name: 'Shri Suresh Prabhu', designation: "Hon'ble Chancellor, Rishihood University", topic: 'Statesmen and Public Leaders', date: '2024-01-02', image: '/images/speakers/suresh-prabhu.png' },
  { slug: 'vinai-kumar-saxena', name: 'Shri Vinai Kumar Saxena', designation: "Hon'ble Lieutenant Governor of Ladakh", topic: 'Statesmen and Public Leaders', date: '2024-01-03', image: '/images/speakers/vinai-kumar-saxena.png' },
  { slug: 'bhagat-singh-koshyari', name: 'Padma Bhushan Bhagat Singh Koshyari', designation: "Hon'ble Former Governor of Maharashtra", topic: 'Statesmen and Public Leaders', date: '2024-01-04', image: '/images/speakers/bhagat-singh-koshyari.png' },

  { slug: 'godfrey-majoni-chipare', name: 'H.E. Dr. Godfrey Majoni Chipare', designation: 'Ambassador Extraordinary and Plenipotentiary, Embassy of the Republic of Zimbabwe', topic: 'Diplomacy and Global Engagement', date: '2024-01-05', image: '/images/speakers/godfrey-majoni-chipare.png' },
  { slug: 'tizita-mulugeta', name: 'H.E. Dr. Tizita Mulugeta', designation: 'Ambassador of Ethiopia', topic: 'Diplomacy and Global Engagement', date: '2024-01-06', image: '/images/speakers/tizita-mulugeta.png' },
  { slug: 's-b-hanoomanjee', name: 'H.E. Mrs S. B. Hanoomanjee (G.C.S.K.)', designation: 'High Commissioner, Mauritius High Commission', topic: 'Diplomacy and Global Engagement', date: '2024-01-07', image: '/images/speakers/s-b-hanoomanjee.png' },
  { slug: 'sidharto-reza-suryodipuro', name: 'H.E. Sidharto Reza Suryodipuro', designation: 'Former Ambassador of the Republic of Indonesia to India', topic: 'Diplomacy and Global Engagement', date: '2024-01-08', image: '/images/speakers/sidharto-reza-suryodipuro.png' },

  { slug: 'rajesh-aggarwal', name: 'Shri Rajesh Aggarwal, IAS', designation: 'Chief Secretary, Government of Maharashtra', topic: 'Policy and Development', date: '2024-01-09', image: '/images/speakers/rajesh-aggarwal.png' },
  { slug: 'sunil-kumar-barnwal', name: 'Dr. Sunil Kumar Barnwal, IAS', designation: 'Chief Executive Officer, National Health Authority (NHA), Govt. of India', topic: 'Policy and Development', date: '2024-01-10', image: '/images/speakers/sunil-kumar-barnwal.png' },
  { slug: 'ashwini-lohani', name: 'Shri Ashwini Lohani, IRSME (Retd.)', designation: "Director, Prime Ministers' Museum and Library Society; Former Chairman, Railway Board, Ministry of Railways", topic: 'Policy and Development', date: '2024-01-11', image: '/images/speakers/ashwini-lohani.png' },
  { slug: 'amarendra-khatua', name: 'Amb. (Dr) Amarendra Khatua, IFS (Retd.)', designation: 'Former Secretary, Ministry of External Affairs, Govt. of India; Former Director General of the Indian Council for Cultural Relations (ICCR)', topic: 'Policy and Development', date: '2024-01-12', image: '/images/speakers/amarendra-khatua.png' },

  { slug: 'venkaiah-naidu', name: 'Shri Muppavarapu Venkaiah Naidu', designation: 'Former Vice President of India', topic: 'Government and Public Leadership', date: '2024-01-13', image: '/images/speakers/venkaiah-naidu.png' },
  { slug: 'ajit-doval', name: 'Shri Ajit Doval', designation: 'National Security Advisor of India', topic: 'Government and Public Leadership', date: '2024-01-14', image: '/images/speakers/ajit-doval.png' },
  { slug: 's-jaishankar', name: 'Dr. S. Jaishankar', designation: "Hon'ble Minister of External Affairs, Government of India", topic: 'Government and Public Leadership', date: '2024-01-15', image: '/images/speakers/s-jaishankar.png' },
  { slug: 'arif-mohammad-khan', name: 'Shri Arif Mohammad Khan', designation: "Hon'ble Governor of Bihar, Former Governor of Kerala", topic: 'Government and Public Leadership', date: '2024-01-16', image: '/images/speakers/arif-mohammad-khan.png' },

  { slug: 'bharat-lal', name: 'Shri Bharat Lal', designation: 'Secretary General and CEO, National Human Rights Commission (NHRC), India', topic: 'Governance and Public Institutions', date: '2024-01-17', image: '/images/speakers/bharat-lal.png' },
  { slug: 't-s-krishnamurthy', name: 'Shri T. S. Krishnamurthy', designation: 'Former Chief Election Commissioner of India', topic: 'Governance and Public Institutions', date: '2024-01-18', image: '/images/speakers/t-s-krishnamurthy.png' },
  { slug: 'rajiv-kumar', name: 'Shri Rajiv Kumar', designation: 'Former Vice Chairman, NITI Aayog', topic: 'Governance and Public Institutions', date: '2024-01-19', image: '/images/speakers/rajiv-kumar.png' },
  { slug: 'amod-kumar-kanth', name: 'Shri Amod Kumar Kanth, IPS (Retd.)', designation: 'Founder and Mentor, Prayas; Former DGP and Founder Chairman, DWSSC and DCPCR', topic: 'Governance and Public Institutions', date: '2024-01-20', image: '/images/speakers/amod-kumar-kanth.png' },

  { slug: 'karan-singh', name: 'Dr. Karan Singh', designation: 'Former Governor of Jammu and Kashmir; Former Union Minister of Education, Govt. of India', topic: 'Policy, Economy and Development', date: '2024-01-21', image: '/images/speakers/karan-singh.png' },
  { slug: 'harivansh-narayan-singh', name: 'Shri Harivansh Narayan Singh', designation: 'Deputy Chairman, Rajya Sabha', topic: 'Policy, Economy and Development', date: '2024-01-22', image: '/images/speakers/harivansh-narayan-singh.png' },
  { slug: 'arun-maira', name: 'Shri Arun Maira', designation: 'Former Member, Planning Commission', topic: 'Policy, Economy and Development', date: '2024-01-23', image: '/images/speakers/arun-maira.png' },
  { slug: 'rajat-m-nag', name: 'Dr. Rajat M. Nag', designation: 'Former Director General, Asian Development Bank', topic: 'Policy, Economy and Development', date: '2024-01-24', image: '/images/speakers/rajat-m-nag.png' },
  { slug: 'sanjeev-tripathi', name: 'Shri Sanjeev Tripathi', designation: 'Former Chief of Research and Analysis Wing (RAW), India', topic: 'Policy, Economy and Development', date: '2024-01-25', image: '/images/speakers/sanjeev-tripathi.png' },
  { slug: 'amitabh-kant', name: 'Dr. Amitabh Kant', designation: 'G20 Sherpa and Former CEO, NITI Aayog', topic: 'Leadership', date: '2024-01-26', image: '/images/speakers/amitabh-kant.png' },
];
