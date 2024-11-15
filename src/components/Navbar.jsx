import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-mystic-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex space-x-8">
            {[
              { name: 'Home', path: 'home' },
              { name: 'About me', path: 'about' },
              { name: 'Projects', path: 'projects' },
              { name: 'Experience', path: 'experience' },
              { name: 'Contact', path: 'contact' }
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-enchanted-500 transition-colors duration-300 font-medieval cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
