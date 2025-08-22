import data from "@/content/home.json";
import { Hero } from "@/components/sections/Hero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { FAQ } from "@/components/sections/FAQ";

export default function Page(){
  return (
    <>
      <Hero {...data.hero} />
      <div className="py-16">
        <FeatureGrid items={data.features} />
      </div>
      <div className="py-16">
        <FAQ items={data.faq} />
      </div>
    </>
  );
}
