import { Hero, Sections } from "@/components/PageSections";
import { pages } from "@/data/site";

export default function Home() {
  const page = pages.home;

  return (
    <>
      <Hero page={page} />
      <Sections page={page} />
    </>
  );
}
