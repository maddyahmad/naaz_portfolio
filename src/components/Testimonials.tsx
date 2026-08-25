import { useReveal } from '@/useReveal';

const testimonials = [
    { quote: 'Nazmeen brought a steadiness to our ward that we did not know we needed. In the hardest moments, she was the one everyone turned to.', author: 'Colleague', role: 'Hill hospital, Champawat' },
    { quote: 'She taught us that nursing is not only what you do with your hands — it is what you hold in your mind. I still carry her lessons into every shift.', author: 'Former student', role: 'State College of Nursing' },
    { quote: 'Her sessions on mental health changed how I see my patients. She made psychology feel human, not clinical.', author: 'Nursing graduate', role: 'Dehradun' },
];

export default function Testimonials() {
    const { ref, visible } = useReveal<HTMLDivElement>();
    return (
        <section className="testimonials-section section-pad" id="testimonials">
            <div className="section-kicker"><span>06</span><span className="kicker-line" /><span>In their words</span></div>
            <div className="testimonials-heading">
                <h2>The mark she <em>leaves.</em></h2>
                <p>From colleagues and students who worked alongside her.</p>
            </div>
            <div ref={ref} className={`testimonials-grid ${visible ? 'is-visible' : ''}`}>
                {testimonials.map((t, i) => (
                    <figure className="testimonial-card" key={i} style={{ transitionDelay: `${i * 130}ms` }}>
                        <span className="testimonial-mark">“</span>
                        <blockquote>{t.quote}</blockquote>
                        <figcaption>
                            <strong>{t.author}</strong>
                            <span>{t.role}</span>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
}
