import Image from "next/image";
import Intro from '@/components/intro'
import Skills from '@/components/skills'
import FeaturedProjects from '@/components/featured-projects'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <section className="py-24">
      <div className="container max-w-3xl">
        <Intro />
        <Skills />
        <FeaturedProjects />
        <Contact />
      </div>
    </section>
  );
}
