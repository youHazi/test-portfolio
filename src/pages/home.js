import React from 'react';
import TechIcon from '../components/TechIcon';
import ProfileLinks from '../components/ProfileLinks';
import profileImage from '../img/profile-img.png';
import { skills } from '../data/skills';

// 홈 페이지 컴포넌트
const Home = () => {
  return (
    <div className="fixed inset-12 bg-gray-900 flex flex-col justify-start items-center py-8">
      {/* 깃허브 링크 및 이메일 */}
      <ProfileLinks 
          />
      <img 
        src={profileImage} 
        alt="프로필 사진" 
        className="w-48 h-48 rounded-full mb-4 object-cover bg-gray-800"
      />
      <h1 className="text-3xl font-bold text-white mb-2">
        유수정
      </h1>
      <p className="text-xl font-bold text-custom-blue mb-4">
        UI/UX 디자이너 / 퍼포먼스 마케터
      </p>
      <div className="text-center max-w-md mb-8">
      <p className="text-gray-300 mb-1">
        안녕하세요. 디자이너 유수정입니다.
      </p>
      <p className="text-gray-300">
        하나의 세계를 만들어 표현하는 것을 좋아합니다.
      </p>
      </div>
      
      {/* 기술 스택 섹션 */}
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-center text-white mb-6">다룰 수 있는 기술</h2>
        <div className="grid grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <TechIcon key={index} label={skill.label}>
              {skill.icon}
            </TechIcon>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;