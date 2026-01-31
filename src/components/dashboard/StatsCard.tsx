import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral' | 'warning';
  icon: LucideIcon;
}

export function StatsCard({ 
  title, 
  value, 
  change,
  changeType = 'neutral',
  icon: Icon, 
}: StatsCardProps) {
  const changeColors = {
    positive: 'text-success',
    negative: 'text-destructive',
    neutral: 'text-muted-foreground',
    warning: 'text-warning',
  };

  return (
    <div className="glass p-5 rounded-xl border border-border/50 transition-all duration-200 hover:border-primary/30 card-hover animate-fade-in">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold text-foreground">{value}</p>
          {change && (
            <p className={cn("text-xs font-medium", changeColors[changeType])}>
              {change}
            </p>
          )}
        </div>
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
    </div>
  );
}