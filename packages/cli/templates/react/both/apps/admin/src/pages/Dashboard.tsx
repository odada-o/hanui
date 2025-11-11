import { Card } from '@hanui/react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Layout } from '@/components/Layout';
import statsData from '@/mock/stats.json';
import './Dashboard.css';

export function Dashboard() {
  const { summary, monthlyStats, recentActivities } = statsData;

  const summaryCards = [
    {
      title: '총 공지사항',
      value: summary.totalNotices,
      icon: '📢',
      color: '#3b82f6',
    },
    {
      title: '총 사용자',
      value: summary.totalUsers,
      icon: '👥',
      color: '#10b981',
    },
    {
      title: '오늘 민원',
      value: summary.todayInquiries,
      icon: '📝',
      color: '#f59e0b',
    },
    {
      title: '활성 사용자',
      value: summary.activeUsers,
      icon: '✅',
      color: '#8b5cf6',
    },
  ];

  return (
    <Layout title="대시보드">
      <div className="dashboard">
        {/* Summary Cards */}
        <div className="dashboard-cards">
          {summaryCards.map((card) => (
            <Card key={card.title} className="dashboard-card">
              <div
                className="dashboard-card-icon"
                style={{ background: card.color }}
                aria-hidden="true"
              >
                {card.icon}
              </div>
              <div className="dashboard-card-content">
                <div className="dashboard-card-title">{card.title}</div>
                <div className="dashboard-card-value">{card.value}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Chart */}
        <Card className="dashboard-chart">
          <h2 className="dashboard-section-title">월별 통계</h2>
          <div className="dashboard-chart-wrapper">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="users" fill="#3b82f6" name="사용자" />
                <Bar dataKey="notices" fill="#10b981" name="공지사항" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Recent Activities */}
        <Card className="dashboard-activities">
          <h2 className="dashboard-section-title">최근 활동</h2>
          <div className="dashboard-activities-list">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="dashboard-activity">
                <div className="dashboard-activity-info">
                  <strong>{activity.user}</strong>
                  <span className="dashboard-activity-action">
                    {activity.action}
                  </span>
                  <span className="dashboard-activity-target">
                    "{activity.target}"
                  </span>
                </div>
                <time className="dashboard-activity-time">
                  {new Date(activity.timestamp).toLocaleString('ko-KR', {
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </time>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Layout>
  );
}
