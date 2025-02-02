import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container text-center">
        <h1 className="hero-title">Spheron YAML Generator</h1>
        <p className="hero-description">
          Transform natural language into Spheron YAML configurations instantly.
          No more manual YAML writing - just describe what you need!
        </p>
        <Link href="/clone">
          <button className="button">Try Prototype</button>
        </Link>
      </div>
    </section>
  );
}
