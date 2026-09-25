import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import FeaturedRecipes from "../components/FeaturedRecipes";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-[#f8f4ed] text-[#2c211c]">

      <Navbar />

      <main>
        <Hero />
        <CategorySection />
        <FeaturedRecipes />
      </main>

      <Footer/>

    </div>
  );
}

export default Home;