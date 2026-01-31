import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Search, 
  Download,
  Printer,
  Eye,
  Grid3X3,
  List,
  Filter,
  CreditCard
} from 'lucide-react';
import { cn } from '@/lib/utils';

const cards = [
  { id: 'STU001', name: 'John Smith', group: 'Class 10A', organization: 'Lincoln High School', status: 'generated', generatedAt: '2024-01-15' },
  { id: 'STU002', name: 'Emma Johnson', group: 'Class 10A', organization: 'Lincoln High School', status: 'generated', generatedAt: '2024-01-15' },
  { id: 'EMP001', name: 'Robert Wilson', group: 'Engineering', organization: 'TechCorp Industries', status: 'generated', generatedAt: '2024-01-14' },
  { id: 'DOC001', name: 'Jennifer Taylor', group: 'Cardiology', organization: 'City General Hospital', status: 'generated', generatedAt: '2024-01-14' },
  { id: 'STU004', name: 'Sarah Davis', group: 'Class 10B', organization: 'Lincoln High School', status: 'generated', generatedAt: '2024-01-13' },
  { id: 'EMP002', name: 'Lisa Anderson', group: 'Marketing', organization: 'TechCorp Industries', status: 'generated', generatedAt: '2024-01-13' },
];

export default function Cards() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [orgFilter, setOrgFilter] = useState('all');

  const filteredCards = cards.filter(card => {
    const matchesSearch = card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         card.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesOrg = orgFilter === 'all' || card.organization === orgFilter;
    return matchesSearch && matchesOrg;
  });

  const organizations = [...new Set(cards.map(c => c.organization))];

  return (
    <div className="flex-1 flex flex-col min-h-screen">
      <Header 
        title="Generated Cards" 
        subtitle="View, download, and print all generated ID cards."
      />
      
      <main className="flex-1 p-6 space-y-6 overflow-auto">
        {/* Toolbar */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search cards..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card border-border"
              />
            </div>
            <Select value={orgFilter} onValueChange={setOrgFilter}>
              <SelectTrigger className="w-full sm:w-[220px] bg-card border-border">
                <Filter className="w-4 h-4 mr-2 text-muted-foreground" />
                <SelectValue placeholder="All Organizations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Organizations</SelectItem>
                {organizations.map(org => (
                  <SelectItem key={org} value={org}>{org}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2">
            <div className="flex bg-card rounded-lg p-1 border border-border">
              <Button 
                variant={viewMode === 'grid' ? 'secondary' : 'ghost'} 
                size="icon" 
                className="h-8 w-8"
                onClick={() => setViewMode('grid')}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button 
                variant={viewMode === 'list' ? 'secondary' : 'ghost'} 
                size="icon" 
                className="h-8 w-8"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export All
            </Button>
            <Button className="glow-primary">
              <Printer className="w-4 h-4 mr-2" />
              Print Selected
            </Button>
          </div>
        </div>

        {/* Cards Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCards.map((card) => (
              <div 
                key={card.id}
                className="glass rounded-xl overflow-hidden border border-border/50 card-hover group"
              >
                {/* Card Preview */}
                <div className="aspect-[1.6/1] bg-gradient-to-br from-card to-card/80 p-4 relative">
                  <div className="flex gap-3 h-full">
                    <div className="w-16 h-20 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <CreditCard className="w-6 h-6 text-primary/60" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="h-3 bg-foreground/20 rounded w-3/4" />
                      <div className="h-2 bg-foreground/10 rounded w-1/2" />
                      <div className="h-2 bg-foreground/10 rounded w-2/3" />
                    </div>
                  </div>
                  {/* Barcode */}
                  <div className="absolute bottom-3 left-4 right-4 flex gap-[2px]">
                    {[...Array(20)].map((_, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-foreground/30 rounded-[1px]"
                        style={{ height: `${8 + Math.random() * 8}px` }}
                      />
                    ))}
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <Button size="sm" variant="secondary">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Card Info */}
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{card.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{card.group}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-primary">{card.id}</span>
                    <Badge variant="outline" className="text-xs bg-success/10 text-success border-success/30">
                      Generated
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass rounded-xl border border-border/50 divide-y divide-border/50">
            {filteredCards.map((card) => (
              <div 
                key={card.id}
                className="flex items-center gap-4 p-4 hover:bg-card/50 transition-colors"
              >
                <div className="w-16 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-5 h-5 text-primary/60" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold">{card.name}</h3>
                  <p className="text-sm text-muted-foreground">{card.group} • {card.organization}</p>
                </div>
                <span className="font-mono text-sm text-primary hidden sm:block">{card.id}</span>
                <span className="text-sm text-muted-foreground hidden md:block">{card.generatedAt}</span>
                <Badge variant="outline" className="text-xs bg-success/10 text-success border-success/30">
                  Generated
                </Badge>
                <div className="flex gap-1">
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Summary */}
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>Showing {filteredCards.length} cards</span>
        </div>
      </main>
    </div>
  );
}
