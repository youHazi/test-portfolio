import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.js';
import Projects from './pages/Projects.js';
import Contact from './pages/Contact.js';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      {/* BrowserRouter와 Routes 설정 */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      {/* 메인 화면 레이아웃 */}
      <div className="min-h-screen bg-gray-900">
        {/* 상단 네비게이션 바 */}
        <div className="fixed top-0 left-0 w-full bg-black border-b border-gray-800 z-10">
          <nav className="container mx-auto flex justify-center space-x-6 py-4">
            <button 
              onClick={() => setCurrentPage('home')} 
              className={`text-white hover:text-custom-blue ${currentPage === 'home' ? 'font-bold' : ''}`}
            >
              홈
            </button>
            <button 
              onClick={() => setCurrentPage('projects')} 
              className={`text-white hover:text-custom-blue ${currentPage === 'projects' ? 'font-bold' : ''}`}
            >
              프로젝트
            </button>
            <button 
              onClick={() => setCurrentPage('contact')} 
              className={`text-white hover:text-custom-blue ${currentPage === 'contact' ? 'font-bold' : ''}`}
            >
              연락
            </button>
          </nav>
        </div>
        
        {/* 메인 콘텐츠 영역 */}
        <div className="pt-16">
          {renderPage()}
        </div>
      </div>
    </>
  );
};

export default App;
