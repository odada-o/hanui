import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button, Card } from '@hanui/react';
import Breadcrumb from '../components/Breadcrumb';
import noticesData from '../mock/notices.json';
import { Notice } from '../types';
import './NoticeDetailPage.css';

export default function NoticeDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const notices = noticesData as Notice[];
  const currentNotice = notices.find((n) => n.id === Number(id));
  const currentIndex = notices.findIndex((n) => n.id === Number(id));

  const prevNotice = currentIndex > 0 ? notices[currentIndex - 1] : null;
  const nextNotice =
    currentIndex < notices.length - 1 ? notices[currentIndex + 1] : null;

  if (!currentNotice) {
    return (
      <div className="notice-detail-page">
        <Breadcrumb
          items={[
            { label: '홈', path: '/' },
            { label: '공지사항', path: '/notice' },
            { label: '상세' },
          ]}
        />
        <div className="page-container">
          <Card className="error-card">
            <h2>공지사항을 찾을 수 없습니다</h2>
            <p>요청하신 공지사항이 존재하지 않거나 삭제되었습니다.</p>
            <Link to="/notice">
              <Button variant="primary">목록으로 돌아가기</Button>
            </Link>
          </Card>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: '홈', path: '/' },
    { label: '공지사항', path: '/notice' },
    { label: currentNotice.title },
  ];

  return (
    <div className="notice-detail-page">
      <Breadcrumb items={breadcrumbItems} />

      <div className="page-container">
        {/* Notice Detail Card */}
        <Card className="notice-detail-card">
          <div className="notice-header">
            <h1 className="notice-title">{currentNotice.title}</h1>
            <div className="notice-meta">
              <span className="meta-item">
                <span className="meta-label">등록일</span>
                <span className="meta-value">{currentNotice.date}</span>
              </span>
              <span className="meta-divider">|</span>
              <span className="meta-item">
                <span className="meta-label">조회수</span>
                <span className="meta-value">
                  {currentNotice.views.toLocaleString()}
                </span>
              </span>
            </div>
          </div>

          <div className="notice-content">
            {currentNotice.content.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </Card>

        {/* Navigation Card */}
        <Card className="notice-navigation-card">
          {prevNotice && (
            <Link to={`/notice/${prevNotice.id}`} className="nav-item nav-prev">
              <div className="nav-label">
                <span className="nav-icon">←</span>
                <span>이전 글</span>
              </div>
              <div className="nav-title">{prevNotice.title}</div>
            </Link>
          )}

          {nextNotice && (
            <Link to={`/notice/${nextNotice.id}`} className="nav-item nav-next">
              <div className="nav-label">
                <span>다음 글</span>
                <span className="nav-icon">→</span>
              </div>
              <div className="nav-title">{nextNotice.title}</div>
            </Link>
          )}
        </Card>

        {/* Action Buttons */}
        <div className="action-buttons">
          <Button variant="secondary" onClick={() => navigate(-1)}>
            뒤로가기
          </Button>
          <Link to="/notice">
            <Button variant="primary">목록으로</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
