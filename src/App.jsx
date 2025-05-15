import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProduct,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./Sections";
import Nav from "./Components/Nav";

function App() {
  return (
    <main className="relative">
      <nav>
        <Nav />
      </nav>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProduct />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding sm:py-32 py-16 x-full">
        <Subscribe />
      </section>
      <section className="padding-x padding-t bg-black pb-8">
        <Footer />
      </section>
    </main>
  );
}

export default App;
