import { useState } from 'react';
import AuditHeader from '@/components/AuditHeader';
import AuditInputs from '@/components/AuditInputs';
import IntelligenceDashboard from '@/components/IntelligenceDashboard';
import TrustSection from '@/components/TrustSection';
import { useAuditCalculations, defaultInputs, type AuditInputs as AuditInputsType } from '@/hooks/useAuditCalculations';

const Index = () => {
  const [inputs, setInputs] = useState<AuditInputsType>(defaultInputs);
  const results = useAuditCalculations(inputs);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto">
        <AuditHeader />
        <AuditInputs inputs={inputs} onChange={setInputs} />
        <div className="py-12">
          <IntelligenceDashboard results={results} />
        </div>
        <TrustSection />
      </div>
    </div>
  );
};

export default Index;
