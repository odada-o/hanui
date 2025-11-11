import { useState, useEffect, FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Input, Select, Card } from '@hanui/react';
import { Layout } from '@/components/Layout';
import { useToast } from '@/contexts/ToastContext';
import { Notice } from '@/types';
import noticesData from '@/mock/notices.json';
import './NoticeForm.css';

export function NoticeForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { showToast } = useToast();
  const isEdit = !!id;

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    status: 'draft' as Notice['status'],
    author: '관리자',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isEdit) {
      const notice = noticesData.find((n) => n.id === Number(id));
      if (notice) {
        setFormData({
          title: notice.title,
          content: notice.content,
          status: notice.status,
          author: notice.author,
        });
      } else {
        showToast('공지사항을 찾을 수 없습니다', 'error');
        navigate('/admin/notice');
      }
    }
  }, [id, isEdit, navigate, showToast]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = '제목을 입력해주세요';
    }

    if (!formData.content.trim()) {
      newErrors.content = '내용을 입력해주세요';
    }

    if (formData.title.length > 100) {
      newErrors.title = '제목은 100자 이내로 입력해주세요';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      showToast('입력 내용을 확인해주세요', 'error');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (isEdit) {
      showToast('공지사항이 수정되었습니다', 'success');
    } else {
      showToast('공지사항이 생성되었습니다', 'success');
    }

    setIsSubmitting(false);
    navigate('/admin/notice');
  };

  const handleCancel = () => {
    navigate('/admin/notice');
  };

  return (
    <Layout title={isEdit ? '공지사항 수정' : '공지사항 작성'}>
      <div className="notice-form-container">
        <Card className="notice-form-card">
          <form onSubmit={handleSubmit} className="notice-form">
            <div className="notice-form-field">
              <label htmlFor="title" className="notice-form-label">
                제목 <span className="notice-form-required">*</span>
              </label>
              <Input
                id="title"
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="공지사항 제목을 입력하세요"
                disabled={isSubmitting}
                aria-invalid={!!errors.title}
                aria-describedby={errors.title ? 'title-error' : undefined}
              />
              {errors.title && (
                <span id="title-error" className="notice-form-error">
                  {errors.title}
                </span>
              )}
            </div>

            <div className="notice-form-field">
              <label htmlFor="author" className="notice-form-label">
                작성자
              </label>
              <Input
                id="author"
                type="text"
                value={formData.author}
                onChange={(e) =>
                  setFormData({ ...formData, author: e.target.value })
                }
                disabled={isSubmitting}
              />
            </div>

            <div className="notice-form-field">
              <label htmlFor="status" className="notice-form-label">
                상태 <span className="notice-form-required">*</span>
              </label>
              <Select
                id="status"
                value={formData.status}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    status: e.target.value as Notice['status'],
                  })
                }
                disabled={isSubmitting}
              >
                <option value="draft">초안</option>
                <option value="published">발행됨</option>
                <option value="archived">보관됨</option>
              </Select>
            </div>

            <div className="notice-form-field">
              <label htmlFor="content" className="notice-form-label">
                내용 <span className="notice-form-required">*</span>
              </label>
              <textarea
                id="content"
                className="notice-form-textarea"
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
                placeholder="공지사항 내용을 입력하세요"
                rows={10}
                disabled={isSubmitting}
                aria-invalid={!!errors.content}
                aria-describedby={errors.content ? 'content-error' : undefined}
              />
              {errors.content && (
                <span id="content-error" className="notice-form-error">
                  {errors.content}
                </span>
              )}
            </div>

            <div className="notice-form-actions">
              <Button
                type="button"
                variant="secondary"
                onClick={handleCancel}
                disabled={isSubmitting}
              >
                취소
              </Button>
              <Button type="submit" variant="primary" disabled={isSubmitting}>
                {isSubmitting ? '저장 중...' : isEdit ? '수정하기' : '등록하기'}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </Layout>
  );
}
