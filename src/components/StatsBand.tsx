import { useEffect, useState } from 'react';

type Stat = { value: number; suffix: string; label: string };

const stats: Stat[] = [
    { value: 7, suffix: '+', label: 'Years in nursing & teaching' },
    { value: 5, suffix: '', label: 'Institutions served' },
    { value: 243, suffix: 'h', label: 'Clinical psychology hours' },
    { value: 60, suffix: '+', label: 'Students taught per cohort' },
];

function useCountUp(target: number, run: boolean, duration = 1400) {
    const [val, setVal] = useState(0);
    useEffect(() => {
        if (!run) return;
        let raf = 0;
        const start = performance.now();
        const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setVal(Math.round(target * (1 - Math.pow(1 - progress, 3))));
            if (progress < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [target, run, duration]);
    return val;
}

function StatItem({ stat, run, index }: { stat: Stat; run: boolean; index: number }) {
    const val = useCountUp(stat.value, run);
    return (
        <div className="stat-item" style={{ transitionDelay: `${index * 100}ms` }}>
            <div className="stat-value">
                <span className="stat-number">{val}</span>
                <span className="stat-suffix">{stat.suffix}</span>
            </div>
            <p className="stat-label">{stat.label}</p>
        </div>
    );
}

export default function StatsBand({ visible }: { visible: boolean }) {
    return (
        <section className="stats-band">
            <div className={`stats-grid ${visible ? 'is-visible' : ''}`}>
                {stats.map((stat, i) => (
                    <StatItem key={stat.label} stat={stat} run={visible} index={i} />
                ))}
            </div>
        </section>
    );
}
