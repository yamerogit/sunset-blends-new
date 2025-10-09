import { FaSearch, FaShoppingCart, FaUser, FaBars } from 'react-icons/fa';
import { Link, useLocation } from 'react-router';

const navLinks = [
  { name: 'HOME', to: '/' },
  { name: 'COFFEE', to: '/coffee' },
  { name: 'PASTRY', to: '/pastry' },
];

const NavBar = () => {
  const location = useLocation();

  return (
    <nav
      className="w-full bg-[#D7BDA6] shadow-sm"
      style={{ minHeight: '56px' }}
    >
      <div className="grid grid-cols-[1fr_1.2fr_1.5fr_1fr] items-center gap-2 px-12 py-3">
        {/* Brand/Logo text */}
        <div className="font-bold text-2xl text-[#211511] font-serif tracking-tight">
          sunset blends
        </div>

        {/* Navigation links */}
        <ul className="flex justify-center gap-8">
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`uppercase text-[#211511] tracking-wider text-base ${
                  location.pathname === link.to ? 'font-semibold' : 'opacity-90'
                } hover:text-[#8b6f58] duration-200`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search bar centered */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-[220px]">
            <FaSearch className="absolute left-3 top-2 text-[#8b6f58]" />
            <input
              type="text"
              placeholder="Search"
              className="pl-9 pr-4 py-2 rounded-full bg-[#ebdfd3] text-[#211511] placeholder:text-[#8b6f58] outline-none border-none w-full"
              style={{ height: '32px' }}
            />
          </div>
        </div>

        {/* Icon buttons evenly spaced and aligned right */}
        <div className="flex justify-end items-center gap-6 ml-auto">
          <FaShoppingCart className="text-[#211511] text-base cursor-pointer hover:text-[#8b6f58]"/>
          <FaUser className="text-[#211511] text-base cursor-pointer hover:text-[#8b6f58]"/>
          <FaBars className="text-[#211511] text-base cursor-pointer hover:text-[#8b6f58]"/>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;