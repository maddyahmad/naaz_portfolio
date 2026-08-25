import {
  ArrowUpRight,
  BookOpen,
  Brain,
  ChevronDown,
  HeartPulse,
  Linkedin,
  Mail,
  Menu,
  Mic2,
  Quote,
  Sparkles,
  Stethoscope,
  X,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import StatsBand from '@/components/StatsBand';
import Philosophy from '@/components/Philosophy';
import Education from '@/components/Education';
import Poems from '@/components/Poems';
import Testimonials from '@/components/Testimonials';
import Services from '@/components/Services';

const experience = [
  {
    period: 'Feb 2024 — Present',
    role: 'Chief Nursing Officer',
    place: 'Government of Uttarakhand · Champawat',
    text: 'Serving as the sole nursing officer in a remote hill hospital, independently managing emergency presentations, trauma care, and obstetric care in high-pressure, resource-limited settings.',
    icon: Stethoscope,
  },
  {
    period: 'Mar 2021 — Dec 2021',
    role: 'Nursing Tutor',
    place: 'State College of Nursing · Dehradun',
    text: 'Taught nursing subjects to student cohorts of 60+, covering clinical nursing practice and psychology as a subject teacher and class teacher.',
    icon: BookOpen,
  },
  {
    period: 'Apr 2017 — Mar 2021',
    role: 'Nursing Tutor',
    place: 'Government School of Nursing · Haridwar',
    text: 'Built a four-year foundation in nursing pedagogy, teaching psychology and nursing subjects while nurturing long-term student mentorship relationships.',
    icon: HeartPulse,
  },
  {
    period: 'Feb 2020 — Jul 2020',
    role: 'Clinical Psychologist | Internship',
    place: 'Nidaan — The Psychological Services · Dehradun',
    text: 'Completed a 243-hour supervised clinical psychology internship with case history taking, report writing, psychological testing, and psycho-education.',
    icon: Brain,
  },
  {
    period: 'Dec 2014 — Mar 2017',
    role: 'Nursing Tutor',
    place: 'Shri Swami Bhumanand College Of Nursing & Paramedical Institute · Haridwar',
    text: 'Taught nursing subjects to student classes of 60+ across multiple academic years, establishing early expertise in nursing pedagogy laying the foundation for a 7+ year teaching career.',
    icon: HeartPulse,
  },
];

const capabilities = [
  'Psychiatric nursing',
  'Mental health & trauma care',
  'Nursing education',
  'Clinical psychology',
  'Curriculum design',
  'BLS instruction',
];

function useStatsVisible() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (setVisible(true), observer.unobserve(e.target))),
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { ref: statsRef, visible: statsVisible } = useStatsVisible();
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <nav className="nav-wrap" aria-label="Primary navigation">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-mark">NN</span>
          <span>Nazmeen Naz</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Experience</a>
          <a href="#philosophy" onClick={closeMenu}>Philosophy</a>
          <a href="#book" onClick={closeMenu}>The book</a>
          <a href="#contact" onClick={closeMenu} className="nav-cta">Let’s connect <ArrowUpRight size={15} /></a>
        </div>
      </nav>

      <main id="top">
        <section className="hero-section">
          <div className="hero-cover" />
          <div className="hero-grid">
            <div className="hero-copy reveal-up">
              <p className="eyebrow light-eyebrow"><span /> Care, taught with conviction</p>
              <h1>Where clinical<br /><em>care</em> meets<br />human understanding.</h1>
              <p className="hero-intro">Psychiatric Nurse Educator · Clinical Psychologist · Nursing Officer</p>
              <a href="#about" className="text-link light-link">Discover her work <ArrowUpRight size={17} /></a>
            </div>
            <div className="hero-image-wrap reveal-fade">
              <div className="hero-image-frame" />
              <img src="/images/headshot_image.png" alt="Nazmeen Naz" className="hero-image" />
              <div className="hero-stamp"><Sparkles size={16} /><span>7+ years<br />of impact</span></div>
            </div>
          </div>
          <div className="scroll-cue"><span>Scroll to explore</span><ChevronDown size={18} /></div>
        </section>

        <section className="intro-section section-pad" id="about">
          <div className="section-kicker"><span>01</span><span className="kicker-line" /><span>About Nazmeen</span></div>
          <div className="intro-layout">
            <div className="intro-heading">
              <p className="eyebrow"><span /> A practice rooted in empathy</p>
              <h2>She teaches the <em>whole</em> person.</h2>
            </div>
            <div className="intro-text">
              <p className="lead">Nazmeen is a registered nurse and clinical psychologist whose work sits at the intersection of hands-on care, mental health, and the next generation of nursing.</p>
              <p>Across five nursing institutions and academic years of service, she has taught hundreds of students while continuing to keep clinical practice active. Her approach is grounded, curious, and deeply human — because the best care begins with understanding.</p>
              <a href="mailto:nazneen651991@gmail.com" className="text-link">Start a conversation <ArrowUpRight size={17} /></a>
            </div>
          </div>
          <div className="capability-grid">
            {capabilities.map((capability, index) => (
              <div className="capability" key={capability}><span>0{index + 1}</span><strong>{capability}</strong></div>
            ))}
          </div>
        </section>

        <div ref={statsRef}>
          <StatsBand visible={statsVisible} />
        </div>

        <section className="work-section section-pad" id="work">
          <div className="section-kicker"><span>02</span><span className="kicker-line" /><span>Selected experience</span></div>
          <div className="work-heading">
            <h2>A career in <em>service.</em></h2>
            <p>From remote hospital wards to classrooms of future nurses, every chapter is about making care more capable and compassionate.</p>
          </div>
          <div className="experience-list">
            {experience.map(({ period, role, place, text, icon: Icon }, index) => (
              <article className="experience-card" key={role + place}>
                <div className="experience-number">0{index + 1}</div>
                <div className="experience-icon"><Icon size={22} strokeWidth={1.6} /></div>
                <div className="experience-main">
                  <p className="period">{period}</p>
                  <h3>{role}</h3>
                  <p className="place">{place}</p>
                </div>
                <p className="experience-text">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <Philosophy />

        <Education />

        <section className="book-section" id="book">
          <div className="book-art">
            <div className="book-orbit orbit-one" />
            <div className="book-orbit orbit-two" />
            <div className="book-quote-mark">“</div>
            <p>words for<br /><em>the in-between</em></p>
          </div>
          <div className="book-copy">
            <p className="eyebrow light-eyebrow"><span /> Beyond the classroom</p>
            <h2>Let your <em>intuition</em><br />guide you.</h2>
            <p className="book-description">A poetry collection by Nazmeen Naz — an invitation to listen inward, find meaning in the quiet, and let the unseen parts of life speak.</p>
            <a className="button button-light" href="https://amzn.in/d/0eR6Wjz2" target="_blank" rel="noreferrer">Explore the book <ArrowUpRight size={17} /></a>
            <p className="book-note"><Quote size={14} /> For the thoughts that arrive softly, but stay.</p>
          </div>
        </section>

        <Poems />

        <Testimonials />

        <Services />

        <section className="personality-section section-pad">
          <div className="personality-image-wrap">
            <img src="/images/headshot_image.png" alt="Nazmeen Naz in a tailored black blazer" className="personality-image" />
            <div className="image-caption">A life in many dimensions<br /><span>Care · Thought · Expression</span></div>
          </div>
          <div className="personality-copy">
            <p className="eyebrow"><span /> A note on expression</p>
            <h2>Curious by nature.<br /><em>Expressive by choice.</em></h2>
            <p>Alongside her work in nursing and psychology, Nazmeen has explored the visual language of modelling — bringing the same poise, presence, and attention to detail she brings to every room.</p>
            <div className="small-detail"><Mic2 size={18} /><span>Poet · Educator · Model</span></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner">
            <p className="eyebrow light-eyebrow"><span /> Open to meaningful work</p>
            <h2>Let’s make care<br /><em>more human.</em></h2>
            <p>For nursing education, mental health initiatives, speaking, or creative collaborations.</p>
            <a className="button button-accent" href="mailto:nazneen651991@gmail.com">Get in touch <Mail size={17} /></a>
            <div className="contact-details">
              <a href="mailto:nazneen651991@gmail.com">nazneen651991@gmail.com</a>
              <a href="https://www.linkedin.com/in/nazmeennaz" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
              <span>Dehradun, Uttarakhand, India</span>
            </div>
          </div>
        </section>
      </main>

      <footer><span>© {new Date().getFullYear()} Nazmeen Naz</span><span>Carefully, always.</span></footer>
    </div>
  );
}

export default App;
