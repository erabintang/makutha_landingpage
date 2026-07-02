import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Statistics from "@/components/statistics";
import Feature from "@/components/feature";
import Workflow from "@/components/workflow";
import Preview from "@/components/preview";
import Partner from "@/components/partner";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Statistics />
        <Feature />
        <Workflow />
        <Preview />
        <Partner />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}