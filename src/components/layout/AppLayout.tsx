import { ReactNode } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { useNavigate, useLocation } from 'react-router-dom';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  
  const getCurrentPage = () => {
    const path = location.pathname.split('/')[1] || 'dashboard';
    return path;
  };

  const handleNavigate = (page: string) => {
    navigate(`/${page}`);
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar currentPage={getCurrentPage()} onNavigate={handleNavigate} />
      {children}
    </div>
  );
}
