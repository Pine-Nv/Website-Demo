function Navbar() {
  return (
    <header className="border-b border-black/10">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="/" className="font-display text-2xl font-bold">
          Mariah<span className="text-[#b86f52]">.</span>
        </a>

        <div className="hidden gap-8 md:flex">
          <a
            href="#recipes"
            className="text-sm transition hover:text-[#b86f52]"
          >
            Recipes
          </a>

          <a href="#about" className="text-sm transition hover:text-[#b86f52]">
            About
          </a>

          <a href="#work" className="text-sm transition hover:text-[#b86f52]">
            Work With Me
          </a>
        </div>

        <button className="rounded-full bg-[#2c211c] px-5 py-2.5 text-sm text-white transition hover:bg-[#6f4b3e]">
          Follow
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
