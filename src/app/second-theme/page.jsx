import Hero from "@/components/home2/Hero";
import RudraStory from "@/components/home2/RudraStory";
import ProjectsSection from "@/components/home2/ProjectsSection";
import VideoTestimonials from "@/components/home2/VideoTestimonials";
import LatestUpdates from "@/components/home2/LatestUpdates";
import Footer from "@/components/home2/Footer";
import Navbar from "@/components/home2/Navbar";
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
