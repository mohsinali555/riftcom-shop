import Layout from "../components/Common/Layout";
import BottomHeader from "../components/Header/BottomHeader";
import BestSellerProducts from "../components/Home/BestSellerProducts";
import HeroSection from "../components/Home/HeroSection";
import PopularProducts from "../components/Home/PopularProducts";

const Home = () => {
  return (
    <Layout>
      <BottomHeader />
      <HeroSection />
      <PopularProducts />
      <BestSellerProducts />
    </Layout>
  );
};

export default Home;
