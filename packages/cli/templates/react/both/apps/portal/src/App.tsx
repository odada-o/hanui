import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import NoticeListPage from './pages/NoticeListPage';
import NoticeDetailPage from './pages/NoticeDetailPage';
import CivilComplaintPage from './pages/CivilComplaintPage';
import LoginPage from './pages/LoginPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <MainPage />
          </Layout>
        }
      />
      <Route
        path="/notice"
        element={
          <Layout>
            <NoticeListPage />
          </Layout>
        }
      />
      <Route
        path="/notice/:id"
        element={
          <Layout>
            <NoticeDetailPage />
          </Layout>
        }
      />
      <Route
        path="/civil-complaint"
        element={
          <Layout>
            <CivilComplaintPage />
          </Layout>
        }
      />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
