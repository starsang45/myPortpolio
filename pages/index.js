import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
     <>
     <Head>
        <title>const Victor</title>
        <meta
          name="description"
          content="Victor Kim - Cloud & Full-Stack Engineer Portfolio"
        />
        <meta property="og:title" content="it's Victor" />
        <meta property="og:description" content="Cloud & Full-Stack Engineer" />
        <meta property="og:url" content="https://your-vercel-url.vercel.app" />
        <meta property="og:type" content="website" />
      </Head>
     <div>
      {/* Hero */}
      <section id="hero" className="hero">
  <img src="/logo.png" alt="Victor caricature logo" className="logo" />
  <div>
    <h1>Hi, I’m Victor</h1>
    <p>Full-Stack Engineer</p>
    <div className="hero-links">
      <a href="https://github.com/starsang45" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/victorsang/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://docs.google.com/document/d/11d8kFb0qy8OWbm0way6ZJd-JRbS5d8IT0x6DP9TJQug/edit?usp=sharing" target="_blank">Resume</a>
    </div>
  </div>
</section>


      {/* Experience */}
      <section id="experience">
  <h2>Experience</h2>

  <div className="card experience-card">
    <div className="exp-item">
      <span className="exp-title">OSLabs | </span>
      <span className="exp-date">May 2025 – Present</span>
    </div>
    <p className="exp-role">Software Engineer</p>
  </div>

  <div className="card experience-card">
    <div className="exp-item">
      <span className="exp-title">Open Source | </span>
      <span className="exp-date">Mar 2023 – Jul 2025</span>
    </div>
    <p className="exp-role">Software Engineer</p>
  </div>

  <div className="card experience-card">
    <div className="exp-item">
      <span className="exp-title">KBS | </span>
      <span className="exp-date">Mar 2023 – Jul 2025</span>
    </div>
    <p className="exp-role">Digital Content Manager</p>
  </div>

  {/* ... */}
</section>


      {/* Education */}
      <section id="education">
        <h2>Education</h2>
        <div className="card">
          <h3>Georgia Institute of Technology</h3>
          <p>Master of Computer Science, 2023 - present</p>
        </div>
        <div className="card">
          <h3>University of Oxford</h3>
          <p>MBA, 2005 - 2006</p>
        </div>
        <div className="card">
          <h3>Hanyang Cyber University</h3>
          <p>B.S.in Computer Science, 2021 - 2023</p>
        </div>
      </section>

      {/* Projects */}
     <section id="projects">
  <h2>Projects</h2>

  <div className="card project-card">
  <div className="project-header">
    <a 
      href="https://github.com/Waviz-Team/Waviz" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="project-link"
    >
      waviz
    </a>
    <span className="tech-inline"> · typescript · javascript(ES6+) · node · express · jest</span>
  </div>
  <p>lightweight 2d audio visualizer react library</p>
</div>
<div className="card project-card">
  <div className="project-header">
    <a 
      href="https://github.com/starsang45/new-tldr-ai-summarizer" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="project-link"
    >
      tl;dr ai summarizer
    </a>
    <span className="tech-inline"> · rag · pinecone · puppeteer · express · node · javascript</span>
  </div>
  <p>puppeteer-based AI web scraper</p>
</div>

<div className="card project-card">
  <div className="project-header">
    <a 
      href="https://github.com/starsang45/the-big-picture" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="project-link"
    >
      big picture - NASA image archive
    </a>
    <span className="tech-inline"> · javascript · tailwindCSS · jest · mongoDB</span>
  </div>
  <p>scalable NASA APOD image live archive</p>
</div>

<div className="card project-card">
  <div className="project-header">
    <a 
      href="https://github.com/starsang45/Typescript-character-finder" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="project-link"
    >
      typescript character finder 
    </a>
    <span className="tech-inline"> · typescript · react · tailwindCSS · express ·  jest · mongoDB</span>
  </div>
  <p>breaking bad character encyclpedia</p>
</div>

<div className="card project-card">
  <div className="project-header">
    <a 
      href="https://sangmus.blogspot.com/2024/10/deploy-mult-timer-web-app-using-sqs.html" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="project-link"
    >
      multi-timer web app with aws
    </a>
    <span className="tech-inline"> · aws SQS · azure · python Boto3 · mySQL</span>
  </div>
  <p>designed resilient multi-cloud architecture</p>
</div>


  {/* 나머지 프로젝트도 같은 패턴으로 작성 */}
</section>



      {/* Footer */}
      <footer>
        <p>© 2025 Victor Kim</p>
        <div className="back-to-top" onClick={scrollToTop}>
          ↑
        </div>
      </footer>
    </div>
     </>
    
    
  );
}
