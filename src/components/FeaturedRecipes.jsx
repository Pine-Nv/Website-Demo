import recipes from "../data/Recipes";
import RecipeCard from "./RecipeCard";

function FeaturedRecipes() {
  return (
    <section
      id="recipes"
      className="mx-auto max-w-7xl px-6 py-24"
    >

      {/* Heading */}
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b86f52]">
            From the kitchen
          </p>

          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Featured recipes
          </h2>

        </div>

        <a
          href="#"
          className="text-sm font-semibold underline decoration-[#b86f52] decoration-2 underline-offset-4"
        >
          View all recipes →
        </a>

      </div>


      {/* Recipe grid */}
      <div className="mt-12 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-4">

        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
          />
        ))}

      </div>

    </section>
  );
}

export default FeaturedRecipes;