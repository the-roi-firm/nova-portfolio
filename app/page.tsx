import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Pillars from "@/components/Pillars";
import Services from "@/components/Services";
import Shan from "@/components/Shan";
import Availability from "@/components/Availability";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Tourist from "@/components/Tourist";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

function Hairline() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 md:px-12">
      <div className="hairline" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Hairline />
        <Manifesto />
        <Hairline />
        <Pillars />
        <Hairline />
        <Services />
        <Hairline />
        <Shan />
        <Hairline />
        <Availability />
        <Hairline />
        <Work />
        <Hairline />
        <Testimonials />
        <Tourist />
        <Booking />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
