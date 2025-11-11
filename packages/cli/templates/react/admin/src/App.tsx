import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Toast } from '@/components/Toast';
import { Login } from '@/pages/Login';
import { Dashboard } from '@/pages/Dashboard';
import { NoticeList } from '@/pages/NoticeList';
import { NoticeForm } from '@/pages/NoticeForm';
import { UserManagement } from '@/pages/UserManagement';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
}

function App() {
  return (
    <>
      <Toast />
      <Routes>
        {/* Public routes */}
        <Route path="/admin/login" element={<Login />} />

        {/* Protected routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/notice"
          element={
            <ProtectedRoute>
              <NoticeList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/notice/new"
          element={
            <ProtectedRoute>
              <NoticeForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/notice/:id/edit"
          element={
            <ProtectedRoute>
              <NoticeForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute>
              <UserManagement />
            </ProtectedRoute>
          }
        />

        {/* Redirects */}
        <Route
          path="/admin"
          element={<Navigate to="/admin/dashboard" replace />}
        />
        <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
      </Routes>
    </>
  );
}

export default App;
