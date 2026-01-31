import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { 
  Plus, 
  Layout,
  Type,
  Image,
  QrCode,
  Barcode,
  Square,
  Circle,
  Move,
  ZoomIn,
  ZoomOut,
  Undo,
  Redo,
  Save,
  Eye,
  Trash2,
  Copy,
  Layers
} from 'lucide-react';
import { cn } from '@/lib/utils';

const templates = [
  { id: 1, name: 'School ID Card', organization: 'Lincoln High School', type: 'school' },
  { id: 2, name: 'Employee Badge', organization: 'TechCorp Industries', type: 'company' },
  { id: 3, name: 'Hospital Staff', organization: 'City General Hospital', type: 'hospital' },
];

const tools = [
  { id: 'select', icon: Move, label: 'Select' },
  { id: 'text', icon: Type, label: 'Text' },
  { id: 'image', icon: Image, label: 'Image' },
  { id: 'qr', icon: QrCode, label: 'QR Code' },
  { id: 'barcode', icon: Barcode, label: 'Barcode' },
  { id: 'rectangle', icon: Square, label: 'Rectangle' },
  { id: 'circle', icon: Circle, label: 'Circle' },
];

export default function Templates() {
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);
  const [activeTool, setActiveTool] = useState('select');
  const [zoom, setZoom] = useState(100);

  return (
    <div className="flex-1 flex flex-col min-h-screen">
      <Header 
        title="Template Editor" 
        subtitle="Design and customize ID card templates for your organizations."
      />
      
      <main className="flex-1 flex overflow-hidden">
        {/* Left Panel - Templates List */}
        <div className="w-64 border-r border-border bg-card/50 p-4 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-sm">Templates</h3>
            <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="flex-1 space-y-2 overflow-auto">
            {templates.map((template) => (
              <button
                key={template.id}
                onClick={() => setSelectedTemplate(template)}
                className={cn(
                  "w-full p-3 rounded-lg text-left transition-all",
                  selectedTemplate.id === template.id
                    ? "bg-primary/10 border border-primary/30"
                    : "hover:bg-card border border-transparent"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-6 rounded bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                    <Layout className="w-3 h-3 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{template.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{template.organization}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Center - Canvas */}
        <div className="flex-1 flex flex-col bg-muted/30">
          {/* Toolbar */}
          <div className="h-14 border-b border-border bg-card/80 backdrop-blur-sm px-4 flex items-center justify-between">
            <div className="flex items-center gap-1">
              {tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Button
                    key={tool.id}
                    size="sm"
                    variant={activeTool === tool.id ? 'secondary' : 'ghost'}
                    className="h-9"
                    onClick={() => setActiveTool(tool.id)}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="ml-2 hidden md:inline">{tool.label}</span>
                  </Button>
                );
              })}
            </div>
            
            <div className="flex items-center gap-2">
              <Button size="sm" variant="ghost">
                <Undo className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost">
                <Redo className="w-4 h-4" />
              </Button>
              <div className="w-px h-6 bg-border mx-2" />
              <Button size="sm" variant="ghost" onClick={() => setZoom(Math.max(50, zoom - 10))}>
                <ZoomOut className="w-4 h-4" />
              </Button>
              <span className="text-sm w-12 text-center">{zoom}%</span>
              <Button size="sm" variant="ghost" onClick={() => setZoom(Math.min(200, zoom + 10))}>
                <ZoomIn className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline">
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
              <Button size="sm" className="glow-primary">
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </div>

          {/* Canvas Area */}
          <div className="flex-1 overflow-auto p-8 flex items-center justify-center">
            <div 
              className="bg-card border border-border rounded-lg shadow-lg relative"
              style={{ 
                width: `${3.375 * zoom}px`, 
                height: `${2.125 * zoom}px`,
                transform: `scale(${zoom / 100})`,
                transformOrigin: 'center center'
              }}
            >
              {/* Template content placeholder */}
              <div className="absolute inset-0 p-4">
                {/* Photo area */}
                <div className="absolute left-4 top-4 w-16 h-20 border-2 border-dashed border-primary/50 rounded-lg flex items-center justify-center">
                  <Image className="w-6 h-6 text-primary/40" />
                </div>
                
                {/* Text fields */}
                <div className="absolute left-24 top-4 right-4 space-y-2">
                  <div className="h-4 bg-foreground/10 rounded w-3/4" />
                  <div className="h-3 bg-foreground/5 rounded w-1/2" />
                  <div className="h-3 bg-foreground/5 rounded w-2/3" />
                </div>
                
                {/* Barcode area */}
                <div className="absolute bottom-4 left-4 right-16 h-8 border-2 border-dashed border-muted-foreground/30 rounded flex items-center justify-center">
                  <Barcode className="w-4 h-4 text-muted-foreground/40" />
                </div>
                
                {/* QR area */}
                <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-dashed border-muted-foreground/30 rounded flex items-center justify-center">
                  <QrCode className="w-4 h-4 text-muted-foreground/40" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Properties */}
        <div className="w-72 border-l border-border bg-card/50 p-4">
          <h3 className="font-semibold text-sm mb-4">Properties</h3>
          
          <div className="space-y-4">
            <div className="glass-light rounded-lg p-4">
              <h4 className="text-xs font-medium text-muted-foreground mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                LAYERS
              </h4>
              <div className="space-y-2">
                {['Photo', 'Name', 'ID Number', 'Department', 'Barcode', 'QR Code'].map((layer, i) => (
                  <div 
                    key={layer}
                    className="flex items-center gap-2 p-2 rounded hover:bg-card/50 cursor-pointer group"
                  >
                    <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center text-xs">
                      {i + 1}
                    </div>
                    <span className="flex-1 text-sm">{layer}</span>
                    <Button size="icon" variant="ghost" className="h-6 w-6 opacity-0 group-hover:opacity-100">
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-light rounded-lg p-4">
              <h4 className="text-xs font-medium text-muted-foreground mb-3">CARD SIZE</h4>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs text-muted-foreground">Width</label>
                  <div className="text-sm font-medium">3.375 in</div>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground">Height</label>
                  <div className="text-sm font-medium">2.125 in</div>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" className="flex-1" size="sm">
                <Copy className="w-4 h-4 mr-2" />
                Duplicate
              </Button>
              <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
