import { NavLink } from 'react-router-dom';
import './Sidebar.css';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const menuItems = [
    {
      title: '대시보드',
      items: [{ label: '홈', path: '/admin/dashboard', icon: '📊' }],
    },
    {
      title: '콘텐츠 관리',
      items: [
        { label: '공지사항', path: '/admin/notice', icon: '📢' },
        { label: '공지사항 작성', path: '/admin/notice/new', icon: '✍️' },
      ],
    },
    {
      title: '사용자 관리',
      items: [{ label: '사용자 목록', path: '/admin/users', icon: '👥' }],
    },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div className="sidebar-overlay" onClick={onClose} aria-hidden="true" />
      )}

      <aside
        className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="sidebar-header">
          <h1 className="sidebar-logo">HANUI Admin</h1>
          <button
            className="sidebar-close"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            ✕
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((section) => (
            <div key={section.title} className="sidebar-section">
              <h2 className="sidebar-section-title">{section.title}</h2>
              <ul className="sidebar-menu">
                {section.items.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `sidebar-link ${isActive ? 'sidebar-link-active' : ''}`
                      }
                      onClick={onClose}
                    >
                      <span className="sidebar-icon" aria-hidden="true">
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
