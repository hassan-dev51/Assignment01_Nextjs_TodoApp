import CoreCourses from "@/components/CoreCourses";
import Hero from "@/components/Hero";
import OutCome from "@/components/OutCome";
import SpecializedCourses from "@/components/SpecializedCourses";

export default function Home() {
  return (
    <main>
      <Hero />
      <CoreCourses />
      <SpecializedCourses />
      <OutCome />
    </main>
  );
}
