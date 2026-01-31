import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Plus, 
  Search, 
  Upload,
  Camera,
  CreditCard,
  MoreVertical,
  Filter
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const members = [
  { id: 'STU001', name: 'John Smith', group: 'Class 10A', organization: 'Lincoln High School', photoStatus: 'taken', cardStatus: 'generated' },
  { id: 'STU002', name: 'Emma Johnson', group: 'Class 10A', organization: 'Lincoln High School', photoStatus: 'taken', cardStatus: 'generated' },
  { id: 'STU003', name: 'Michael Brown', group: 'Class 10B', organization: 'Lincoln High School', photoStatus: 'pending', cardStatus: 'pending' },
  { id: 'STU004', name: 'Sarah Davis', group: 'Class 10B', organization: 'Lincoln High School', photoStatus: 'taken', cardStatus: 'pending' },
  { id: 'EMP001', name: 'Robert Wilson', group: 'Engineering', organization: 'TechCorp Industries', photoStatus: 'taken', cardStatus: 'generated' },
  { id: 'EMP002', name: 'Lisa Anderson', group: 'Marketing', organization: 'TechCorp Industries', photoStatus: 'skipped', cardStatus: 'pending' },
  { id: 'STU005', name: 'David Martinez', group: 'Class 11A', organization: 'Riverside Academy', photoStatus: 'pending', cardStatus: 'pending' },
  { id: 'DOC001', name: 'Jennifer Taylor', group: 'Cardiology', organization: 'City General Hospital', photoStatus: 'taken', cardStatus: 'generated' },
];

const statusColors = {
  generated: 'bg-success/20 text-success border-success/30',
  taken: 'bg-primary/20 text-primary border-primary/30',
  pending: 'bg-warning/20 text-warning border-warning/30',
  skipped: 'bg-muted text-muted-foreground border-border',
};

export default function Members() {
  const [searchQuery, setSearchQuery] = useState('');
  const [orgFilter, setOrgFilter] = useState('all');

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesOrg = orgFilter === 'all' || member.organization === orgFilter;
    return matchesSearch && matchesOrg;
  });

  const organizations = [...new Set(members.map(m => m.organization))];

  return (
    <div className="flex-1 flex flex-col min-h-screen">
      <Header 
        title="Members" 
        subtitle="Manage all members across organizations."
      />
      
      <main className="flex-1 p-6 space-y-6 overflow-auto">
        {/* Toolbar */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search members..."
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
            <Button variant="outline">
              <Upload className="w-4 h-4 mr-2" />
              Import
            </Button>
            <Button className="glow-primary">
              <Plus className="w-4 h-4 mr-2" />
              Add Member
            </Button>
          </div>
        </div>

        {/* Members Table */}
        <div className="glass rounded-xl border border-border/50 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-border/50 hover:bg-transparent">
                <TableHead className="text-muted-foreground">ID</TableHead>
                <TableHead className="text-muted-foreground">Name</TableHead>
                <TableHead className="text-muted-foreground">Group</TableHead>
                <TableHead className="text-muted-foreground">Organization</TableHead>
                <TableHead className="text-muted-foreground">Photo</TableHead>
                <TableHead className="text-muted-foreground">Card</TableHead>
                <TableHead className="text-muted-foreground w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMembers.map((member) => (
                <TableRow key={member.id} className="border-border/50 hover:bg-card/50">
                  <TableCell className="font-mono text-sm text-primary">{member.id}</TableCell>
                  <TableCell className="font-medium">{member.name}</TableCell>
                  <TableCell className="text-muted-foreground">{member.group}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">{member.organization}</TableCell>
                  <TableCell>
                    <Badge 
                      variant="outline" 
                      className={`capitalize ${statusColors[member.photoStatus as keyof typeof statusColors]}`}
                    >
                      {member.photoStatus}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant="outline" 
                      className={`capitalize ${statusColors[member.cardStatus as keyof typeof statusColors]}`}
                    >
                      {member.cardStatus}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Camera className="w-4 h-4 mr-2" />
                          Take Photo
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <CreditCard className="w-4 h-4 mr-2" />
                          Generate Card
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination info */}
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>Showing {filteredMembers.length} of {members.length} members</span>
        </div>
      </main>
    </div>
  );
}
