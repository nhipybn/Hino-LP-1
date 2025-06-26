import { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About us', href: '#about' },
    { label: 'Hino Gateway 378', href: '#nghi-dinh-58' },
    { label: 'Nghị định 378', href: '#nghidinh' },
    { label: 'Hệ thống', href: '#system-diagram' },
    
    { label: 'Case Study', href: '#du-an' },
    
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
<a href="#home" className="flex items-center">
            <img src="/logo1.png" alt="Logo" className="h-10 w-auto" />
  <span className="ml-3 text-xl font-bold text-primary">Hino Systech</span>
          </a>

          {/* Desktop Navigation */}
         <nav className="hidden md:flex items-center space-x-8">
  {menuItems.map((item) => (
    <a
      key={item.label}
      href={item.href}
      className="text-gray-600 hover:text-primary transition-colors duration-300"
    >
      {item.label}
    </a>
  ))}
  <a href="#contact" className="btn-primary">
    Liên hệ tư vấn
  </a>
</nav>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-around">
              <span className={`block h-0.5 w-full bg-gray-600 transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
              <span className={`block h-0.5 w-full bg-gray-600 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-full bg-gray-600 transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: 'auto' },
            closed: { opacity: 0, height: 0 }
          }}
        >
          <div className="py-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-gray-600 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 pt-2">
              <button className="btn-primary w-full">Get Started</button>
            </div>
          </div>
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;