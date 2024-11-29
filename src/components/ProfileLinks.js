import React from 'react';

const ProfileLinks = () => {
  return (
    <div className="flex flex-row items-center p-8 space-x-4">
      {/* 깃허브 링크 */}
      <a
        href="https://github.com/youHazi" 
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-100 text-gray-800 p-2 rounded-full hover:bg-gray-200 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.26.793-.578v-2.234c-3.338.724-4.043-1.61-4.043-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.085 1.839 1.237 1.839 1.237 1.07 1.835 2.807 1.304 3.492.997.108-.774.42-1.305.762-1.605-2.665-.304-5.467-1.334-5.467-5.932 0-1.31.467-2.381 1.235-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.007-.323 3.3 1.233a11.47 11.47 0 0 1 3.003-.404c1.018.005 2.042.137 3.003.404 2.293-1.556 3.3-1.233 3.3-1.233.653 1.653.241 2.873.118 3.176.769.839 1.234 1.91 1.234 3.22 0 4.61-2.805 5.624-5.476 5.921.43.37.823 1.102.823 2.222v3.293c0 .32.193.694.8.576C20.565 21.797 24 17.302 24 12 24 5.373 18.628 0 12 0z" />
        </svg>
      </a>

      {/* 이메일 링크 */}
      <a
        href="mailto:yih1508@naver.com"
        className="bg-custom-blue text-white p-2 rounded-full hover:bg-blue-600 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 13.065 3.149 6H20.85L12 13.065zm0 2.303L2.93 7.739V18H21.07V7.739L12 15.368z" />
        </svg>
      </a>
    </div>
  );
};

export default ProfileLinks;
