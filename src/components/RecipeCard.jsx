function RecipeCard({ recipe }) {
  return (
    <article className="group">

      {/* Image */}
      <div className="overflow-hidden rounded-3xl">

        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
        />

      </div>

      {/* Info */}
      <div className="mt-5">

        <div className="flex items-center justify-between">

          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#b86f52]">
            {recipe.category}
          </span>

          <span className="text-xs text-[#8c8179]">
            {recipe.time}
          </span>

        </div>

        <h3 className="mt-2 font-display text-2xl font-semibold">
          {recipe.title}
        </h3>

        <button className="mt-3 text-sm font-semibold underline decoration-[#b86f52] underline-offset-4">
          View Recipe →
        </button>

      </div>

    </article>
  );
}

export default RecipeCard;