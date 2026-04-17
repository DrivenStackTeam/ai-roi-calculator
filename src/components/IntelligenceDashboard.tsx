import AnimatedNumber from './AnimatedNumber';
import RevenueLeakGauge from './RevenueLeakGauge';
import { AuditResults } from '@/hooks/useAuditCalculations';
import { motion } from 'framer-motion';

interface Props {
  results: AuditResults;
}

const BreakdownRow = ({ label, value }: { label: string; value: number }) => (
  <div className="flex items-center justify-between py-2 border-b border-border/10 last:border-0">
    <span className="text-xs text-muted-foreground">{label}</span>
    <AnimatedNumber value={value} className="text-sm text-foreground" />
  </div>
);

const IntelligenceDashboard = ({ results }: Props) => {
  // Gauge: proportion of total relative to a reasonable ceiling
  const gaugePct = Math.min(100, (results.totalAnnualIncrease / Math.max(results.totalAnnualIncrease, 500000)) * 100);

  return (
    <div className="px-4 md:px-8 space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center font-serif">
        Intelligence <span className="gold-gradient-text">Dashboard</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Gauge */}
        <div className="surface-card flex items-center justify-center">
          <RevenueLeakGauge percentage={gaugePct} />
        </div>

        {/* EBITDA Boost */}
        <div className="surface-card flex flex-col items-center justify-center gap-2">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Total Annual Profit Increase</span>
          <AnimatedNumber
            value={results.totalAnnualIncrease}
            className="text-3xl md:text-4xl text-gold"
          />
        </div>

        {/* Breakdown */}
        <div className="surface-card">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3 block">Breakdown</span>
          <BreakdownRow label="Management Friction" value={results.managementFriction} />
          <BreakdownRow label="Salary Savings" value={results.salarySavings} />
          <BreakdownRow label="Replacement Tax" value={results.replacementTax} />
          <BreakdownRow label="Marketing Waste" value={results.marketingWaste} />
          <BreakdownRow label="Revenue Leak" value={results.revenueLeak} />
          <BreakdownRow label="Reputation Tax" value={results.reputationTax} />
        </div>
      </div>

      {/* Money Shot */}
      <motion.div
        className="navy-card gold-glow gold-glow-pulse text-center py-8 md:py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="text-xs md:text-sm text-card-foreground opacity-60 uppercase tracking-widest mb-3">
          Projected Increase in Company Sale Value
        </p>
        <AnimatedNumber
          value={results.exitValue}
          className="text-4xl md:text-5xl lg:text-6xl text-gold"
        />
      </motion.div>
    </div>
  );
};

export default IntelligenceDashboard;
