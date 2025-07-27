import Image from "next/image";
import ProjectSection from "@/app/(landing-page)/components/ProjectSection";
import PostsSection from "@/app/(landing-page)/components/PostsSection";
import HeroSection from "@/app/(landing-page)/components/HeroSection";
export default function Home() {
  return (
    <div className="container mx-auto p-8 pb-20 sm:p-20 ">
      <HeroSection />
      <ProjectSection />
      <PostsSection />
      </div>
  );
}
