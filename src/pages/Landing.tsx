import { Link } from 'react-router-dom';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { 
  Camera, 
  CreditCard, 
  Building2, 
  Printer, 
  Zap, 
  Shield, 
  Users,
  ArrowRight,
  Check,
  Sparkles,
  Palette,
  FileSpreadsheet
} from 'lucide-react';

const features = [
  {
    icon: Building2,
    title: 'Multi-Organization',
    description: 'Manage schools, companies, hospitals, and any organization that needs ID cards.',
  },
  {
    icon: Camera,
    title: 'Smart Photo Capture',
    description: 'Sequential capture with auto-matching. Take photos in order, system matches automatically.',
  },
  {
    icon: Palette,
    title: 'Template Editor',
    description: 'Drag-and-drop editor to design any card. Add photos, text, QR codes, logos, and more.',
  },
  {
    icon: Zap,
    title: 'Instant Generation',
    description: 'Cards generate automatically after photo capture. No manual work required.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Bulk Import',
    description: 'Import members from Excel or CSV files. Automatic data mapping and validation.',
  },
  {
    icon: Printer,
    title: 'Print Ready',
    description: 'Export as PNG, JPG, or PDF. Supports batch printing and card printer layouts.',
  },
];

const stats = [
  { value: '50K+', label: 'Cards Generated' },
  { value: '500+', label: 'Organizations' },
  { value: '99.9%', label: 'Uptime' },
  { value: '<1s', label: 'Generation Time' },
];

export default function Landing() {
  return (
    <div className="min-h-screen hero-bg hero-pattern">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo size="sm" />
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard">Login</Link>
            </Button>
            <Button size="sm" className="glow-primary" asChild>
              <Link to="/dashboard">
                Get Started
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm">
                <Sparkles className="w-4 h-4" />
                Smart Automatic Generation System
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-display">
                Generate <span className="text-gradient-hero">ID Cards</span> in Seconds
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl">
                The complete solution for schools, companies, and organizations. 
                Capture photos, design templates, and generate professional ID cards automatically.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="glow-primary text-lg h-14 px-8" asChild>
                  <Link to="/dashboard">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg h-14 px-8">
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[...Array(4)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/60 to-primary/30 border-2 border-background flex items-center justify-center text-xs font-medium"
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="text-foreground font-semibold">500+ organizations</span>
                  <span className="text-muted-foreground"> trust SAGS</span>
                </div>
              </div>
            </div>

            {/* Hero Card Visual */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent blur-3xl" />
              
              {/* Main ID Card */}
              <div className="relative glass-light rounded-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500 animate-float">
                <div className="bg-gradient-to-br from-card to-card/80 rounded-xl p-6 border border-border/50 shadow-glow">
                  <div className="flex gap-4">
                    <div className="w-24 h-28 rounded-lg bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                      <Users className="w-10 h-10 text-primary/60" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-foreground/20 rounded w-3/4" />
                      <div className="h-3 bg-foreground/10 rounded w-1/2" />
                      <div className="h-3 bg-foreground/10 rounded w-2/3" />
                      <div className="mt-4 px-2 py-1 rounded bg-primary/20 text-primary text-xs inline-block">
                        STUDENT
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="flex gap-1">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="w-1 h-6 bg-foreground/30 rounded" 
                          style={{ height: `${14 + Math.random() * 12}px` }} 
                        />
                      ))}
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-foreground/10 grid grid-cols-4 gap-[2px] p-1">
                      {[...Array(16)].map((_, i) => (
                        <div key={i} className={`rounded-[1px] ${Math.random() > 0.5 ? 'bg-foreground/40' : 'bg-transparent'}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary cards */}
              <div className="absolute -bottom-8 -left-8 glass-light rounded-xl p-4 transform -rotate-6 opacity-80">
                <div className="w-32 h-20 rounded-lg bg-gradient-to-br from-success/20 to-success/5 flex items-center justify-center">
                  <Check className="w-8 h-8 text-success" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 glass-light rounded-xl p-4 transform rotate-12 opacity-80">
                <div className="w-28 h-18 rounded-lg bg-gradient-to-br from-warning/20 to-warning/5 flex items-center justify-center">
                  <CreditCard className="w-8 h-8 text-warning" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 border-y border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
              Everything You Need
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From photo capture to print-ready cards, SAGS handles the entire workflow automatically.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={feature.title}
                  className="group glass-light rounded-2xl p-8 card-hover border border-border/30 hover:border-primary/30"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-light rounded-3xl p-12 border border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <div className="relative z-10">
              <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4 font-display">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
                Join hundreds of organizations using SAGS to streamline their ID card creation process.
              </p>
              <Button size="lg" className="glow-primary text-lg h-14 px-10" asChild>
                <Link to="/dashboard">
                  Start Free Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <Logo size="sm" />
          <p className="text-muted-foreground text-sm">
            © 2024 SAGS. Smart Automatic Generation System. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
