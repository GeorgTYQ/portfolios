import Image from "next/image";
import ProjectSection from "@/app/(landing-page)/components/ProjectSection";
import PostsSection from "@/app/(landing-page)/components/PostsSection";
import HeroSection from "@/app/(landing-page)/components/HeroSection";
import Contact from "@/app/(landing-page)/components/ContactForm";
export default function Home() {
  return (
    <div >
      <div className="container mx-auto pt-8 sm:pt-20 px-8 sm:px-20 pb-0">
        <HeroSection />
        <ProjectSection />
        {/* <PostsSection /> */}
      </div>
      <div className="mx-auto px-8 sm:px-20 pb-0">
        <Contact />
      </div>

    </div>
  );
}
