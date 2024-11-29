import portfolioImage from '../img/portfolio-img.png';

export const skills = [
    {
      icon: (
        <path d="M16 18L22 12L16 6M8 6L2 12L8 18" />
      ),
      label: 'React'
    },
    {
      icon: (
        <>
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </>
      ),
      label: 'Node.js'
    },
    {
      icon: (
        <>
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </>
      ),
      label: 'TypeScript'
    },
      {
        icon: (
          <path d="M19 2H5C3.89543 2 3 2.89543 3 4V16C3 17.1046 3.89543 18 5 18H7L12 22L17 18H19C20.1046 18 21 17.1046 21 16V4C21 2.89543 20.1046 2 19 2Z" />
        ),
        label: 'html/css'
      },
      {
        icon: (
          <>
            <path d="M8.5 2h3.5v6h-3.5a3 3 0 110-6z" />
            <path d="M12 2h3.5a3 3 0 110 6H12V2z" />
            <path d="M12 8h3.5a3 3 0 110 6H12V8z" />
            <path d="M8.5 14H12v6h-3.5a3 3 0 110-6z" />
            <path d="M8.5 8H12v6H8.5a3 3 0 110-6z" />
          </>
        ),
        label: 'Figma'
      },
      {
        icon: (
          <>
            <rect x="2" y="2" width="20" height="20" rx="3" ry="3" />
            <text 
              x="50%" 
              y="50%" 
              dominantBaseline="middle" 
              textAnchor="middle" 
              className="text-[10px] font-thin"
              fill="currentColor"
              strokeWidth="0.8"
            >
              Ae
            </text>
          </>
        ),
        label: 'After Effects'
      },
      {
        icon: (
          <>
            <rect x="2" y="2" width="20" height="20" rx="3" ry="3" />
            <text 
              x="50%" 
              y="50%" 
              dominantBaseline="middle" 
              textAnchor="middle" 
              className="text-[10px] font-thin"
              fill="currentColor"
              strokeWidth="0.8"
            >
              Ai
            </text>
          </>
        ),
        label: 'Illustrator'
      },
      {
        icon: (
          <>
            {/* 기본 사각형 프레임 */}
            <rect x="2" y="2" width="20" height="20" rx="3" ry="3" />
            
            {/* 연필 아이콘 - 클립 스튜디오의 상징적인 요소 */}
            <g transform="translate(6, 6) scale(0.5)"> {/* 아이콘 위치와 크기 조정 */}
              <path
                d="M22 2L13 11l-1 1-2 5 5-2 1-1 9-9-3-3zM13 12l3 3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            
            {/* CSP 텍스트 */}
            <text 
              x="50%" 
              y="75%" 
              dominantBaseline="middle" 
              textAnchor="middle" 
              className="text-[8px] font-thin"
              fill="currentColor"
              strokeWidth="0.5"
            >
              CSP
            </text>
          </>
        ),
        label: 'Clip Studio'
      }
];
  
  export const projectDetails = [
    {
      id: 1,
      title: '포트폴리오 웹사이트',
      description: '반응형 React 포트폴리오 웹사이트로, 현대적이고 간결한 디자인을 구현했습니다.',
      technologies: ['React', 'Tailwind CSS', 'TypeScript'],
      imageUrl: [portfolioImage],
      githubLink: 'https://github.com/youHazi/test-portfolio',
      demoLink: '#'
    },
    {
      id: 2,
      title: '아직 그럴듯한 포트폴리오가 없습니다',
      description: '투 비 컨티뉴...',
      technologies: ['figma', 'After effect', 'Illustrator'],
      imageUrl: '/api/placeholder/300/200',
      githubLink: '#',
      demoLink: '#'
    }
  ];