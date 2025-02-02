import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link href="/" className="logo">
            SpheronYAML
          </Link>
          <div className="nav-links">
            <Link href="#features" className="nav-link">
              Features
            </Link>
            <Link href="#demo" className="nav-link">
              Demo
            </Link>
            <button className="button">Get Started</button>
          </div>
        </nav>
      </div>
    </header>
  );
}
