function Footer() {
  return (
    <footer className="bg-[#2c211c] text-[#f8f4ed]">

      {/* About */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">

          {/* About Mariah */}
          <div className="max-w-md">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d99576]">
              About Mariah
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight">
              Food made to bring people together.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#cfc2ba]">
              Mariah shares comforting recipes, baking inspiration,
              and delicious ideas made for everyday moments and
              special gatherings.
            </p>

            <a
              href="#about"
              className="mt-6 inline-block text-sm font-semibold underline decoration-[#d99576] decoration-2 underline-offset-4"
            >
              Get to know Mariah →
            </a>

          </div>


          {/* Explore */}
          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d99576]">
              Explore
            </p>

            <div className="mt-5 flex flex-col gap-4">

              <a
                href="#recipes"
                className="text-sm text-[#f8f4ed] transition hover:text-[#d99576]"
              >
                Recipes
              </a>

              <a
                href="#about"
                className="text-sm text-[#f8f4ed] transition hover:text-[#d99576]"
              >
                About
              </a>

              <a
                href="#work"
                className="text-sm text-[#f8f4ed] transition hover:text-[#d99576]"
              >
                Work With Me
              </a>

            </div>

          </div>


          {/* Connect */}
          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d99576]">
              Let's Connect
            </p>

            <div className="mt-5 flex flex-col gap-4">

              <a
                href="#"
                className="text-sm transition hover:text-[#d99576]"
              >
                Instagram
              </a>

              <a
                href="#"
                className="text-sm transition hover:text-[#d99576]"
              >
                TikTok
              </a>

              <a
                href="#"
                className="text-sm transition hover:text-[#d99576]"
              >
                YouTube
              </a>

            </div>

          </div>

        </div>

      </div>


      {/* Bottom */}
      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-[#a99a91] sm:flex-row sm:items-center sm:justify-between lg:px-10">

          <p>
            © 2026 Mariah Cooks. All rights reserved.
          </p>

          <p>
            Made with love ♡
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;