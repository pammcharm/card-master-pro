import { cn } from '@/lib/utils';
import { Plus, Camera, Printer, Upload, LucideIcon } from 'lucide-react';

interface QuickAction {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
  variant: 'primary' | 'secondary';
}

const actions: QuickAction[] = [
  {
    id: 'capture',
    label: 'Start Capture',
    description: 'Begin photo capture session',
    icon: Camera,
    variant: 'primary',
  },
  {
    id: 'add-org',
    label: 'New Organization',
    description: 'Add school or company',
    icon: Plus,
    variant: 'secondary',
  },
  {
    id: 'import',
    label: 'Import Data',
    description: 'Upload Excel or CSV file',
    icon: Upload,
    variant: 'secondary',
  },
  {
    id: 'print',
    label: 'Print Cards',
    description: 'Send to print queue',
    icon: Printer,
    variant: 'secondary',
  },
];

interface QuickActionsProps {
  onAction: (actionId: string) => void;
}

export function QuickActions({ onAction }: QuickActionsProps) {
  return (
    <div className="bg-card rounded-xl border border-border p-5 animate-fade-in">
      <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
      
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => {
          const Icon = action.icon;
          const isPrimary = action.variant === 'primary';
          
          return (
            <button
              key={action.id}
              onClick={() => onAction(action.id)}
              className={cn(
                "p-4 rounded-xl border text-left transition-all duration-200 group",
                isPrimary 
                  ? "bg-primary/10 border-primary/20 hover:bg-primary/20 hover:border-primary/30 hover:shadow-glow" 
                  : "bg-muted/30 border-border hover:bg-muted/50 hover:border-primary/20"
              )}
            >
              <div className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-transform group-hover:scale-110",
                isPrimary 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground"
              )}>
                <Icon className="w-5 h-5" />
              </div>
              <p className={cn(
                "text-sm font-semibold",
                isPrimary ? "text-primary" : "text-foreground"
              )}>
                {action.label}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {action.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}