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
      <span className="exp-title">OSLabs  </span>
      <span className="exp-date">May 2025 – Present</span>
    </div>
    <p className="exp-role">Software Engineer</p>
  </div>

  <div className="card experience-card">
    <div className="exp-item">
      <span className="exp-title">Open Source  </span>
      <span className="exp-date">Mar 2023 – Jul 2025</span>
    </div>
    <p className="exp-role">Software Engineer</p>
  </div>

  <div className="card experience-card">
    <div className="exp-item">
      <span className="exp-title">KBS  </span>
      <span className="exp-date">Mar 2018 – Jul 2024</span>
    </div>
    <p className="exp-role">Digital Content Manager/Frontend engineer</p>
  </div>

  {/* ... */}
</section>


      {/* Education */}
      <section id="education">
  <h2>Education</h2>

  <div className="card edu-card">
    <div className="edu-item">
      <span className="edu-school">Georgia Institute of Technology</span>
      <span className="edu-date">2023 – present</span>
    </div>
    <p className="edu-degree">Master of Computer Science</p>
  </div>

  <div className="card edu-card">
    <div className="edu-item">
      <span className="edu-school">University of Oxford</span>
      <span className="edu-date">2005 – 2006</span>
    </div>
    <p className="edu-degree">MBA</p>
  </div>

  <div className="card edu-card">
    <div className="edu-item">
      <span className="edu-school">Hanyang Cyber University</span>
      <span className="edu-date">2021 – 2023</span>
    </div>
    <p className="edu-degree">B.S. in Computer Science</p>
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
  <p className="project-desc">lightweight 2d audio visualizer react library</p>
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
    <span className="tech-inline"> · RAG · Pinecone · Puppeteer · GPT-4.0 · Node.js · javascript</span>
  </div>
  <p className="project-desc">puppeteer-based AI web scraper</p>
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
  <p className="project-desc">scalable NASA APOD image live archive</p>
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
  <p className="project-desc">breaking bad character encyclpedia</p>
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
  <p className="project-desc">designed resilient multi-cloud architecture</p>
</div>
<div className="card project-card">
  <div className="project-header">
    <a 
      href="https://github.com/Momentum-YMCV/Momentum.git" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="project-link"
    >
      Momentum - AI Career Coach
    </a>
    <span className="tech-inline"> · GPT-3.5 · React · Node.js · MongoDB</span>
  </div>
  <p className="project-desc">AI-powered app that creates personalized daily plans</p>
</div>
<div className="card project-card">
  <div className="project-header">
    <a 
      href="https://play.google.com/store/apps/details?id=kr.co.kbs.kplayer&hl=en_US" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="project-link"
    >
      kbs+ OTT SEO Automation & Analytics
    </a>
    <span className="tech-inline"> · javascript · selenium · GA4 · GSC · aws s3 </span>
  </div>
  <p className="project-desc">launched and optimized the kbs+ ott platform with automated seo pipelines and performance dashboards</p>
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
