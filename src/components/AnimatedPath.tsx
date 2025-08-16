import { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const ProjectsBackgroundPath = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    const updatePath = () => {
      const pathElement = document.getElementById('projects-path');
      if (pathElement && pathElement instanceof SVGPathElement) {
        const length = pathElement.getTotalLength();
        setPathLength(length);
      }
    };

    // Update path length on window resize
    window.addEventListener('resize', updatePath);
    setTimeout(updatePath, 100); // Initial calculation

    return () => window.removeEventListener('resize', updatePath);
  }, []);

  // Calculate path that connects project images
  const getProjectsPath = () => {
    const isDesktop = window.innerWidth >= 1024;
    
    if (isDesktop) {
      // Desktop: path that flows between left and right positioned projects
      return `
        M 20 -1
        Q 30 50 60 20
        Q 50 35 60 50
        Q 70 65 55 80
        Q 40 95 20 110
        Q 5 125 30 140
        Q 65 155 70 170
        Q 75 185 60 200
        Q 40 215 20 230
        Q 0 250 10 270
      `;
    } else {
      // Mobile: simpler vertical path along the left side
      return `
        M 15 10
        Q 25 20 20 35
        Q 15 50 25 65
        Q 20 80 15 95
        Q 25 110 20 125
        Q 15 140 25 155
        Q 20 170 15 185
        Q 25 200 20 215
        Q 15 230 20 245
      `;
    }
  };

  return (
    <div 
      ref={ref}
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 100 250"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="projectsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(250 100% 60%)" stopOpacity="0.15" />
            <stop offset="30%" stopColor="hsl(320 100% 65%)" stopOpacity="0.25" />
            <stop offset="70%" stopColor="hsl(250 100% 60%)" stopOpacity="0.20" />
            <stop offset="100%" stopColor="hsl(320 100% 65%)" stopOpacity="0.10" />
          </linearGradient>
          
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Background decorative path */}
        <path
          d={getProjectsPath()}
          stroke="url(#projectsGradient)"
          strokeWidth="8"
          fill="none"
          opacity="0.3"
        />
        
        {/* Main animated path */}
        <path
          id="projects-path"
          d={getProjectsPath()}
          stroke="url(#projectsGradient)"
          strokeWidth="3"
          fill="none"
          filter="url(#softGlow)"
          strokeDasharray={pathLength}
          strokeDashoffset={isVisible ? 0 : pathLength}
          style={{
            transition: 'stroke-dashoffset 2.5s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
        
        
        
        
      </svg>
    </div>
  );
};