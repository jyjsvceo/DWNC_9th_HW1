import { useState, useEffect, useRef } from 'react';

interface InterestItem {
  name: string;
  description: string;
}

interface TechItem {
  name: string;
  description: string;
}

export function InterestsSection() {
  const [activeInterest, setActiveInterest] = useState<string | null>(null);
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActiveInterest(null);
        setActiveTech(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const interests: InterestItem[] = [
    { name: '스타트업', description: '새로운 아이디어를 빠르게 실현하고 성장시키는 과정에 관심이 많습니다.' },
    { name: '교육', description: '지식을 공유하고 다른 사람의 성장을 돕는 것에 보람을 느낍니다.' },
    { name: '문제 해결', description: '복잡한 문제를 분석하고 효율적인 해결책을 찾는 것을 즐깁니다.' },
    { name: '생산성', description: '더 적은 노력으로 더 많은 가치를 만드는 방법을 탐구합니다.' },
    { name: 'UI/UX', description: '사용자 경험을 개선하고 직관적인 인터페이스를 디자인하는 데 관심이 있습니다.' },
  ];

  const techStack = {
    proficient: [
      { name: 'Notion', description: '생산성 도구로 활용하며 문서화와 지식 관리에 사용합니다.' },
      { name: 'Python', description: '데이터 처리와 자동화 스크립트 작성에 능숙합니다.' },
      { name: 'React(기초)', description: '컴포넌트 기반 UI 개발의 기본 개념을 이해하고 있습니다.' },
      { name: 'JavaScript', description: '웹 개발의 핵심 언어로 활용할 수 있습니다.' },
      { name: 'TypeScript', description: '타입 안전성을 갖춘 JavaScript로 개발합니다.' },
    ],
    learning: [
      { name: 'Next.js', description: 'React 기반 풀스택 프레임워크를 학습하고 있습니다.' },
      { name: 'Firebase', description: '백엔드 서비스와 실시간 데이터베이스 활용법을 익히는 중입니다.' },
      { name: 'Supabase', description: '오픈소스 Firebase 대안으로 백엔드 개발을 공부하고 있습니다.' },
    ],
  };

  const toggleInterest = (name: string) => {
    setActiveInterest(activeInterest === name ? null : name);
  };

  const toggleTech = (name: string) => {
    setActiveTech(activeTech === name ? null : name);
  };

  return (
    <div ref={containerRef} className="w-full max-w-3xl mx-auto px-4 space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl text-center">관심사</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {interests.map((interest, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => toggleInterest(interest.name)}
                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 transition-colors cursor-pointer"
              >
                {interest.name}
              </button>
              {activeInterest === interest.name && (
                <div className="absolute z-10 mt-2 p-4 bg-white rounded-lg shadow-lg border border-gray-200 w-64 left-1/2 -translate-x-1/2">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45"></div>
                  <p className="text-sm text-gray-700 relative z-10">
                    {interest.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl text-center">기술 스택</h2>

        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg text-gray-600 text-center">사용 가능</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {techStack.proficient.map((tech, index) => (
                <div key={index} className="relative">
                  <button
                    onClick={() => toggleTech(tech.name)}
                    className="px-4 py-2 bg-green-100 text-green-800 rounded-full hover:bg-green-200 transition-colors cursor-pointer"
                  >
                    {tech.name}
                  </button>
                  {activeTech === tech.name && (
                    <div className="absolute z-10 mt-2 p-4 bg-white rounded-lg shadow-lg border border-gray-200 w-64 left-1/2 -translate-x-1/2">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45"></div>
                      <p className="text-sm text-gray-700 relative z-10">
                        {tech.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg text-gray-600 text-center">배우는 중</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {techStack.learning.map((tech, index) => (
                <div key={index} className="relative">
                  <button
                    onClick={() => toggleTech(tech.name)}
                    className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full hover:bg-orange-200 transition-colors cursor-pointer"
                  >
                    {tech.name}
                  </button>
                  {activeTech === tech.name && (
                    <div className="absolute z-10 mt-2 p-4 bg-white rounded-lg shadow-lg border border-gray-200 w-64 left-1/2 -translate-x-1/2">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45"></div>
                      <p className="text-sm text-gray-700 relative z-10">
                        {tech.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
