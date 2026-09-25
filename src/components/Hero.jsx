function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">

      {/* Text */}
      <div>

        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#b86f52]">
          Cooking • Baking • Comfort Food
        </p>

        <h1 className="font-display text-6xl font-bold leading-[1.05] sm:text-7xl">
          Good food
          <br />
          starts here.
        </h1>

        <p className="mt-7 max-w-lg text-lg leading-8 text-[#6f655f]">
          Easy recipes, comforting meals, and delicious ideas
          made to bring people together.
        </p>

        <div className="mt-9 flex gap-5">

          <a
            href="#recipes"
            className="rounded-full bg-[#2c211c] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#6f4b3e]"
          >
            Explore Recipes
          </a>

          <a
            href="#about"
            className="flex items-center text-sm font-semibold underline decoration-[#b86f52] decoration-2 underline-offset-4"
          >
            Meet Mariah
          </a>

        </div>

      </div>


      {/* Image */}
      <div className="relative">

        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#d9c9b9]" />

        <div className="relative overflow-hidden rounded-[2rem]">

          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85"
            alt="Food"
            className="h-[520px] w-full object-cover"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;