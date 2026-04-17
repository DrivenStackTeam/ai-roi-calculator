import AuditInputCard from './AuditInputCard';
import { AuditInputs as AuditInputsType } from '@/hooks/useAuditCalculations';
import { Slider } from '@/components/ui/slider';

interface Props {
  inputs: AuditInputsType;
  onChange: (inputs: AuditInputsType) => void;
}

const CurrencyInput = ({ value, onChange, placeholder }: { value: number; onChange: (v: number) => void; placeholder?: string }) => (
  <div className="relative">
    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gold text-sm font-medium">€</span>
    <input
      type="number"
      value={value || ''}
      onChange={(e) => onChange(Number(e.target.value) || 0)}
      placeholder={placeholder}
      className="w-full bg-secondary text-secondary-foreground border border-gold/20 rounded-lg pl-8 pr-4 py-2.5 text-sm font-medium number-display focus:outline-none focus:ring-1 focus:ring-gold/50 transition-all"
    />
  </div>
);

const NumberInput = ({ value, onChange }: { value: number; onChange: (v: number) => void }) => (
  <input
    type="number"
    value={value || ''}
    onChange={(e) => onChange(Number(e.target.value) || 0)}
    className="w-full bg-secondary text-secondary-foreground border border-gold/20 rounded-lg px-4 py-2.5 text-sm font-medium number-display focus:outline-none focus:ring-1 focus:ring-gold/50 transition-all"
  />
);

const AuditInputs = ({ inputs, onChange }: Props) => {
  const update = (key: keyof AuditInputsType, value: number) => {
    onChange({ ...inputs, [key]: value });
  };

  return (
    <div className="space-y-6 px-4 md:px-8">
      {/* 2x3 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AuditInputCard
          label="Current Front-Desk Capacity (FTEs)"
          tooltip="Industry average for high-end clinics is 1–3 FTEs per location."
        >
          <NumberInput value={inputs.q1_fteCount} onChange={(v) => update('q1_fteCount', v)} />
        </AuditInputCard>

        <AuditInputCard
          label="Average Monthly Salary"
          tooltip="Include base pay + 20% employer taxes/benefits."
        >
          <CurrencyInput value={inputs.q2_monthlySalary} onChange={(v) => update('q2_monthlySalary', v)} />
        </AuditInputCard>

        <AuditInputCard
          label="Customer Lifetime Value (LTV)"
          tooltip="Total revenue one client generates over full relationship."
        >
          <CurrencyInput value={inputs.q3_ltv} onChange={(v) => update('q3_ltv', v)} />
        </AuditInputCard>

        <AuditInputCard
          label="Monthly Marketing Investment"
          tooltip="Used to calculate Ad-Waste from missed calls."
        >
          <CurrencyInput value={inputs.q4_marketingSpend} onChange={(v) => update('q4_marketingSpend', v)} />
        </AuditInputCard>

        <AuditInputCard
          label="Annual Revenue"
          tooltip="Your firm's total annual revenue."
          className="md:col-span-1"
        >
          <CurrencyInput value={inputs.q5a_annualRevenue} onChange={(v) => update('q5a_annualRevenue', v)} />
        </AuditInputCard>

        <AuditInputCard
          label="Google Star Rating"
          tooltip="Firms below 4.5 stars face a 15% Reputation Tax on annual revenue."
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-card-foreground opacity-50">1.0</span>
              <span className="text-lg font-bold text-gold number-display">{inputs.q5b_starRating.toFixed(1)}</span>
              <span className="text-xs text-card-foreground opacity-50">5.0</span>
            </div>
            <Slider
              value={[inputs.q5b_starRating]}
              onValueChange={([v]) => update('q5b_starRating', Math.round(v * 10) / 10)}
              min={1}
              max={5}
              step={0.1}
              className="audit-slider"
            />
          </div>
        </AuditInputCard>
      </div>

      {/* Automation Slider - Hero */}
      <div className="navy-card gold-border">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm font-medium text-card-foreground opacity-90">
            Automation Leverage
          </label>
          <span className="text-xs text-gold opacity-70">FTEs replaced by AI</span>
        </div>
        <div className="py-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] text-card-foreground opacity-50 max-w-[120px]">Hybrid Safety Net – AI handles 24/7 overflow</span>
            <span className="text-3xl md:text-4xl font-bold text-gold number-display">{inputs.q6_fteReplaced}</span>
            <span className="text-[11px] text-card-foreground opacity-50 max-w-[120px] text-right">Strategic Automation – AI replaces designated hours</span>
          </div>
          <Slider
            value={[inputs.q6_fteReplaced]}
            onValueChange={([v]) => update('q6_fteReplaced', v)}
            min={0}
            max={1000}
            step={1}
            className="audit-slider-hero"
          />
        </div>
      </div>
    </div>
  );
};

export default AuditInputs;
