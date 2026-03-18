import Hero from "@/components/home/Hero";
import RudraStory from "@/components/home1/RudraStory";
import ProjectsSection from "@/components/home1/ProjectsSection";
import VideoTestimonials from "@/components/home1/VideoTestimonials";
import LatestUpdates from "@/components/home1/LatestUpdates";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <RudraStory />
      <ProjectsSection />
      <LatestUpdates />
      <VideoTestimonials />
      <Footer />
    </>
  );
}
