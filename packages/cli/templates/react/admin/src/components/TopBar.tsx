import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './TopBar.css';

interface TopBarProps {
  title: string;
  onMenuClick: () => void;
}

export function TopBar({ title, onMenuClick }: TopBarProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <header className="topbar" role="banner">
      <div className="topbar-left">
        <button
          className="topbar-menu-btn"
          onClick={onMenuClick}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <h1 className="topbar-title">{title}</h1>
      </div>

      <div className="topbar-right">
        <button
          className="topbar-icon-btn"
          aria-label="Notifications"
          title="Notifications"
        >
          🔔
          <span className="topbar-badge">3</span>
        </button>

        <div className="topbar-user">
          <button
            className="topbar-user-btn"
            onClick={() => setShowUserMenu(!showUserMenu)}
            aria-label="User menu"
            aria-expanded={showUserMenu}
          >
            <div className="topbar-user-avatar">
              {user?.name.charAt(0).toUpperCase()}
            </div>
            <span className="topbar-user-name">{user?.name}</span>
            <span className="topbar-user-arrow">▼</span>
          </button>

          {showUserMenu && (
            <div className="topbar-user-menu" role="menu">
              <div className="topbar-user-menu-item" role="menuitem">
                <strong>{user?.name}</strong>
                <div className="topbar-user-email">{user?.email}</div>
              </div>
              <hr className="topbar-user-divider" />
              <button
                className="topbar-user-menu-item"
                onClick={() => {
                  setShowUserMenu(false);
                  // Navigate to profile (not implemented)
                }}
                role="menuitem"
              >
                프로필 설정
              </button>
              <button
                className="topbar-user-menu-item"
                onClick={handleLogout}
                role="menuitem"
              >
                로그아웃
              </button>
            </div>
          )}
        </div>
      </div>

      {showUserMenu && (
        <div
          className="topbar-overlay"
          onClick={() => setShowUserMenu(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
