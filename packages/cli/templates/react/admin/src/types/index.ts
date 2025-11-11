export interface Notice {
  id: number;
  title: string;
  content: string;
  status: 'published' | 'draft' | 'archived';
  author: string;
  createdAt: string;
  updatedAt: string;
  views: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'user';
  status: 'active' | 'inactive';
  department: string;
  joinedAt: string;
  lastLoginAt: string;
}

export interface Stats {
  summary: {
    totalNotices: number;
    totalUsers: number;
    todayInquiries: number;
    activeUsers: number;
  };
  monthlyStats: Array<{
    month: string;
    users: number;
    notices: number;
  }>;
  recentActivities: Array<{
    id: number;
    user: string;
    action: string;
    target: string;
    timestamp: string;
  }>;
}

export interface AuthUser {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'user';
}

export interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
}
