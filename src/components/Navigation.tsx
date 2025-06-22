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

const Navigation: React.FC<NavigationProps> = ({ currentPage }) => {
  const navItems = ['home', 'about', 'projects', 'experience', 'contact'];
  
  return (
    <nav className="flex justify-center items-center px-16 py-8 relative">
      
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
      
    </nav>
  );
};

export default Navigation;