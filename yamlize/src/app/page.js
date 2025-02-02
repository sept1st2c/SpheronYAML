import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import "../app/globals.css";

export default function Home() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
        <Demo />
      </main>
      <Footer />
    </div>
  );
}
