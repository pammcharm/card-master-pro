import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User, 
  Building2, 
  Printer, 
  Camera, 
  Bell,
  Shield,
  Palette,
  Database,
  Save
} from 'lucide-react';

export default function Settings() {
  return (
    <div className="flex-1 flex flex-col min-h-screen">
      <Header 
        title="Settings" 
        subtitle="Configure your SAGS preferences and system options."
      />
      
      <main className="flex-1 p-6 overflow-auto">
        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="bg-card border border-border">
            <TabsTrigger value="general" className="data-[state=active]:bg-primary/10">
              <User className="w-4 h-4 mr-2" />
              General
            </TabsTrigger>
            <TabsTrigger value="organization" className="data-[state=active]:bg-primary/10">
              <Building2 className="w-4 h-4 mr-2" />
              Organization
            </TabsTrigger>
            <TabsTrigger value="capture" className="data-[state=active]:bg-primary/10">
              <Camera className="w-4 h-4 mr-2" />
              Capture
            </TabsTrigger>
            <TabsTrigger value="printing" className="data-[state=active]:bg-primary/10">
              <Printer className="w-4 h-4 mr-2" />
              Printing
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-6">
            <div className="glass rounded-xl border border-border/50 p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                User Profile
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="Admin User" className="bg-card border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="admin@sags.com" className="bg-card border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Select defaultValue="admin">
                    <SelectTrigger className="bg-card border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Administrator</SelectItem>
                      <SelectItem value="operator">Operator</SelectItem>
                      <SelectItem value="viewer">Viewer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl border border-border/50 p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Palette className="w-5 h-5 text-primary" />
                Appearance
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Dark Mode</Label>
                    <p className="text-sm text-muted-foreground">Use dark theme across the application</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Animations</Label>
                    <p className="text-sm text-muted-foreground">Enable interface animations</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>

            <div className="glass rounded-xl border border-border/50 p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                Notifications
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Card Generation Alerts</Label>
                    <p className="text-sm text-muted-foreground">Notify when cards are generated</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Print Completion</Label>
                    <p className="text-sm text-muted-foreground">Notify when print jobs complete</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="organization" className="space-y-6">
            <div className="glass rounded-xl border border-border/50 p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                Default Organization Settings
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Default Card Size</Label>
                  <Select defaultValue="cr80">
                    <SelectTrigger className="bg-card border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cr80">CR-80 (Standard ID)</SelectItem>
                      <SelectItem value="cr79">CR-79 (Adhesive)</SelectItem>
                      <SelectItem value="custom">Custom Size</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Default Orientation</Label>
                  <Select defaultValue="landscape">
                    <SelectTrigger className="bg-card border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="landscape">Landscape</SelectItem>
                      <SelectItem value="portrait">Portrait</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl border border-border/50 p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-primary" />
                Data Management
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Auto-backup</Label>
                    <p className="text-sm text-muted-foreground">Automatically backup data daily</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Data Retention</Label>
                    <p className="text-sm text-muted-foreground">Keep generated cards for 1 year</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="capture" className="space-y-6">
            <div className="glass rounded-xl border border-border/50 p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Camera className="w-5 h-5 text-primary" />
                Camera Settings
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Default Camera</Label>
                  <Select defaultValue="webcam">
                    <SelectTrigger className="bg-card border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="webcam">Built-in Webcam</SelectItem>
                      <SelectItem value="usb">USB Camera</SelectItem>
                      <SelectItem value="ip">IP Camera</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Photo Quality</Label>
                  <Select defaultValue="high">
                    <SelectTrigger className="bg-card border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low (Fast)</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High (Recommended)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Auto Face Detection</Label>
                    <p className="text-sm text-muted-foreground">Automatically detect and center faces</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Auto Generate Card</Label>
                    <p className="text-sm text-muted-foreground">Generate card immediately after capture</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="printing" className="space-y-6">
            <div className="glass rounded-xl border border-border/50 p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Printer className="w-5 h-5 text-primary" />
                Print Settings
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Default Printer</Label>
                  <Select defaultValue="system">
                    <SelectTrigger className="bg-card border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="system">System Default</SelectItem>
                      <SelectItem value="card">Card Printer</SelectItem>
                      <SelectItem value="pdf">PDF Output</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Cards Per Page (PDF)</Label>
                  <Select defaultValue="8">
                    <SelectTrigger className="bg-card border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="4">4 Cards</SelectItem>
                      <SelectItem value="6">6 Cards</SelectItem>
                      <SelectItem value="8">8 Cards</SelectItem>
                      <SelectItem value="10">10 Cards</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Print Both Sides</Label>
                    <p className="text-sm text-muted-foreground">Enable duplex printing for front/back cards</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Add Cut Marks</Label>
                    <p className="text-sm text-muted-foreground">Include cut marks on PDF exports</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end mt-6">
          <Button className="glow-primary">
            <Save className="w-4 h-4 mr-2" />
            Save All Settings
          </Button>
        </div>
      </main>
    </div>
  );
}
