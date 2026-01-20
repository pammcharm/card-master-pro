import { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { RecentActivity } from '@/components/dashboard/RecentActivity';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { OrganizationsList } from '@/components/dashboard/OrganizationsList';
import { 
  Building2, 
  Users, 
  CreditCard, 
  Camera,
  TrendingUp 
} from 'lucide-react';

const pageConfig = {
  dashboard: { title: 'Dashboard', subtitle: 'Welcome back! Here\'s your overview.' },
  organizations: { title: 'Organizations', subtitle: 'Manage schools, companies and more.' },
  members: { title: 'Members', subtitle: 'View and manage all registered members.' },
  capture: { title: 'Photo Capture', subtitle: 'Start capturing photos for ID cards.' },
  cards: { title: 'Cards', subtitle: 'View all generated cards.' },
  templates: { title: 'Template Editor', subtitle: 'Design and customize card templates.' },
  print: { title: 'Print Queue', subtitle: 'Manage print jobs and exports.' },
  settings: { title: 'Settings', subtitle: 'Configure system preferences.' },
};

const Index = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleAction = (actionId: string) => {
    if (actionId === 'capture') {
      setCurrentPage('capture');
    } else if (actionId === 'add-org') {
      setCurrentPage('organizations');
    } else if (actionId === 'print') {
      setCurrentPage('print');
    }
  };

  const config = pageConfig[currentPage as keyof typeof pageConfig] || pageConfig.dashboard;

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header title={config.title} subtitle={config.subtitle} />
        
        <div className="flex-1 overflow-auto p-6">
          {currentPage === 'dashboard' ? (
            <div className="space-y-6 max-w-7xl">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatsCard
                  title="Total Organizations"
                  value={12}
                  subtitle="3 schools, 9 companies"
                  icon={Building2}
                  variant="default"
                />
                <StatsCard
                  title="Total Members"
                  value="1,470"
                  icon={Users}
                  trend={{ value: 12, isPositive: true }}
                  variant="primary"
                />
                <StatsCard
                  title="Cards Generated"
                  value="1,307"
                  subtitle="89% completion rate"
                  icon={CreditCard}
                  variant="success"
                />
                <StatsCard
                  title="Pending Capture"
                  value={163}
                  subtitle="Awaiting photos"
                  icon={Camera}
                  variant="warning"
                />
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <RecentActivity />
                </div>
                <div className="space-y-6">
                  <QuickActions onAction={handleAction} />
                  <OrganizationsList />
                </div>
              </div>

              {/* Progress Banner */}
              <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-xl border border-primary/20 p-6 animate-fade-in">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                      <TrendingUp className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        Great Progress Today!
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        You've generated 47 cards so far. Keep it up!
                      </p>
                    </div>
                  </div>
                  <button className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-glow">
                    Continue Session
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {config.title}
                </h3>
                <p className="text-muted-foreground max-w-md">
                  This section is coming next. The dashboard shows the core SAGS experience.
                </p>
                <button 
                  onClick={() => setCurrentPage('dashboard')}
                  className="mt-4 px-4 py-2 text-sm text-primary hover:underline"
                >
                  ← Back to Dashboard
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;