import Header from "./components/header";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import About from "./components/About";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import Team from "./components/Team";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Partners from "./components/Partners";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <About />
        <Services />
        <CaseStudies />
        <Team />
        <HowItWorks />
        <Testimonials />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
