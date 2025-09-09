import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero */}
      <section id="hero" className="hero">
        <img src="/logo.png" alt="Victor caricature logo" className="logo" />
        <div>
          <h1>Hi, I’m Victor</h1>
          <p>Full-Stack Engineer</p>
          <a href="https://github.com/">GitHub</a> |{" "}
          <a href="https://linkedin.com/">LinkedIn</a> {" "}

        </div>
      </section>

      {/* Experience */}
      <section id="experience">
        <h2>Experience</h2>
        <div className="card">
          <h3>Company A</h3>
          <p>Software Engineer (2023 – Present)</p>
          <p>
            Produced esports live stream → $450K revenue / 1.2M concurrent
            viewers
          </p>
        </div>
      </section>

      {/* Education */}
      <section id="education">
        <h2>Education</h2>
        <div className="card">
          <h3>Oxford University</h3>
          <p>MBA, 2021</p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <h2>Projects</h2>
        <div className="card">
          <h3>NASA Big Picture</h3>
          <p>Educational app using NASA APOD API</p>
          <a href="https://github.com/username/project">View on GitHub</a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Victor Kim</p>
        <div className="back-to-top" onClick={scrollToTop}>
          ↑
        </div>
      </footer>
    </div>
  );
}
