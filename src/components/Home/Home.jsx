import React from "react";
import "./home.css";

export default function Home() {
  const year = new Date().getFullYear();

  const projects = [
    {
      title: "CodeRealm – Coding Playground + J.A.D.A.",
      subtitle: "Interactive editor • live preview • chatbot experience",
      description:
        "A developer-focused coding playground showcasing practical full-stack skills and creative UI work. Built with a clean component architecture and real deployment.",
      highlights: [
        "Monaco editor experience + live preview workflow",
        "Node/Express API + MySQL integration",
        "Three.js / Blender integration concept",
      ],
      tech: "React • Vite • Node • Express • MySQL • Three.js • Monaco",
      liveUrl: "https://coderealm-e7af.onrender.com",
      repoUrl: "#", // TODO: add GitHub link
    },
    {
      title: "Project Placeholder – Case Study",
      subtitle: "Add a second strong project",
      description:
        "Use this for a smaller but polished app. Recruiters love clear problems, clean UI, and a short technical story.",
      highlights: ["Problem → solution narrative", "API integration", "Responsive layout + accessibility basics"],
      tech: "JavaScript • REST • CSS",
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Project Placeholder – Full-Stack Demo",
      subtitle: "Compact full-stack example",
      description:
        "Keep this focused: auth, CRUD, database schema, validation, and deploy it. Make it boring and solid.",
      highlights: ["Auth + protected routes", "DB schema + queries", "Validation + error handling"],
      tech: "Node • Express • MySQL",
      liveUrl: "#",
      repoUrl: "#",
    },
  ];

  const skills = [
    { label: "Frontend", value: "React, JavaScript (ES6+), HTML5, CSS3, responsive UI" },
    { label: "Backend", value: "Node.js, Express, REST APIs, JWT, MySQL" },
    { label: "Tools", value: "Git/GitHub, VS Code, AWS (S3/Aurora), Blender, Three.js" },
  ];

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="homeWarm" id="top">
      <header className="topbar">
        <div className="wrap topbar__inner">
          <a className="wordmark" href="#top" onClick={(e) => e.preventDefault()}>
            <span className="wordmark__name">Avdyl Zekaj</span>
            <span className="wordmark__role">Full-Stack Developer</span>
          </a>

          <nav className="nav" aria-label="Primary navigation">
            <button className="nav__link" onClick={() => scrollToId("work")}>
              Work
            </button>
            <button className="nav__link" onClick={() => scrollToId("skills")}>
              Skills
            </button>
            <button className="nav__link" onClick={() => scrollToId("about")}>
              About
            </button>
            <button className="nav__link nav__link--cta" onClick={() => scrollToId("contact")}>
              Contact
            </button>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="wrap">
          <p className="kicker">Germany • Remote / On-site • DE / EN (C2)</p>

          <h1 className="headline">
            Modern web development,
            <br />
            delivered with <span className="headline__accent">taste and discipline</span>.
          </h1>

          <p className="subhead">
            I build React interfaces that feel calm and professional, backed by Node/Express APIs and MySQL.
            I care about structure, readability, and shipping real features—no noise.
          </p>

          <div className="hero__actions">
            <button className="btn btn--primary" onClick={() => scrollToId("work")}>
              View Work
            </button>
            <a className="btn btn--ghost" href="mailto:a.zekaj@freenet.de">
              a.zekaj@freenet.de
            </a>
          </div>

          <div className="hero__meta" aria-label="Key info">
            <div className="metaItem">
              <span className="metaItem__label">Focus</span>
              <span className="metaItem__value">React • Node • MySQL</span>
            </div>
            <div className="metaItem">
              <span className="metaItem__label">Location</span>
              <span className="metaItem__value">Germany (near Ulm)</span>
            </div>
            <div className="metaItem">
              <span className="metaItem__label">Links</span>
              <span className="metaItem__value">
                <a href="https://linkedin.com/in/avdyl-zekaj-669b18334" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <span aria-hidden="true"> · </span>
                <a href="https://coderealm-e7af.onrender.com" target="_blank" rel="noreferrer">
                  CodeRealm
                </a>
                <span aria-hidden="true"> · </span>
                <a href="#" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="work">
        <div className="wrap">
          <div className="sectionHead">
            <h2 className="sectionTitle">Selected Work</h2>
            <p className="sectionLead">
              A small set of projects, presented like case studies—clear, factual, and easy to scan.
            </p>
          </div>

          <div className="workList">
            {projects.map((p) => (
              <article className="workItem" key={p.title}>
                <div className="workItem__left">
                  <h3 className="workItem__title">{p.title}</h3>
                  <p className="workItem__subtitle">{p.subtitle}</p>
                </div>

                <div className="workItem__right">
                  <p className="workItem__desc">{p.description}</p>

                  <ul className="workItem__bullets">
                    {p.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>

                  <p className="workItem__tech">{p.tech}</p>

                  <div className="workItem__actions">
                    <a className="textLink" href={p.liveUrl} target="_blank" rel="noreferrer">
                      Live ↗
                    </a>
                    <a className="textLink" href={p.repoUrl} target="_blank" rel="noreferrer">
                      Repo ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="wrap">
          <div className="sectionHead">
            <h2 className="sectionTitle">Skills</h2>
            <p className="sectionLead">No buzzwords—just what I actually use.</p>
          </div>

          <div className="facts">
            {skills.map((s) => (
              <div className="fact" key={s.label}>
                <div className="fact__label">{s.label}</div>
                <div className="fact__value">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="wrap">
          <div className="sectionHead">
            <h2 className="sectionTitle">About</h2>
            <p className="sectionLead">
              I like building complete features end-to-end—with clean structure and a calm UI.
            </p>
          </div>

          <div className="about">
            <p>
              I’m a full-stack developer focused on React, JavaScript, Node/Express, and MySQL. I enjoy turning ideas
              into usable products: clear UI, sensible architecture, and a reliable backend.
            </p>
            <p>
              I’m looking for full-stack developer roles across Germany (remote or on-site). I work comfortably in German
              and English.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--contact" id="contact">
        <div className="wrap">
          <div className="contact">
            <div className="contact__left">
              <h2 className="sectionTitle">Contact</h2>
              <p className="sectionLead">
                If you’re hiring or want to talk about a project, send a message.
              </p>
            </div>

            <div className="contact__right">
              <a className="btn btn--primary btn--full" href="mailto:a.zekaj@freenet.de">
                Email: a.zekaj@freenet.de
              </a>
              <a className="btn btn--ghost btn--full" href="tel:+491712248684">
                Phone: +49 171 224 86 84
              </a>
              <a
                className="btn btn--ghost btn--full"
                href="https://linkedin.com/in/avdyl-zekaj-669b18334"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <p className="footerNote">© {year} Avdyl Zekaj</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
