import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 他のルート（例: 投稿一覧など）もここに追加 */}
      </Routes>
    </Router>
  );
}

export default App;
