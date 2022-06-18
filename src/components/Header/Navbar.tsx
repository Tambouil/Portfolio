const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 px-4 mb-6 bg-gray-100 sm:px-8">
      <div className="flex flex-col items-center justify-between max-w-screen-xl py-3 mx-auto md:flex-row">
        <a
          href="/"
          className="px-2 py-1 -mx-2 font-medium leading-tight rounded-md focus:bg-white focus:outline-none"
        >
          <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            Valentin Berceaux
          </span>
        </a>
        <nav></nav>
      </div>
    </header>
  );
};

export default Navbar;
