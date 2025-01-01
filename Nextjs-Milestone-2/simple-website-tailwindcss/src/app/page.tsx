import CategorySuggestion from "./components/HomePage/CategorySuggestion/CategorySuggestion";
import Hero from "./components/HomePage/HeroSection/Hero";
import ProductCategories from "./components/HomePage/ProductCategories/ProductCategories";
import HomeBanner from "./components/HomePage/HomeBanner/HomeBanner";
import NewsLetter from "./components/Utils/NewsLetter/NewsLetter";
import PotteryCollection from "./components/HomePage/PotteryCollection/PotteryCollection";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <ProductCategories />
      <CategorySuggestion />
      <PotteryCollection/>
      <HomeBanner />
      <NewsLetter />
    </div>
  );
}