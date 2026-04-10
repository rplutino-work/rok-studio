import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import ServicesGrid from "@/components/ServicesGrid";
import ProjectForm from "@/components/ProjectForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <ServiceCards />
        <div className="container mx-auto px-4 py-10 opacity-30">
           <hr className="border-t border-border-light" />
        </div>
        <ServicesGrid />
        <div className="container mx-auto px-4 py-10 opacity-30">
           <hr className="border-t border-border-light" />
        </div>
        <ProjectForm />
      </main>
      <Footer />
    </>
  );
}
