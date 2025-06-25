import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Api from './pages/Api';
import './App.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/api" element={<Api />} />
      </Routes>
    </Layout>
  );
}

export default App;
