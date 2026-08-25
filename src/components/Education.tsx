import { GraduationCap, Award, FileText } from 'lucide-react';
import { useReveal } from '@/useReveal';

const credentials = [
    { icon: GraduationCap, title: 'M.Sc. Nursing', sub: 'Psychiatric & Mental Health Nursing', place: 'HNBMU, Uttarakhand', year: '2023' },
    { icon: GraduationCap, title: 'B.Sc. Nursing', sub: 'Basic Sciences & Clinical Foundations', place: 'HNBMU, Uttarakhand', year: '2017' },
    { icon: Award, title: 'BLS Certification', sub: 'Basic Life Support provider', place: 'AIIMS Rishikesh', year: '2023' },
    { icon: FileText, title: 'Clinical Psychology Internship', sub: '243 supervised hours — assessment, testing, psycho-education', place: 'Nidaan, Dehradun', year: '2020' },
];

export default function Education() {
    const { ref, visible } = useReveal<HTMLDivElement>();
    return (
        <section className="education-section section-pad" id="education">
            <div className="section-kicker"><span>04</span><span className="kicker-line" /><span>Education & credentials</span></div>
            <div className="education-layout">
                <div className="education-side">
                    <h2>Trained to <em>understand.</em><br />Certified to <em>act.</em></h2>
                    <p>Academic depth in psychiatric nursing, hands-on clinical training, and a psychologist's lens — all in one practitioner.</p>
                </div>
                <div ref={ref} className={`education-list ${visible ? 'is-visible' : ''}`}>
                    {credentials.map((c, i) => (
                        <div className="credential-row" key={c.title} style={{ transitionDelay: `${i * 100}ms` }}>
                            <div className="credential-icon"><c.icon size={22} strokeWidth={1.5} /></div>
                            <div className="credential-main">
                                <h3>{c.title}</h3>
                                <p className="credential-sub">{c.sub}</p>
                                <p className="credential-place">{c.place}</p>
                            </div>
                            <span className="credential-year">{c.year}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
