import { cn } from '@/lib/utils';
import { CheckCircle2, Clock, XCircle, User } from 'lucide-react';

interface Activity {
  id: string;
  type: 'generated' | 'pending' | 'skipped';
  name: string;
  organization: string;
  time: string;
}

const mockActivities: Activity[] = [
  { id: '1', type: 'generated', name: 'John Doe', organization: 'Class P2', time: '2 min ago' },
  { id: '2', type: 'generated', name: 'Alice Marie', organization: 'Class P2', time: '3 min ago' },
  { id: '3', type: 'skipped', name: 'Eric Paul', organization: 'Class P2', time: '4 min ago' },
  { id: '4', type: 'pending', name: 'Jane Smith', organization: 'Class P1', time: '10 min ago' },
  { id: '5', type: 'generated', name: 'Michael Brown', organization: 'Class P3', time: '15 min ago' },
];

const statusConfig = {
  generated: {
    icon: CheckCircle2,
    label: 'Card Generated',
    className: 'text-success bg-success/10',
  },
  pending: {
    icon: Clock,
    label: 'Pending',
    className: 'text-warning bg-warning/10',
  },
  skipped: {
    icon: XCircle,
    label: 'Skipped',
    className: 'text-muted-foreground bg-muted',
  },
};

export function RecentActivity() {
  return (
    <div className="bg-card rounded-xl border border-border p-5 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-foreground">Recent Activity</h3>
        <button className="text-xs text-primary hover:underline">View All</button>
      </div>
      
      <div className="space-y-3">
        {mockActivities.map((activity) => {
          const config = statusConfig[activity.type];
          const StatusIcon = config.icon;
          
          return (
            <div 
              key={activity.id}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <User className="w-5 h-5 text-muted-foreground" />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {activity.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {activity.organization}
                </p>
              </div>
              
              <div className="flex flex-col items-end gap-1">
                <span className={cn(
                  "text-[10px] font-medium px-2 py-0.5 rounded-full",
                  config.className
                )}>
                  {config.label}
                </span>
                <span className="text-[10px] text-muted-foreground">
                  {activity.time}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}