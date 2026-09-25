function CategorySection() {
  const categories = [
    {
      title: "Dinner",
      description: "Comforting meals",
      emoji: "🍝",
    },
    {
      title: "Baking",
      description: "Sweet things",
      emoji: "🍰",
    },
    {
      title: "Drinks",
      description: "Something refreshing",
      emoji: "🍹",
    },
  ];

  return (
    <section className="border-y border-black/10 bg-[#fffdf9]">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b86f52]">
            Find something delicious
          </p>

          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
            What are you craving?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[#6f655f]">
            Browse recipes for every mood, occasion, and craving.
          </p>

        </div>


        <div className="mt-12 grid gap-5 md:grid-cols-3">

          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-black/10 bg-[#f8f4ed] p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="flex items-start justify-between">

                <div>
                  <h3 className="font-display text-2xl font-semibold">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#6f655f]">
                    {category.description}
                  </p>
                </div>

                <span className="text-3xl">
                  {category.emoji}
                </span>

              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-[#b86f52]">
                Explore →
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default CategorySection;