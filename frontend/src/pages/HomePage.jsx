import NavBar from "../components/NavBar";
import HeroSection from "../components/Homepage/HeroSection";
import CategoryMenu from "../components/Homepage/CategoryMenu";
import BestSellers from "../components/Homepage/BestSellers";
import WelcomeSection from "../components/Homepage/WelcomeSection";

const HomePage = () => {
    return(
        <div className="min-h-screen overflow-hidden">
            <NavBar />
            <HeroSection />
            <CategoryMenu />
            <BestSellers />
            <WelcomeSection />
        </div>
    );
};

export default HomePage;