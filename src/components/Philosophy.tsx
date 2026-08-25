import { Heart, Brain, BookHeart, ShieldCheck } from 'lucide-react';
import { useReveal } from '@/useReveal';

const pillars = [
    { icon: Heart, title: 'Care first', text: 'Every patient encounter begins with listening — understanding the person before the chart.' },
    { icon: Brain, title: 'Mind matters', text: 'Mental health is not separate from physical care; it is woven through every recovery.' },
    { icon: BookHeart, title: 'Teach with heart', text: 'Students learn best when they feel seen. Mentorship is care, extended forward.' },
    { icon: ShieldCheck, title: 'Steady hands', text: 'In high-pressure, resource-limited settings, composure is the most clinical skill.' },
];

export default function Philosophy() {
    const { ref, visible } = useReveal<HTMLDivElement>();
    return (
        <section className="philosophy-section section-pad" id="philosophy">
            <div className="section-kicker"><span>03</span><span className="kicker-line" /><span>Care philosophy</span></div>
            <div className="philosophy-heading">
                <h2>Four beliefs that <em>shape</em> her practice.</h2>
                <p>Not rules, but instincts — refined across wards, classrooms, and counselling rooms.</p>
            </div>
            <div ref={ref} className={`philosophy-grid ${visible ? 'is-visible' : ''}`}>
                {pillars.map((pillar, i) => (
                    <article className="philosophy-card" key={pillar.title} style={{ transitionDelay: `${i * 120}ms` }}>
                        <div className="philosophy-icon"><pillar.icon size={26} strokeWidth={1.5} /></div>
                        <h3>{pillar.title}</h3>
                        <p>{pillar.text}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
