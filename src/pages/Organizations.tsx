import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Plus, 
  Search, 
  Building2, 
  GraduationCap, 
  Briefcase, 
  Heart,
  MoreVertical,
  Users,
  CreditCard,
  Settings
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const organizations = [
  {
    id: 1,
    name: 'Lincoln High School',
    type: 'school',
    members: 1245,
    cardsGenerated: 1102,
    pendingPhotos: 143,
    status: 'active',
  },
  {
    id: 2,
    name: 'TechCorp Industries',
    type: 'company',
    members: 856,
    cardsGenerated: 856,
    pendingPhotos: 0,
    status: 'active',
  },
  {
    id: 3,
    name: 'City General Hospital',
    type: 'hospital',
    members: 423,
    cardsGenerated: 380,
    pendingPhotos: 43,
    status: 'active',
  },
  {
    id: 4,
    name: 'Riverside Academy',
    type: 'school',
    members: 678,
    cardsGenerated: 520,
    pendingPhotos: 158,
    status: 'active',
  },
];

const typeIcons = {
  school: GraduationCap,
  company: Briefcase,
  hospital: Heart,
  default: Building2,
};

const typeColors = {
  school: 'text-primary bg-primary/10',
  company: 'text-warning bg-warning/10',
  hospital: 'text-destructive bg-destructive/10',
  default: 'text-muted-foreground bg-muted',
};

export default function Organizations() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredOrgs = organizations.filter(org =>
    org.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 flex flex-col min-h-screen">
      <Header 
        title="Organizations" 
        subtitle="Manage all your organizations and their members."
      />
      
      <main className="flex-1 p-6 space-y-6 overflow-auto">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search organizations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card border-border"
            />
          </div>
          <Button className="glow-primary">
            <Plus className="w-4 h-4 mr-2" />
            Add Organization
          </Button>
        </div>

        {/* Organizations Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredOrgs.map((org) => {
            const TypeIcon = typeIcons[org.type as keyof typeof typeIcons] || typeIcons.default;
            const typeColor = typeColors[org.type as keyof typeof typeColors] || typeColors.default;
            const completion = Math.round((org.cardsGenerated / org.members) * 100);

            return (
              <div 
                key={org.id}
                className="glass rounded-xl p-6 card-hover border border-border/50 hover:border-primary/30"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${typeColor}`}>
                    <TypeIcon className="w-6 h-6" />
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Settings className="w-4 h-4 mr-2" />
                        Settings
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Users className="w-4 h-4 mr-2" />
                        View Members
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <CreditCard className="w-4 h-4 mr-2" />
                        View Cards
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <h3 className="text-lg font-semibold mb-1">{org.name}</h3>
                <p className="text-sm text-muted-foreground capitalize mb-4">{org.type}</p>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Members</span>
                    <span className="font-medium">{org.members.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Cards Generated</span>
                    <span className="font-medium text-success">{org.cardsGenerated.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Pending Photos</span>
                    <span className={`font-medium ${org.pendingPhotos > 0 ? 'text-warning' : 'text-success'}`}>
                      {org.pendingPhotos}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="pt-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted-foreground">Completion</span>
                      <span className="text-primary font-medium">{completion}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-500"
                        style={{ width: `${completion}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
