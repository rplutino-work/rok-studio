import Header from "@/components/Header";
import Hero from "@/components/hero";
import ServiceCards from "@/components/ServiceCards";
import ServicesGrid from "@/components/ServicesGrid";
import CaseStudies from "@/components/CaseStudies";
import ProjectForm from "@/components/ProjectForm";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServiceCards />
        <ServicesGrid />
        <CaseStudies />
        <ProjectForm />
      </main>
      <Footer />
    </>
  );
}
