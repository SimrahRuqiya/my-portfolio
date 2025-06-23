// pages/about.tsx
import React from 'react';
import Image from 'next/image';

// You can import your portfolio data here
// import { portfolioData } from '../data/portfolioData';

// Or define the skills data structure like this:
interface Skill {
  name: string;
  icon: string; // path to icon or icon component
  category: 'programming' | 'web' | 'database' | 'cloud';
}

// Sample skills data - replace with your actual data
const skillsData: Skill[] = [
  // Programming Languages
  { name: 'Python', icon: '/icons/python.svg', category: 'programming' },
  { name: 'Java', icon: '/icons/java.svg', category: 'programming' },
  { name: 'JavaScript', icon: '/icons/javascript.svg', category: 'programming' },
  { name: 'C#', icon: '/icons/csharp.svg', category: 'programming' },
  
  // Web Development
  { name: 'HTML5', icon: '/icons/html5.svg', category: 'web' },
  { name: 'CSS3', icon: '/icons/css3.svg', category: 'web' },
  { name: 'React', icon: '/icons/react.svg', category: 'web' },
  { name: 'Next.js', icon: '/icons/nextjs.svg', category: 'web' },
  { name: 'Tailwind CSS', icon: '/icons/tailwind.svg', category: 'web' },
  { name: 'Swift', icon: '/icons/swift.svg', category: 'web' },
  { name: 'Node.js', icon: '/icons/nodejs.svg', category: 'web' },
  { name: 'Spring Boot', icon: '/icons/spring.svg', category: 'web' },
  
  // Database
  { name: 'MySQL', icon: '/icons/mysql.svg', category: 'database' },
  { name: 'PostgreSQL', icon: '/icons/postgresql.svg', category: 'database' },
];

const SkillIcon: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="group relative inline-block">
      <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer">
        <Image 
          src={skill.icon} 
          alt={skill.name}
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
        {skill.name}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
      </div>
    </div>
  );
};

// Import your reusable components
const GeometricPattern: React.FC<{
  side: 'left' | 'right';
  colors: { primary: string; secondary: string; light: string };
}> = ({ side, colors }) => {
  const { primary, secondary, light } = colors;
  
  if (side === 'left') {
    return (
      <div className="absolute top-0 left-0 h-full w-32 flex flex-col justify-evenly z-0 pl-4">
        {/* Top group */}
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <div className={`w-5 h-5 ${light}`}></div>
            <div className={`w-5 h-5 ${primary}`}></div>
          </div>
          <div className="flex gap-1 ml-3">
            <div className={`w-5 h-5 ${primary}`}></div>
            <div className={`w-5 h-5 ${secondary}`}></div>
            <div className={`w-5 h-5 ${primary}`}></div>
          </div>
          <div className="flex gap-1">
            <div className={`w-5 h-5 ${secondary}`}></div>
            <div className={`w-5 h-5 ${primary}`}></div>
          </div>
        </div>
        
        {/* Middle group */}
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <div className={`w-5 h-5 ${primary}`}></div>
            <div className={`w-5 h-5 ${secondary}`}></div>
          </div>
          <div className="flex gap-1 ml-3">
            <div className={`w-5 h-5 ${secondary}`}></div>
            <div className={`w-5 h-5 ${primary}`}></div>
            <div className={`w-5 h-5 ${light}`}></div>
          </div>
        </div>
        
        {/* Bottom group */}
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <div className={`w-5 h-5 ${primary}`}></div>
          </div>
          <div className="flex gap-1 ml-3">
            <div className={`w-5 h-5 ${secondary}`}></div>
            <div className={`w-5 h-5 ${light}`}></div>
            <div className={`w-5 h-5 ${primary}`}></div>
          </div>
          <div className="flex gap-1">
            <div className={`w-5 h-5 ${primary}`}></div>
            <div className={`w-5 h-5 ${secondary}`}></div>
          </div>
        </div>
      </div>
    );
  }
  
  // Right pattern
  return (
    <div className="absolute top-0 right-0 h-full w-32 flex flex-col justify-evenly z-0 pr-4">
      {/* Mirror the left pattern for right side */}
      <div className="flex flex-col gap-1 items-end">
        <div className="flex gap-1">
          <div className={`w-5 h-5 ${primary}`}></div>
          <div className={`w-5 h-5 ${secondary}`}></div>
        </div>
        <div className="flex gap-1 mr-3">
          <div className={`w-5 h-5 ${primary}`}></div>
          <div className={`w-5 h-5 ${secondary}`}></div>
          <div className={`w-5 h-5 ${light}`}></div>
        </div>
        <div className="flex gap-1">
          <div className={`w-5 h-5 ${secondary}`}></div>
          <div className={`w-5 h-5 ${primary}`}></div>
        </div>
      </div>
      
      <div className="flex flex-col gap-1 items-end">
        <div className="flex gap-1">
          <div className={`w-5 h-5 ${primary}`}></div>
          <div className={`w-5 h-5 ${secondary}`}></div>
        </div>
        <div className="flex gap-1 mr-3">
          <div className={`w-5 h-5 ${light}`}></div>
          <div className={`w-5 h-5 ${primary}`}></div>
        </div>
      </div>
      
      <div className="flex flex-col gap-1 items-end">
        <div className="flex gap-1">
          <div className={`w-5 h-5 ${primary}`}></div>
          <div className={`w-5 h-5 ${secondary}`}></div>
        </div>
        <div className="flex gap-1 mr-3">
          <div className={`w-5 h-5 ${secondary}`}></div>
        </div>
        <div className="flex gap-1">
          <div className={`w-5 h-5 ${primary}`}></div>
          <div className={`w-5 h-5 ${light}`}></div>
          <div className={`w-5 h-5 ${secondary}`}></div>
          <div className={`w-5 h-5 ${primary}`}></div>
        </div>
      </div>
    </div>
  );
};

