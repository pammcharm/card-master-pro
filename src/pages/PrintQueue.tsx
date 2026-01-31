import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Printer, 
  Download,
  Trash2,
  FileImage,
  FileText,
  RefreshCw,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

const printJobs = [
  { id: 'JOB001', name: 'Lincoln High - Class 10A', cards: 35, status: 'ready', createdAt: '2024-01-15 10:30' },
  { id: 'JOB002', name: 'TechCorp - Engineering', cards: 28, status: 'printing', createdAt: '2024-01-15 09:45' },
  { id: 'JOB003', name: 'City Hospital - Staff', cards: 45, status: 'completed', createdAt: '2024-01-14 16:20' },
  { id: 'JOB004', name: 'Lincoln High - Class 10B', cards: 32, status: 'ready', createdAt: '2024-01-14 14:15' },
  { id: 'JOB005', name: 'Riverside Academy - Grade 11', cards: 40, status: 'error', createdAt: '2024-01-14 11:00' },
];

const statusConfig: Record<string, { label: string; icon: typeof Clock; color: string; animate?: boolean }> = {
  ready: { label: 'Ready', icon: Clock, color: 'bg-primary/20 text-primary border-primary/30' },
  printing: { label: 'Printing', icon: RefreshCw, color: 'bg-warning/20 text-warning border-warning/30', animate: true },
  completed: { label: 'Completed', icon: CheckCircle, color: 'bg-success/20 text-success border-success/30' },
  error: { label: 'Error', icon: AlertCircle, color: 'bg-destructive/20 text-destructive border-destructive/30' },
};

export default function PrintQueue() {
  const [selectedJobs, setSelectedJobs] = useState<string[]>([]);
  const [printFormat, setPrintFormat] = useState('pdf');

  const toggleJobSelection = (jobId: string) => {
    setSelectedJobs(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
  };

  const toggleAll = () => {
    setSelectedJobs(prev => 
      prev.length === printJobs.length 
        ? [] 
        : printJobs.map(j => j.id)
    );
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen">
      <Header 
        title="Print Queue" 
        subtitle="Manage and process your card printing jobs."
      />
      
      <main className="flex-1 p-6 space-y-6 overflow-auto">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div className="flex items-center gap-4">
            <Select value={printFormat} onValueChange={setPrintFormat}>
              <SelectTrigger className="w-[180px] bg-card border-border">
                <SelectValue placeholder="Export Format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pdf">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    PDF Document
                  </div>
                </SelectItem>
                <SelectItem value="png">
                  <div className="flex items-center gap-2">
                    <FileImage className="w-4 h-4" />
                    PNG Images
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
            
            {selectedJobs.length > 0 && (
              <span className="text-sm text-muted-foreground">
                {selectedJobs.length} selected
              </span>
            )}
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              disabled={selectedJobs.length === 0}
            >
              <Download className="w-4 h-4 mr-2" />
              Export Selected
            </Button>
            <Button 
              className="glow-primary"
              disabled={selectedJobs.length === 0}
            >
              <Printer className="w-4 h-4 mr-2" />
              Print Selected
            </Button>
          </div>
        </div>

        {/* Print Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass rounded-xl p-4 border border-border/50">
            <div className="text-2xl font-bold text-primary">180</div>
            <div className="text-sm text-muted-foreground">Total Cards</div>
          </div>
          <div className="glass rounded-xl p-4 border border-border/50">
            <div className="text-2xl font-bold text-warning">63</div>
            <div className="text-sm text-muted-foreground">Pending</div>
          </div>
          <div className="glass rounded-xl p-4 border border-border/50">
            <div className="text-2xl font-bold text-success">45</div>
            <div className="text-sm text-muted-foreground">Printed</div>
          </div>
          <div className="glass rounded-xl p-4 border border-border/50">
            <div className="text-2xl font-bold text-destructive">1</div>
            <div className="text-sm text-muted-foreground">Failed</div>
          </div>
        </div>

        {/* Print Jobs List */}
        <div className="glass rounded-xl border border-border/50 overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-4 p-4 border-b border-border/50 bg-card/50">
            <Checkbox 
              checked={selectedJobs.length === printJobs.length && printJobs.length > 0}
              onCheckedChange={toggleAll}
            />
            <div className="flex-1 grid grid-cols-5 gap-4 text-sm font-medium text-muted-foreground">
              <span>Job ID</span>
              <span className="col-span-2">Name</span>
              <span>Cards</span>
              <span>Status</span>
            </div>
            <div className="w-20" />
          </div>

          {/* Jobs */}
          <div className="divide-y divide-border/50">
            {printJobs.map((job) => {
              const status = statusConfig[job.status as keyof typeof statusConfig];
              const StatusIcon = status.icon;
              
              return (
                <div 
                  key={job.id}
                  className={cn(
                    "flex items-center gap-4 p-4 hover:bg-card/50 transition-colors",
                    selectedJobs.includes(job.id) && "bg-primary/5"
                  )}
                >
                  <Checkbox 
                    checked={selectedJobs.includes(job.id)}
                    onCheckedChange={() => toggleJobSelection(job.id)}
                  />
                  <div className="flex-1 grid grid-cols-5 gap-4 items-center">
                    <span className="font-mono text-sm text-primary">{job.id}</span>
                    <div className="col-span-2">
                      <p className="font-medium">{job.name}</p>
                      <p className="text-xs text-muted-foreground">{job.createdAt}</p>
                    </div>
                    <span className="font-medium">{job.cards}</span>
                    <Badge 
                      variant="outline" 
                      className={cn("capitalize w-fit", status.color)}
                    >
                      <StatusIcon className={cn("w-3 h-3 mr-1", status.animate && "animate-spin")} />
                      {status.label}
                    </Badge>
                  </div>
                  <div className="flex gap-1 w-20 justify-end">
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8 text-destructive hover:text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
