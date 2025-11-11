import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/contexts/ToastContext';
import { Button, Input, Card } from '@hanui/react';
import './Login.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      showToast('이메일과 비밀번호를 입력해주세요', 'error');
      return;
    }

    setIsLoading(true);
    try {
      await login(email, password);
      showToast('로그인 성공!', 'success');
      navigate('/admin/dashboard');
    } catch (error) {
      showToast('로그인 실패: 비밀번호를 확인해주세요', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <Card className="login-card">
          <div className="login-header">
            <h1>HANUI Admin</h1>
            <p>관리자 로그인</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="login-field">
              <label htmlFor="email" className="login-label">
                이메일
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                disabled={isLoading}
                autoComplete="email"
              />
            </div>

            <div className="login-field">
              <label htmlFor="password" className="login-label">
                비밀번호
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력하세요"
                disabled={isLoading}
                autoComplete="current-password"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              fullWidth
              disabled={isLoading}
            >
              {isLoading ? '로그인 중...' : '로그인'}
            </Button>

            <div className="login-hint">
              <p>데모 계정: 아무 이메일 / 비밀번호: admin123</p>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
