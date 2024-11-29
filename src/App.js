import React, { useState } from 'react';
import Home from './pages/home.js';
import Projects from './pages/Projects.js';
import Contact from './pages/Contact.js';

// 메인 앱 컴포넌트입니다.
// 전체 애플리케이션의 상태를 관리하고 페이지 라우팅을 처리합니다.
// currentPage 상태를 통해 현재 표시할 페이지를 결정하고,
// 네비게이션 바를 통해 페이지 간 이동을 가능하게 합니다.
const App = () => {
  // 현재 표시할 페이지를 관리하는 상태
  const [currentPage, setCurrentPage] = useState('home');

  // 현재 페이지에 따라 적절한 컴포넌트를 렌더링하는 함수
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
    <div className="min-h-screen bg-gray-900" >
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
  );
};

export default App;