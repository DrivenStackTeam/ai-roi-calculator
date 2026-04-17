import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import logoHbr from '@/assets/logo-hbr.png';
import logoOxford from '@/assets/logo-oxford.png';
import logoShrm from '@/assets/logo-shrm.png';

const logos = [
  { src: logoHbr, alt: 'Harvard Business Review', name: 'Harvard Business Review' },
  { src: logoOxford, alt: 'Oxford Economics', name: 'Oxford Economics' },
  { src: logoShrm, alt: 'SHRM', name: 'SHRM' },
];

const TrustSection = () => {
  return (
    <div className="px-4 md:px-8 text-center space-y-8 pb-16">
      {/* Trust text */}
      <p className="text-xs md:text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        Audit powered by benchmarks from <strong>Harvard Business Review</strong>,{' '}
        <strong>Oxford Economics</strong> & <strong>SHRM</strong>.
        Includes the 1.6 CEO-Reality Multiplier™.
      </p>

      {/* Logos */}
      <div className="flex items-center justify-center gap-10 md:gap-16 flex-wrap">
        {logos.map((logo) => (
          <img
            key={logo.name}
            src={logo.src}
            alt={logo.alt}
            className="h-8 md:h-10 w-auto object-contain grayscale opacity-40 hover:opacity-60 transition-opacity"
          />
        ))}
      </div>

      {/* CTA */}
      <Button
        size="lg"
        className="bg-gold text-gold-foreground hover:brightness-110 transition-all text-sm md:text-base font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl"
      >
        <Download className="w-4 h-4 mr-2" />
        Download Full Intelligence Report
      </Button>
    </div>
  );
};

export default TrustSection;
