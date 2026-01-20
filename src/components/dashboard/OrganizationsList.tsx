import { cn } from '@/lib/utils';
import { Building2, GraduationCap, Briefcase, ChevronRight } from 'lucide-react';

interface Organization {
  id: string;
  name: string;
  type: 'school' | 'company' | 'other';
  membersCount: number;
  cardsGenerated: number;
  lastActivity: string;
}

const mockOrganizations: Organization[] = [
  { 
    id: '1', 
    name: 'Springfield Elementary', 
    type: 'school', 
    membersCount: 450, 
    cardsGenerated: 423, 
    lastActivity: 'Today' 
  },
  { 
    id: '2', 
    name: 'TechCorp Industries', 
    type: 'company', 
    membersCount: 128, 
    cardsGenerated: 128, 
    lastActivity: 'Yesterday' 
  },
  { 
    id: '3', 
    name: 'City Library', 
    type: 'other', 
    membersCount: 892, 
    cardsGenerated: 756, 
    lastActivity: '2 days ago' 
  },
];

const typeConfig = {
  school: { icon: GraduationCap, color: 'text-primary' },
  company: { icon: Briefcase, color: 'text-success' },
  other: { icon: Building2, color: 'text-warning' },
};

export function OrganizationsList() {
  return (
    <div className="bg-card rounded-xl border border-border p-5 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-foreground">Organizations</h3>
        <button className="text-xs text-primary hover:underline">Manage All</button>
      </div>
      
      <div className="space-y-2">
        {mockOrganizations.map((org) => {
          const config = typeConfig[org.type];
          const TypeIcon = config.icon;
          const completionRate = Math.round((org.cardsGenerated / org.membersCount) * 100);
          
          return (
            <button 
              key={org.id}
              className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group text-left"
            >
              <div className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center bg-muted",
              )}>
                <TypeIcon className={cn("w-5 h-5", config.color)} />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {org.name}
                </p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs text-muted-foreground">
                    {org.membersCount} members
                  </span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className={cn(
                    "text-xs font-medium",
                    completionRate === 100 ? "text-success" : "text-warning"
                  )}>
                    {completionRate}% complete
                  </span>
                </div>
              </div>
              
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </button>
          );
        })}
      </div>
    </div>
  );
}