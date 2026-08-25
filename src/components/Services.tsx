import { Stethoscope, GraduationCap, Brain, Mic2, ArrowUpRight } from 'lucide-react';
import { useReveal } from '@/useReveal';

const services = [
    { icon: Stethoscope, title: 'Clinical nursing practice', text: 'Emergency, obstetric, and psychiatric care in hospital and community settings.' },
    { icon: GraduationCap, title: 'Nursing education', text: 'Curriculum design, classroom teaching, and clinical mentorship for nursing students.' },
    { icon: Brain, title: 'Mental health support', text: 'Counselling-informed care, psycho-education, and psychological first aid.' },
    { icon: Mic2, title: 'Speaking & workshops', text: 'Sessions on mental health, nursing ethics, and the human side of care.' },
];

export default function Services() {
    const { ref, visible } = useReveal<HTMLDivElement>();
    return (
        <section className="services-section section-pad" id="services">
            <div className="section-kicker"><span>07</span><span className="kicker-line" /><span>What she offers</span></div>
            <div className="services-heading">
                <h2>How she can <em>help.</em></h2>
                <p>Open to institutions, teams, and individuals who care about making healthcare more human.</p>
            </div>
            <div ref={ref} className={`services-grid ${visible ? 'is-visible' : ''}`}>
                {services.map((s, i) => (
                    <a href="#contact" className="service-card" key={s.title} style={{ transitionDelay: `${i * 100}ms` }}>
                        <div className="service-top">
                            <div className="service-icon"><s.icon size={24} strokeWidth={1.5} /></div>
                            <ArrowUpRight size={18} className="service-arrow" />
                        </div>
                        <h3>{s.title}</h3>
                        <p>{s.text}</p>
                    </a>
                ))}
            </div>
        </section>
    );
}
