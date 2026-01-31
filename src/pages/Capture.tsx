import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Camera, 
  SkipForward, 
  RotateCcw, 
  Check,
  ChevronLeft,
  ChevronRight,
  Video,
  VideoOff,
  User,
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';

const membersList = [
  { id: 'STU001', name: 'John Smith', group: 'Class 10A', photoStatus: 'taken' },
  { id: 'STU002', name: 'Emma Johnson', group: 'Class 10A', photoStatus: 'taken' },
  { id: 'STU003', name: 'Michael Brown', group: 'Class 10B', photoStatus: 'pending' },
  { id: 'STU004', name: 'Sarah Davis', group: 'Class 10B', photoStatus: 'pending' },
  { id: 'STU005', name: 'David Martinez', group: 'Class 10B', photoStatus: 'pending' },
  { id: 'STU006', name: 'Jennifer Wilson', group: 'Class 10B', photoStatus: 'pending' },
  { id: 'STU007', name: 'Christopher Lee', group: 'Class 10C', photoStatus: 'skipped' },
  { id: 'STU008', name: 'Amanda Taylor', group: 'Class 10C', photoStatus: 'pending' },
];

const statusColors = {
  taken: 'bg-success/20 text-success border-success/30',
  pending: 'bg-warning/20 text-warning border-warning/30',
  skipped: 'bg-muted text-muted-foreground border-border',
};

export default function Capture() {
  const [selectedOrg, setSelectedOrg] = useState('lincoln');
  const [selectedGroup, setSelectedGroup] = useState('10b');
  const [currentIndex, setCurrentIndex] = useState(2);
  const [cameraActive, setCameraActive] = useState(true);
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);

  const currentMember = membersList[currentIndex];
  const pendingMembers = membersList.filter(m => m.photoStatus === 'pending');

  const handleCapture = () => {
    setCapturedPhoto('/placeholder.svg');
  };

  const handleConfirm = () => {
    setCapturedPhoto(null);
    if (currentIndex < membersList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSkip = () => {
    if (currentIndex < membersList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    setCapturedPhoto(null);
  };

  const handleRetake = () => {
    setCapturedPhoto(null);
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen">
      <Header 
        title="Photo Capture" 
        subtitle="Capture photos sequentially for automatic card generation."
      />
      
      <main className="flex-1 p-6 overflow-auto">
        <div className="grid lg:grid-cols-3 gap-6 h-full">
          {/* Left Panel - Member List */}
          <div className="glass rounded-xl border border-border/50 p-4 flex flex-col">
            <div className="space-y-3 mb-4">
              <Select value={selectedOrg} onValueChange={setSelectedOrg}>
                <SelectTrigger className="bg-card border-border">
                  <SelectValue placeholder="Select Organization" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lincoln">Lincoln High School</SelectItem>
                  <SelectItem value="techcorp">TechCorp Industries</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedGroup} onValueChange={setSelectedGroup}>
                <SelectTrigger className="bg-card border-border">
                  <SelectValue placeholder="Select Group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10a">Class 10A</SelectItem>
                  <SelectItem value="10b">Class 10B</SelectItem>
                  <SelectItem value="10c">Class 10C</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">Members</span>
              <Badge variant="outline" className="text-xs">
                {pendingMembers.length} pending
              </Badge>
            </div>

            <div className="flex-1 overflow-auto space-y-2">
              {membersList.map((member, index) => (
                <button
                  key={member.id}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-full flex items-center gap-3 p-3 rounded-lg transition-all text-left",
                    index === currentIndex 
                      ? "bg-primary/20 border border-primary/30" 
                      : "hover:bg-card/50 border border-transparent"
                  )}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium",
                    member.photoStatus === 'taken' 
                      ? "bg-success/20 text-success"
                      : member.photoStatus === 'skipped'
                        ? "bg-muted text-muted-foreground"
                        : "bg-warning/20 text-warning"
                  )}>
                    {member.photoStatus === 'taken' ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <User className="w-5 h-5" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{member.name}</p>
                    <p className="text-xs text-muted-foreground font-mono">{member.id}</p>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={cn("text-xs capitalize", statusColors[member.photoStatus as keyof typeof statusColors])}
                  >
                    {member.photoStatus}
                  </Badge>
                </button>
              ))}
            </div>
          </div>

          {/* Center Panel - Camera View */}
          <div className="lg:col-span-2 glass rounded-xl border border-border/50 p-6 flex flex-col">
            {/* Current Member Info */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm text-muted-foreground">Now capturing:</span>
                  <Badge variant="outline" className="font-mono text-xs">{currentIndex + 1}/{membersList.length}</Badge>
                </div>
                <h2 className="text-2xl font-bold">{currentMember.name}</h2>
                <p className="text-muted-foreground">{currentMember.id} • {currentMember.group}</p>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="icon"
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex(currentIndex - 1)}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  disabled={currentIndex === membersList.length - 1}
                  onClick={() => setCurrentIndex(currentIndex + 1)}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Camera/Photo View */}
            <div className="flex-1 relative bg-card rounded-xl overflow-hidden border border-border/50 mb-6 min-h-[300px]">
              {cameraActive ? (
                capturedPhoto ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <img 
                        src={capturedPhoto} 
                        alt="Captured" 
                        className="max-w-full max-h-full object-contain rounded-lg"
                      />
                      <div className="absolute inset-0 border-4 border-success rounded-lg animate-pulse" />
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 rounded-full border-4 border-dashed border-primary/50 flex items-center justify-center mx-auto mb-4">
                        <Video className="w-12 h-12 text-primary/50" />
                      </div>
                      <p className="text-muted-foreground">Camera feed will appear here</p>
                      <p className="text-sm text-muted-foreground/70">Position subject in frame</p>
                    </div>
                  </div>
                )
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
                  <div className="text-center">
                    <VideoOff className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Camera is off</p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => setCameraActive(true)}
                    >
                      Turn On Camera
                    </Button>
                  </div>
                </div>
              )}

              {/* Camera toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4"
                onClick={() => setCameraActive(!cameraActive)}
              >
                {cameraActive ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
              </Button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              {capturedPhoto ? (
                <>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={handleRetake}
                  >
                    <RotateCcw className="w-5 h-5 mr-2" />
                    Retake
                  </Button>
                  <Button 
                    size="lg" 
                    className="glow-primary min-w-[200px]"
                    onClick={handleConfirm}
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Confirm & Generate Card
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={handleSkip}
                  >
                    <SkipForward className="w-5 h-5 mr-2" />
                    Skip
                  </Button>
                  <Button 
                    size="lg" 
                    className="glow-primary min-w-[200px]"
                    disabled={!cameraActive}
                    onClick={handleCapture}
                  >
                    <Camera className="w-5 h-5 mr-2" />
                    Capture Photo
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
