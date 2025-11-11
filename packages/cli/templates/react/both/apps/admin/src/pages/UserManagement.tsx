import { useState, useMemo } from 'react';
import { Button, Table, Pagination, Input, Select } from '@hanui/react';
import { Layout } from '@/components/Layout';
import { useToast } from '@/contexts/ToastContext';
import { User } from '@/types';
import usersData from '@/mock/users.json';
import './UserManagement.css';

export function UserManagement() {
  const { showToast } = useToast();
  const [users, setUsers] = useState<User[]>(usersData);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  // Filter users
  const filteredUsers = useMemo(() => {
    let filtered = [...users];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.department.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter((user) => user.status === statusFilter);
    }

    // Role filter
    if (roleFilter !== 'all') {
      filtered = filtered.filter((user) => user.role === roleFilter);
    }

    return filtered;
  }, [users, searchTerm, statusFilter, roleFilter]);

  // Paginate
  const paginatedUsers = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredUsers.slice(start, end);
  }, [filteredUsers, currentPage]);

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const handleToggleStatus = (userId: number) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId
          ? {
              ...user,
              status: user.status === 'active' ? 'inactive' : 'active',
            }
          : user
      )
    );

    const user = users.find((u) => u.id === userId);
    const newStatus = user?.status === 'active' ? '비활성' : '활성';
    showToast(
      `${user?.name}님의 상태가 ${newStatus}로 변경되었습니다`,
      'success'
    );
  };

  const columns = [
    {
      key: 'id',
      label: 'ID',
      render: (user: User) => user.id,
    },
    {
      key: 'name',
      label: '이름',
      render: (user: User) => (
        <div className="user-info-cell">
          <div className="user-name">{user.name}</div>
          <div className="user-email">{user.email}</div>
        </div>
      ),
    },
    {
      key: 'department',
      label: '부서',
      render: (user: User) => user.department,
    },
    {
      key: 'role',
      label: '역할',
      render: (user: User) => (
        <span className={`user-role user-role-${user.role}`}>
          {user.role === 'admin' && '관리자'}
          {user.role === 'manager' && '매니저'}
          {user.role === 'user' && '사용자'}
        </span>
      ),
    },
    {
      key: 'status',
      label: '상태',
      render: (user: User) => (
        <span className={`user-status user-status-${user.status}`}>
          {user.status === 'active' ? '활성' : '비활성'}
        </span>
      ),
    },
    {
      key: 'lastLogin',
      label: '마지막 로그인',
      render: (user: User) =>
        new Date(user.lastLoginAt).toLocaleDateString('ko-KR'),
    },
    {
      key: 'actions',
      label: '작업',
      render: (user: User) => (
        <div className="user-actions">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => handleToggleStatus(user.id)}
          >
            {user.status === 'active' ? '비활성화' : '활성화'}
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Layout title="사용자 관리">
      <div className="user-management">
        <div className="user-management-header">
          <div className="user-management-search">
            <Input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="이름, 이메일, 부서 검색..."
              aria-label="Search users"
            />
          </div>

          <div className="user-management-filters">
            <Select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              aria-label="Filter by status"
            >
              <option value="all">전체 상태</option>
              <option value="active">활성</option>
              <option value="inactive">비활성</option>
            </Select>

            <Select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              aria-label="Filter by role"
            >
              <option value="all">전체 역할</option>
              <option value="admin">관리자</option>
              <option value="manager">매니저</option>
              <option value="user">사용자</option>
            </Select>
          </div>
        </div>

        <div className="user-management-stats">
          <div className="user-stat">
            <span className="user-stat-label">전체 사용자</span>
            <span className="user-stat-value">{users.length}</span>
          </div>
          <div className="user-stat">
            <span className="user-stat-label">활성 사용자</span>
            <span className="user-stat-value">
              {users.filter((u) => u.status === 'active').length}
            </span>
          </div>
          <div className="user-stat">
            <span className="user-stat-label">비활성 사용자</span>
            <span className="user-stat-value">
              {users.filter((u) => u.status === 'inactive').length}
            </span>
          </div>
        </div>

        <Table data={paginatedUsers} columns={columns} keyField="id" />

        {totalPages > 1 && (
          <div className="user-management-pagination">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </Layout>
  );
}
