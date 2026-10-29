import React from "react";

const projects = [
  {
    title: "Officegap",
    description:
      "A low-code ERP platform for configuring and managing business workflows.",
    visual: "nova",
  },
  {
    title: "IoT Konnectware",
    description:
      "A cloud platform for connecting and managing smart devices in real time.",
    visual: "harmonix",
  },
  {
    title: "AI Healthcare Diary App",
    description:
      "An AI-powered diary for patient records, health insights, and doctor-patient communication.",
    visual: "vault",
  },
];

const skills = [
  "Angular 19",
  "dotnet core 10",
  "ms SQL Server",
  "Azure Cloud Services",
  "Java Spring Boot",
  "PostgreSQL",
  "React 19",
  "Next.js App Router",
  "TypeScript 5.x",
  "Tailwind CSS",
  "Node.js Microservices",
];

function Icon({ name, size = 16 }) {
  const paths = {
    home: <><path d="M3 4.5h10v8H3z" /><path d="M5.5 7h5M5.5 9.5h3" /></>,
    projects: <><rect x="3" y="3" width="10" height="10" rx="1.5" /><path d="m6 10 2-2 2 2M8 8V5.5" /></>,
    about: <><path d="M8 2.5 13.5 8 8 13.5 2.5 8 8 2.5Z" /><path d="M8 5.5v5M5.5 8h5" /></>,
    contact: <><circle cx="8" cy="8" r="5.5" /><path d="M10.7 10.7 13.5 13.5M6.1 8h3.8" /></>,
    arrow: <><path d="M3 8h10M9 4l4 4-4 4" /></>,
    file: <><path d="M4 2.5h6l3 3v9H4z" /><path d="M10 2.5v3h3M6 8h5M6 10.5h5" /></>,
    cube: <><path d="m8 2.5 5.5 3.1v4.8L8 13.5l-5.5-3.1V5.6L8 2.5Z" /><path d="m2.8 5.7 5.2 3 5.2-3M8 8.7v4.5" /></>,
    chat: <><path d="M3 3.5h10v7H8l-3.5 2v-2H3z" /><path d="M5.5 6.5h5" /></>,
    play: <><path d="m6 4.5 5 3.5-5 3.5z" /></>,
  };

  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

function ProjectArtwork({ type }) {
  if (type === "vault") {
    return (
      <div className="artwork artwork-vault" aria-hidden="true">
        <div className="project-preview">
          <img src="/assets/ai-healthcare-diary.png" alt="AI Healthcare Diary app interface" />
        </div>
      </div>
    );
  }

  if (type === "nova") {
    return (
      <div className="artwork artwork-nova" aria-hidden="true">
        <div className="project-preview project-preview-officegap">
          <img src="/assets/officegap.png" alt="Officegap application dashboard" />
        </div>
      </div>
    );
  }

  return (
    <div className="artwork artwork-harmonix" aria-hidden="true">
      <div className="project-preview project-preview-konnectware">
        <img src="/assets/konnectware.png" alt="IoT Konnectware application interface" />
      </div>
    </div>
  );
}

function BottomNav() {
  const links = [
    ["home", "Home", "#home"],
    ["projects", "Projects", "#projects"],
    ["about", "About", "#about"],
    ["contact", "Contact", "#contact"],
  ];

  return (
    <nav className="bottom-nav" aria-label="Mobile navigation">
      {links.map(([icon, label, href], index) => (
        <a className={index === 0 ? "active" : ""} href={href} key={label}>
          <Icon name={icon} size={16} />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  );
}

function App() {
  return (
    <>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Smitha P Antony home">
          <span className="brand-mark">SA</span>
          <span className="brand-copy"><span><i /> Available</span><strong>Home</strong></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a className="current" href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="avatar" href="#contact" aria-label="Contact Smitha P Antony">SA</a>
      </header>

      <main id="home">
        <div className="page-shell">
          <section className="intro-grid" aria-label="Introduction">
            <article className="profile-card">
              <div className="profile-top">
                <div className="portrait" role="img" aria-label="Portrait of Smitha P Antony">
                  <img src="/assets/profile-photo.jpe" alt="Smitha P Antony" />
                </div>
                <div className="availability-block">
                  <span className="availability-pill"><i /> Open for Work</span>
                  <span>Kochi or Remote</span>
                </div>
              </div>
              <p className="eyebrow">Hi, I am</p>
              <h1>Smitha P A</h1>
              <p className="role">Senior Team Lead &amp; Full-Stack Builder</p>
              <p className="bio">
                Technical Leadership & Team Management | Full-Stack Development | Angular | .NET Core | Java Spring Boot | Microservices Architecture | REST API Development | SQL Databases | Event-Driven Architecture | Application Performance Optimization | AI-Assisted Application Development | Agile Delivery.
              </p>
              <div className="profile-actions">
                <a className="button button-primary" href="#projects">View Projects <Icon name="arrow" /></a>
                <a className="button button-secondary" href="mailto:smithafebinkal20.20@gmail.com"><Icon name="play" size={13} /> Get in Touch</a>
              </div>
              <a className="cv-link" href="/assets/Smitha_P_Antony_Resume_Team_Lead.pdf" download>
                <Icon name="file" size={12} /> Download Technical CV (PDF · 121 KB)
              </a>
              <div id="contact" className="contact-details">
                <div className="contact-status">
                  <span><i /> +91 9847766315</span>
                </div>
                <p>Ruby 4, Jairaj Starling, Padamugal, Kunnumpuram, Kakkanad.</p>
                <a className="button button-primary" href="mailto:smithafebinkal20.20@gmail.com">
                  Email Me
                </a>
              </div>
            </article>

            <div className="intro-aside">
              <section id="about" className="stack-section" aria-labelledby="stack-title">
                <div className="section-heading">
                  <h2 id="stack-title"><Icon name="cube" size={16} /> Core Stack</h2>
                  <span>7 Primary</span>
                </div>
                <div className="skill-list">
                  {skills.map((skill, index) => (
                    <span className="skill-chip" key={skill}>{skill}{index < 2 && <i />}</span>
                  ))}
                </div>
              </section>

              <div className="stats-grid" aria-label="Career highlights">
                <div className="stat-card"><strong>18+</strong><span>Years exp.</span></div>
                <div className="stat-card"><strong>20+</strong><span>Projects</span></div>
              </div>

              <section id="projects" className="projects-section">
                <div className="projects-heading">
                  <div>
                    <p className="eyebrow">Selected work</p>
                    <h2>Projects</h2>
                  </div>
                </div>
                <div className="project-grid">
                  {projects.map((project) => (
                    <article className="project-card" key={project.title}>
                      <div className={`project-art ${project.visual}`}>
                        <ProjectArtwork type={project.visual} />
                      </div>
                      <div className="project-content">
                        <h3>{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </section>

        </div>
      </main>
      <BottomNav />
    </>
  );
}

export default App;
