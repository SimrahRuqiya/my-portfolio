interface NavigationProps {
  leftColors: {
    primary: string;
    secondary: string;
  };
  rightColors: {
    primary: string;
    secondary: string;
  };
  currentPage: string;
}

const Navigation: React.FC<NavigationProps> = ({ leftColors, rightColors, currentPage }) => {
  const navItems = ['home', 'about', 'projects', 'experience', 'contact'];
  
  return (
    <nav className="flex justify-between items-center px-16 py-8 relative">
      {/* Left Logo */}
      <div className="relative">
        <div className="grid grid-cols-2 grid-rows-2 gap-0.5 w-10 h-10">
          <div className={`w-5 h-5 rounded-sm ${leftColors.primary}`}></div>
          <div className={`w-5 h-5 rounded-sm ${leftColors.secondary}`}></div>
          <div className={`w-5 h-5 rounded-sm ${leftColors.secondary}`}></div>
          <div className={`w-5 h-5 rounded-sm ${leftColors.primary}`}></div>
        </div>
      </div>
      
      {/* Navigation Links */}
      <ul className="flex space-x-12">
        {navItems.map((item) => (
          <li key={item}>
            <a 
              href={item === 'home' ? '/' : `/${item}`}
              className={`text-2xl font-medium transition-colors duration-300 relative ${
                currentPage === item 
                  ? 'text-blue-800' 
                  : 'text-gray-800 hover:text-blue-600'
              }`}
            >
              {item}
              {currentPage === item && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-800"></span>
              )}
            </a>
          </li>
        ))}
      </ul>
      
      {/* Right Logo */}
      <div className="relative">
        <div className="grid grid-cols-2 grid-rows-2 gap-0.5 w-10 h-10">
          <div className={`w-5 h-5 rounded-sm ${rightColors.primary}`}></div>
          <div className={`w-5 h-5 rounded-sm ${rightColors.secondary}`}></div>
          <div className={`w-5 h-5 rounded-sm ${rightColors.secondary}`}></div>
          <div className={`w-5 h-5 rounded-sm ${rightColors.primary}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;