import { useState, ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
  title: string;
}

export function Layout({ children, title }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="layout-main">
        <TopBar title={title} onMenuClick={() => setSidebarOpen(true)} />
        <main className="layout-content" role="main">
          {children}
        </main>
      </div>
    </div>
  );
}
