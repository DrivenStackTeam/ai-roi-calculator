import { useMemo } from 'react';

export interface AuditInputs {
  q1_fteCount: number;
  q2_monthlySalary: number;
  q3_ltv: number;
  q4_marketingSpend: number;
  q5a_annualRevenue: number;
  q5b_starRating: number;
  q6_fteReplaced: number;
}

export interface AuditResults {
  managementFriction: number;
  salarySavings: number;
  replacementTax: number;
  marketingWaste: number;
  revenueLeak: number;
  reputationTax: number;
  totalAnnualIncrease: number;
  exitValue: number;
}

export const defaultInputs: AuditInputs = {
  q1_fteCount: 2,
  q2_monthlySalary: 3500,
  q3_ltv: 2000,
  q4_marketingSpend: 5000,
  q5a_annualRevenue: 500000,
  q5b_starRating: 4.2,
  q6_fteReplaced: 0,
};

export function useAuditCalculations(inputs: AuditInputs): AuditResults {
  return useMemo(() => {
    const { q1_fteCount, q2_monthlySalary, q4_marketingSpend, q5a_annualRevenue, q5b_starRating, q6_fteReplaced } = inputs;

    const managementFriction = q1_fteCount * 15000;
    const salarySavings = q6_fteReplaced > 0 ? q6_fteReplaced * ((q2_monthlySalary * 12 * 1.6) / 0.75) : 0;
    const replacementTax = q6_fteReplaced > 0 ? q6_fteReplaced * 80000 : 0;
    const marketingWaste = (q4_marketingSpend * 12) * 0.55;
    const revenueLeak = q5a_annualRevenue * 0.55 * 0.20;
    const reputationTax = q5b_starRating < 4.5 ? q5a_annualRevenue * 0.15 : 0;

    const totalAnnualIncrease = managementFriction + salarySavings + replacementTax + marketingWaste + revenueLeak + reputationTax;
    const exitValue = totalAnnualIncrease * 8;

    return {
      managementFriction,
      salarySavings,
      replacementTax,
      marketingWaste,
      revenueLeak,
      reputationTax,
      totalAnnualIncrease,
      exitValue,
    };
  }, [inputs]);
}
