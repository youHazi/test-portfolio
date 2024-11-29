import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('제출된 데이터:', formData);
    alert('메시지가 제출되었습니다!');
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-300 text-center mb-6">연락하기</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2">이름</label>
            <input 
              type="text" 
              id="name" 
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 text-white"
              placeholder="이름을 입력하세요"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">이메일</label>
            <input 
              type="email" 
              id="email" 
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 text-white"
              placeholder="이메일을 입력하세요"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-300 mb-2">메시지</label>
            <textarea 
              id="message" 
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 text-white"
              rows={4}
              placeholder="메시지를 입력하세요"
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 text-white"
          >
            메시지 보내기
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;