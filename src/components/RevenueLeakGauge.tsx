import { motion } from 'framer-motion';

interface Props {
  percentage: number; // 0-100
}

const RevenueLeakGauge = ({ percentage }: Props) => {
  const clampedPct = Math.min(100, Math.max(0, percentage));
  // Interpolate from red (0) to gold (100)
  const hue = (clampedPct / 100) * 45; // 0 = red (0°), 100 = gold (45°)
  const saturation = 70 + (clampedPct / 100) * 10;
  const lightness = 45 + (clampedPct / 100) * 5;

  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (clampedPct / 100) * circumference * 0.75; // 270° arc

  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Revenue Leak Recovery</span>
      <div className="relative w-36 h-36">
        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-[135deg]">
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="hsl(var(--navy-light))"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * 0.25}
            strokeLinecap="round"
          />
          <motion.circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke={`hsl(${hue}, ${saturation}%, ${lightness}%)`}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-foreground number-display">{Math.round(clampedPct)}%</span>
        </div>
      </div>
    </div>
  );
};

export default RevenueLeakGauge;
