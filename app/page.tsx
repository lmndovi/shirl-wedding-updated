import Footer from "@/components/Footer";
import Gifts from "@/components/Gifts";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Location from "@/components/Location";
import RSVP from "@/components/RSVP";

export default function Home() {
  return (
    <div className="flex flex-col">
      <header id="header">
        <Header />
      </header>
      <main className=" md:bg-floral-mobile md:bg-cover md:bg-repeat min-h-screen">
        <section id="landing" className="min-h-screen p-0">
          <Landing />
        </section>
        <section id="location" className="min-h-screen">
          <Location />
        </section>
        <section id="rsvp" className="min-h-screen">
          <RSVP />
        </section>
        <section id="gifts" className="min-h-screen">
          <Gifts />
        </section>
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}
