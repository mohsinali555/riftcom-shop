import Footer from "../components/Footer";
import BottomHeader from "../components/Header/BottomHeader";
import TopHeader from "../components/Header/TopHeader";
import BestSellerProducts from "../components/Home/BestSellerProducts";
import HeroSection from "../components/Home/HeroSection";
import PopularProducts from "../components/Home/PopularProducts";

const Home = () => {
  return (
    <div className="w-full bg-[#1e28320d] h-[60px]">
      <TopHeader />
      <BottomHeader />
      <HeroSection />
      <PopularProducts />
      <BestSellerProducts />
      <Footer />
    </div>
  );
};

export default Home;
