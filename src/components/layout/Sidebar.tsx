import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/Logo';
import { 
  LayoutDashboard, 
  Building2, 
  Users, 
  Camera, 
  CreditCard, 
  Palette, 
  Printer,
  Settings,
  ChevronLeft,
  ChevronRight,
  Zap
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'organizations', label: 'Organizations', icon: Building2 },
  { id: 'members', label: 'Members', icon: Users },
  { id: 'capture', label: 'Photo Capture', icon: Camera },
  { id: 'cards', label: 'Cards', icon: CreditCard },
  { id: 'templates', label: 'Template Editor', icon: Palette },
  { id: 'print', label: 'Print Queue', icon: Printer },
];

export function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside 
      className={cn(
        "h-screen bg-sidebar border-r border-sidebar-border flex flex-col transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="h-16 flex items-center px-4 border-b border-sidebar-border">
        <Logo size="sm" showText={!collapsed} />
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                "hover:bg-sidebar-accent group",
                isActive 
                  ? "bg-primary/10 text-primary border border-primary/20" 
                  : "text-sidebar-foreground"
              )}
            >
              <Icon className={cn(
                "w-5 h-5 flex-shrink-0 transition-colors",
                isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
              )} />
              {!collapsed && (
                <span className={cn(
                  "text-sm font-medium animate-fade-in",
                  isActive && "text-primary"
                )}>
                  {item.label}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Settings & Collapse */}
      <div className="p-3 border-t border-sidebar-border space-y-1">
        <button
          onClick={() => onNavigate('settings')}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
            "hover:bg-sidebar-accent text-sidebar-foreground group",
            currentPage === 'settings' && "bg-primary/10 text-primary border border-primary/20"
          )}
        >
          <Settings className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
          {!collapsed && <span className="text-sm font-medium">Settings</span>}
        </button>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sidebar-accent text-muted-foreground"
        >
          {collapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <>
              <ChevronLeft className="w-5 h-5" />
              <span className="text-sm">Collapse</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}