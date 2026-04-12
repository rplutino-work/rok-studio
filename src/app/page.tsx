import Header from "@/components/Header";
import Hero from "@/components/hero";
import ClientBrands from "@/components/ClientBrands";
import ServiceCards from "@/components/ServiceCards";
import ServicesGrid from "@/components/ServicesGrid";
import Portfolio from "@/components/Portfolio";
import ProjectForm from "@/components/ProjectForm";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClientBrands />
        <ServiceCards />
        <ServicesGrid />
        <Portfolio />
        <ProjectForm />
      </main>
      <Footer />
    </>
  );
}
