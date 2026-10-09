const Navigation = () => {
  return (
    <nav className="fixed w-full bg-white/98 shadow-md z-50 py-4">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
          DigiGrowth
        </div>

        <ul className="hidden md:flex gap-8">
          {["Home", "About", "Portfolio", "Testimonials", "Contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-800 font-medium hover:text-purple-600 transition-colors"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
