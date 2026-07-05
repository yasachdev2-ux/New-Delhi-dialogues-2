import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { getTeamMembers } from '@/lib/content';
import SectionHeader from '@/components/ui/SectionHeader';
import TeamCard from '@/components/team/TeamCard';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = buildMetadata({
  title: 'About',
  description:
    "New Delhi Dialogues — our mission, mandate, focus areas, core activities, and the team advancing India's AI and technology governance agenda.",
  path: '/about',
});

const WHY_NDD = [
  { title: 'Cross-Sector Collaboration', desc: 'Fostering active dialogue across government, industry, academia, and civil society — breaking down the silos that slow governance.' },
  { title: 'Ethical AI Governance', desc: 'Contributing concrete policy recommendations that ensure AI systems are accountable, fair, and aligned with public interest.' },
  { title: 'Global Thought Leadership', desc: 'Positioning New Delhi as a global thought hub for sustainable, human-centric urban development and AI policy.' },
  { title: 'Evidence-Based Policymaking', desc: 'Translating rigorous research into actionable policy tools that governments and institutions can implement.' },
];

const MANDATE = [
  { num: '01', title: 'Convening Power', desc: 'Creating trusted spaces for high-level policy dialogue that brings together decision-makers, domain experts, and civil society in productive, structured conversation.' },
  { num: '02', title: 'Thought Leadership', desc: "Producing rigorous research, white papers, and policy analyses that establish NDD as a credible voice shaping India's governance narrative on emerging technology." },
  { num: '03', title: 'Impact Orientation', desc: 'Translating dialogue into actionable policy outcomes — from framework recommendations and standards to direct advisory engagements with government and regulators.' },
];

const FOCUS_AREAS = [
  'Mental Health & Healthcare Systems',
  'Sector-Specific AI Governance Frameworks',
  'AI Safety, Security & Risk Management',
  'Algorithmic Fairness & Bias Mitigation',
  'Data Privacy, Protection & Governance',
  'Labour, Workforce & Economic Impact',
  'Transparency, Accountability & Explainability',
  'Democratic, Constitutional & Societal Implications of AI',
];

const CORE_ACTIVITIES = [
  { label: 'Policy Development & Advisory', tag: 'Research' },
  { label: 'Multi-Stakeholder Dialogues & Roundtables', tag: 'Engagement' },
  { label: 'Research & Knowledge Creation', tag: 'Knowledge' },
  { label: 'Standards & Framework Development', tag: 'Governance' },
  { label: 'Ecosystem Handholding & Capacity Building', tag: 'Capacity' },
];

export default function AboutPage() {
  const team = getTeamMembers();

  return (
    <>
      <div className={styles.hero}>
        <div className="container">
          <span className={styles.heroLabel}>01 — About</span>
          <h1 className={styles.heroTitle}>
            India&rsquo;s Premier Platform for <span className="c-orange">Policy Dialogue</span>
          </h1>
          <p className={styles.heroSub}>
            New Delhi Dialogues is a premier policy think-tank and convening platform committed to advancing
            informed, inclusive, and future-ready public policy at the intersection of technology, governance,
            health, and society.
          </p>
        </div>
      </div>

      <section className={styles.section}>
        <div className={`container ${styles.introGrid}`}>
          <div>
            <p className={styles.lead}>
              New Delhi Dialogues (NDD) is committed to advancing informed, inclusive, and future-ready public
              policy discourse at the intersection of <strong>technology, governance, health, and society.</strong>
            </p>
            <p>We drive evidence-based research, foster multi-stakeholder dialogue, and shape actionable policy pathways in an era defined by rapid technological transformation — particularly Artificial Intelligence and emerging technologies.</p>
            <p>As India&rsquo;s capital confronts complex challenges — from public health governance to the deployment of AI in civic services — NDD catalyses multidisciplinary, solutions-oriented conversation that bridges the gap between research and real-world governance.</p>
            <blockquote className={styles.pullQuote}>
              <em>&ldquo;Our goal is to ensure that innovation advances public interest, equity, safety, and trust.&rdquo;</em>
            </blockquote>
          </div>
          <aside className={styles.approachCard}>
            <span className={styles.cardLabel}>Our Approach</span>
            {['Research & Evidence', 'Stakeholder Engagement', 'Public Discourse', 'Media Engagement'].map((label, i) => (
              <div key={label} className={styles.miniPillar}>
                <span aria-hidden="true">{['I', 'II', 'III', 'IV'][i]}</span>
                <span>{label}</span>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`} id="why-ndd-matters">
        <div className="container">
          <SectionHeader label="Why NDD Matters" title={<>The Case for <span className="c-orange">Convening</span></>} />
          <div className={styles.checkGrid}>
            {WHY_NDD.map((item) => (
              <div key={item.title} className={styles.checkItem}>
                <span aria-hidden="true">&rarr;</span>
                <div><strong>{item.title}</strong><p>{item.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="how-we-work">
        <div className="container">
          <SectionHeader label="Three-Fold Mandate" title={<>How NDD <span className="c-orange">Works</span></>} />
          <div className={styles.pillarsGrid}>
            {MANDATE.map((p) => (
              <article key={p.num} className={styles.pillar}>
                <div className={styles.pillarNum} aria-hidden="true">{p.num}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="people-behind-ndd">
        <div className="container">
          <SectionHeader
            label="Meet Our Team"
            title={<>The People Behind <span className="c-orange">NDD</span></>}
            intro="Our team brings together policy experts, technologists, researchers, and practitioners united by a common mission: building better governance for an AI-driven world."
          />
          <div className={styles.teamGrid}>
            {team.map((member, i) => <TeamCard key={member.slug} member={member} index={i} />)}
          </div>
          <p className={styles.teamNote}>
            Team bios will be updated shortly. <Link href="/contact">Contact us</Link> for enquiries.
          </p>
        </div>
      </section>
    </>
  );
}
