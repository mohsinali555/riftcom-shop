import TopHeader from "./components/Header/TopHeader";
import BottomHeader from "./components/Header/BottomHeader";
import HeroSection from "./components/Home/HeroSection";
import Container from "./components/Common/Container";

function App() {
  return (
    <>
      <div className="w-full bg-[#1e28320d] h-[60px]">
        <TopHeader />
        <BottomHeader />
        <HeroSection />
        <Container></Container>
      </div>
    </>
  );
}

export default App;
