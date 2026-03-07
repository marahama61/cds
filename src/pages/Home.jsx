import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Instructors from "../components/Instructors";
import Packages from "../components/Packages";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import Stats from "../components/Stats";
import Features from "../components/Features";
import CTA from "../components/CTA";

function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <CTA />
      <Instructors />
      <Packages />
      <Reviews />
      <Footer />
    </>
  );
}

export default Home;
