"use client";

const NavLinks = () => {
  const links = ['Home', 'About', 'FAQ', 'Contact'];

  return (
    <div className="flex items-center space-x-8">
      {links.map((link) => (
        <a
          key={link}
          href="#"
          className="text-white hover:text-white/80 transition-colors text-base"
        >
          {link}
        </a>
      ))}
    </div>
  );
};

export default NavLinks; 