const Navigation: React.FC<{
  leftColors: { primary: string; secondary: string };
  rightColors: { primary: string; secondary: string };
  currentPage: string;
}> = ({ leftColors, rightColors, currentPage }) => {
  const navItems = ['home', 'about', 'projects', 'experience', 'contact'];
  
  return (
    <nav className="flex justify-between items-center px-16 py-8 relative">
      {/* Left Logo */}
      <div className="relative">
        <div className="grid grid-cols-2 grid-rows-2 gap-0.5 w-8 h-8">
          <div className={`w-4 h-4 ${leftColors.secondary}`}></div>
          <div className={`w-4 h-4 ${leftColors.primary}`}></div>
          <div className={`w-4 h-4 ${leftColors.primary}`}></div>
          <div className={`w-4 h-4 ${leftColors.secondary}`}></div>
        </div>
      </div>
      
      {/* Navigation Links */}
      <ul className="flex space-x-12">
        {navItems.map((item) => (
          <li key={item}>
            <a 
              href={item === 'home' ? '/' : `/${item}`}
              className={`text-lg font-medium transition-colors duration-300 relative ${
                currentPage === item 
                  ? 'text-purple-800' 
                  : 'text-gray-800 hover:text-purple-600'
              }`}
            >
              {item}
              {currentPage === item && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-800"></span>
              )}
            </a>
          </li>
        ))}
      </ul>
      
      {/* Right Logo */}
      <div className="relative">
        <div className="grid grid-cols-2 grid-rows-2 gap-0.5 w-8 h-8">
          <div className={`w-4 h-4 ${rightColors.primary}`}></div>
          <div className={`w-4 h-4 ${rightColors.secondary}`}></div>
          <div className={`w-4 h-4 ${rightColors.secondary}`}></div>
          <div className={`w-4 h-4 ${rightColors.primary}`}></div>
        </div>
      </div>
    </nav>
  );
};

const AboutPage: React.FC = () => {
  const leftPatternColors = {
    primary: 'bg-purple-800',
    secondary: 'bg-purple-500',
    light: 'bg-purple-300'
  };
  
  const rightPatternColors = {
    primary: 'bg-green-600',
    secondary: 'bg-green-400',
    light: 'bg-green-300'
  };
  
  const programmingSkills = skillsData.filter(skill => skill.category === 'programming');
  const webSkills = skillsData.filter(skill => skill.category === 'web');
  const databaseSkills = skillsData.filter(skill => skill.category === 'database');
  
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Navigation 
        leftColors={{ primary: 'bg-purple-800', secondary: 'bg-purple-500' }}
        rightColors={{ primary: 'bg-green-600', secondary: 'bg-green-400' }}
        currentPage="about"
      />
      
      {/* Main Content */}
      <main className="relative px-8 py-16 max-w-4xl mx-auto">
        {/* Left Pattern */}
        <GeometricPattern side="left" colors={leftPatternColors} />
        
        {/* Right Pattern */}
        <GeometricPattern side="right" colors={rightPatternColors} />
        
        {/* Content Container */}
        <div className="relative z-10 space-y-12">
          {/* About Me Section */}
          <section className="text-center">
            <h1 className="text-5xl font-black text-gray-900 mb-8 italic font-serif">
              about me
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              I&apos;m a passionate developer with a strong interest in IT, Networking,
              Cloud Computing, Dev Ops, Software Development and UI/UX Design. I
              love creating innovative solutions and exploring new technologies.
            </p>
          </section>
          
          {/* Technical Skills Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Technical Skills
            </h2>
            
            {/* Programming Languages */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Programming languages
              </h3>
              <div className="flex flex-wrap gap-6 justify-center">
                {programmingSkills.map((skill, index) => (
                  <SkillIcon key={index} skill={skill} />
                ))}
              </div>
            </div>
            
            {/* Web Development */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Web development
              </h3>
              <div className="flex flex-wrap gap-6 justify-center">
                {webSkills.map((skill, index) => (
                  <SkillIcon key={index} skill={skill} />
                ))}
              </div>
            </div>
            
            {/* Database */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Database
              </h3>
              <div className="flex flex-wrap gap-6 justify-center">
                {databaseSkills.map((skill, index) => (
                  <SkillIcon key={index} skill={skill} />
                ))}
              </div>
            </div>
            
            {/* Cloud & DevOps - You can add this section */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Cloud & DevOps
              </h3>
              <div className="flex flex-wrap gap-6 justify-center">
                {/* Add your cloud/devops skills here */}
                <div className="text-gray-500">Coming soon...</div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;