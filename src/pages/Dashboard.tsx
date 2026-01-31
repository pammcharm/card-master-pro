import { Header } from '@/components/layout/Header';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { RecentActivity } from '@/components/dashboard/RecentActivity';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { OrganizationsList } from '@/components/dashboard/OrganizationsList';
import { Building2, Users, CreditCard, Camera } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="flex-1 flex flex-col min-h-screen">
      <Header 
        title="Dashboard" 
        subtitle="Welcome back! Here's an overview of your card generation system."
      />
      
      <main className="flex-1 p-6 space-y-6 overflow-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            title="Organizations"
            value="12"
            change="+2 this month"
            changeType="positive"
            icon={Building2}
          />
          <StatsCard
            title="Total Members"
            value="2,847"
            change="+156 this week"
            changeType="positive"
            icon={Users}
          />
          <StatsCard
            title="Cards Generated"
            value="2,134"
            change="89% completion"
            changeType="neutral"
            icon={CreditCard}
          />
          <StatsCard
            title="Pending Photos"
            value="713"
            change="25% remaining"
            changeType="warning"
            icon={Camera}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Organizations List */}
          <div className="lg:col-span-2">
            <OrganizationsList />
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <QuickActions />
            <RecentActivity />
          </div>
        </div>
      </main>
    </div>
  );
}
