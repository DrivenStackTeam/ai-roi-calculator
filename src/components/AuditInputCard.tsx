import { ReactNode } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { HelpCircle } from 'lucide-react';

interface AuditInputCardProps {
  label: string;
  tooltip: string;
  children: ReactNode;
  className?: string;
}

const AuditInputCard = ({ label, tooltip, children, className = '' }: AuditInputCardProps) => {
  return (
    <div className={`navy-card flex flex-col gap-3 ${className}`}>
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-card-foreground opacity-90 flex-1">
          {label}
        </label>
        <Tooltip>
          <TooltipTrigger asChild>
            <button className="text-gold opacity-60 hover:opacity-100 transition-opacity" type="button">
              <HelpCircle className="w-4 h-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="top" className="max-w-[260px] bg-popover text-popover-foreground text-xs">
            {tooltip}
          </TooltipContent>
        </Tooltip>
      </div>
      {children}
    </div>
  );
};

export default AuditInputCard;
