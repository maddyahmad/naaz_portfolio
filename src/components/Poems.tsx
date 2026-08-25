import { ArrowUpRight } from 'lucide-react';
import { useReveal } from '@/useReveal';

const poems = [
    { title: 'On listening', text: 'Before the words, there is a pause — a space where the unsaid waits, patient and trembling.' },
    { title: 'On healing', text: 'Healing is not a door you walk through. It is the slow widening of a window you forgot was there.' },
    { title: 'On intuition', text: 'The quietest voice in the room is often the truest. Learn to turn down the rest.' },
];

export default function Poems() {
    const { ref, visible } = useReveal<HTMLDivElement>();
    return (
        <section className="poems-section" id="poems">
            <div className="poems-inner section-pad">
                <div className="section-kicker light-kicker"><span>05</span><span className="kicker-line light" /><span>From the page</span></div>
                <div className="poems-heading">
                    <p className="eyebrow light-eyebrow"><span /> Words that companion her work</p>
                    <h2>A few lines from<br />the <em>collection.</em></h2>
                </div>
                <div ref={ref} className={`poems-grid ${visible ? 'is-visible' : ''}`}>
                    {poems.map((poem, i) => (
                        <article className="poem-card" key={poem.title} style={{ transitionDelay: `${i * 140}ms` }}>
                            <span className="poem-mark">“</span>
                            <p className="poem-text">{poem.text}</p>
                            <p className="poem-title">— {poem.title}</p>
                        </article>
                    ))}
                </div>
                <a className="button button-light poems-cta" href="https://amzn.in/d/0eR6Wjz2" target="_blank" rel="noreferrer">Read the full collection <ArrowUpRight size={17} /></a>
            </div>
        </section>
    );
}
