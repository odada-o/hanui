import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Table, Pagination, Select, Modal } from '@hanui/react';
import { Layout } from '@/components/Layout';
import { useToast } from '@/contexts/ToastContext';
import { Notice } from '@/types';
import noticesData from '@/mock/notices.json';
import './NoticeList.css';

export function NoticeList() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [notices, setNotices] = useState<Notice[]>(noticesData);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'createdAt' | 'views'>('createdAt');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [noticeToDelete, setNoticeToDelete] = useState<number | null>(null);

  const itemsPerPage = 10;

  // Filter and sort notices
  const filteredNotices = useMemo(() => {
    let filtered = [...notices];

    // Apply status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter((notice) => notice.status === statusFilter);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      const aValue =
        sortBy === 'createdAt' ? new Date(a.createdAt).getTime() : a.views;
      const bValue =
        sortBy === 'createdAt' ? new Date(b.createdAt).getTime() : b.views;
      return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
    });

    return filtered;
  }, [notices, statusFilter, sortBy, sortOrder]);

  // Paginate
  const paginatedNotices = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredNotices.slice(start, end);
  }, [filteredNotices, currentPage]);

  const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);

  const handleSelectAll = () => {
    if (selectedIds.length === paginatedNotices.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(paginatedNotices.map((n) => n.id));
    }
  };

  const handleSelectOne = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleEdit = (id: number) => {
    navigate(`/admin/notice/${id}/edit`);
  };

  const handleDeleteClick = (id: number) => {
    setNoticeToDelete(id);
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (noticeToDelete) {
      setNotices((prev) => prev.filter((n) => n.id !== noticeToDelete));
      showToast('공지사항이 삭제되었습니다', 'success');
      setDeleteModalOpen(false);
      setNoticeToDelete(null);
    }
  };

  const handleBulkDelete = () => {
    if (selectedIds.length === 0) {
      showToast('삭제할 항목을 선택해주세요', 'warning');
      return;
    }
    setNotices((prev) => prev.filter((n) => !selectedIds.includes(n.id)));
    showToast(`${selectedIds.length}개 항목이 삭제되었습니다`, 'success');
    setSelectedIds([]);
  };

  const columns = [
    {
      key: 'select',
      label: (
        <input
          type="checkbox"
          checked={
            paginatedNotices.length > 0 &&
            selectedIds.length === paginatedNotices.length
          }
          onChange={handleSelectAll}
          aria-label="Select all"
        />
      ),
      render: (notice: Notice) => (
        <input
          type="checkbox"
          checked={selectedIds.includes(notice.id)}
          onChange={() => handleSelectOne(notice.id)}
          aria-label={`Select ${notice.title}`}
        />
      ),
    },
    {
      key: 'id',
      label: 'ID',
      render: (notice: Notice) => notice.id,
    },
    {
      key: 'title',
      label: '제목',
      render: (notice: Notice) => (
        <div className="notice-title-cell">
          <div className="notice-title">{notice.title}</div>
          <div className="notice-meta">
            {notice.author} ·{' '}
            {new Date(notice.createdAt).toLocaleDateString('ko-KR')}
          </div>
        </div>
      ),
    },
    {
      key: 'status',
      label: '상태',
      render: (notice: Notice) => (
        <span className={`notice-status notice-status-${notice.status}`}>
          {notice.status === 'published' && '발행됨'}
          {notice.status === 'draft' && '초안'}
          {notice.status === 'archived' && '보관됨'}
        </span>
      ),
    },
    {
      key: 'views',
      label: '조회수',
      render: (notice: Notice) => notice.views.toLocaleString(),
    },
    {
      key: 'actions',
      label: '작업',
      render: (notice: Notice) => (
        <div className="notice-actions">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => handleEdit(notice.id)}
          >
            수정
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => handleDeleteClick(notice.id)}
          >
            삭제
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Layout title="공지사항 관리">
      <div className="notice-list">
        <div className="notice-list-header">
          <div className="notice-list-filters">
            <Select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              aria-label="Filter by status"
            >
              <option value="all">전체</option>
              <option value="published">발행됨</option>
              <option value="draft">초안</option>
              <option value="archived">보관됨</option>
            </Select>

            <Select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as 'createdAt' | 'views')
              }
              aria-label="Sort by"
            >
              <option value="createdAt">생성일</option>
              <option value="views">조회수</option>
            </Select>

            <Select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
              aria-label="Sort order"
            >
              <option value="desc">내림차순</option>
              <option value="asc">오름차순</option>
            </Select>
          </div>

          <div className="notice-list-actions">
            {selectedIds.length > 0 && (
              <Button variant="secondary" onClick={handleBulkDelete}>
                선택 삭제 ({selectedIds.length})
              </Button>
            )}
            <Button
              variant="primary"
              onClick={() => navigate('/admin/notice/new')}
            >
              새 공지사항
            </Button>
          </div>
        </div>

        <Table data={paginatedNotices} columns={columns} keyField="id" />

        {totalPages > 1 && (
          <div className="notice-list-pagination">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}

        <Modal
          isOpen={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          title="공지사항 삭제"
        >
          <div className="delete-modal-content">
            <p>이 공지사항을 정말 삭제하시겠습니까?</p>
            <p>이 작업은 되돌릴 수 없습니다.</p>
            <div className="delete-modal-actions">
              <Button
                variant="secondary"
                onClick={() => setDeleteModalOpen(false)}
              >
                취소
              </Button>
              <Button variant="primary" onClick={handleDeleteConfirm}>
                삭제
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </Layout>
  );
}
