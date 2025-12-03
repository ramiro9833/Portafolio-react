import "./App.css";
import profile from "./assets/profile.jpg";
import { FaInstagram, FaFacebook, FaXTwitter, FaGithub } from "react-icons/fa6";

export default function App() {
  return (
    <div>
      <header className="header">
        <img src={profile} className="profile" />
        <h1>Ramiro Flores Mendoza</h1>
        <p>Software Engineer · Fullstack Developer</p>
      </header>

      <section className="box">
        <h2>About Me</h2>
        <p>
          Junior Software Developer experienced in Fullstack Web Development,
          API design, relational databases, and Linux servers.
        </p>
      </section>

      <section className="box">
        <h2>Projects</h2>

        <div className="project">
          <h3>GearShare</h3>
          <p>Fullstack marketplace for object rentals.</p>
          <a href="https://github.com/ramiro9833/GearShare">GitHub</a>
        </div>

        <div className="project">
          <h3>InstaStay</h3>
          <p>Vacation rental reservation system.</p>
          <a href="https://github.com/ramiro9833/insta-stay">GitHub</a>
        </div>
      </section>

      <div className="social-container">
        <a href="https://www.instagram.com/ramiroflores5317?igsh=eDBrMmlzczRidzA3" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>

        <a href="https://www.facebook.com/share/1CJuHWU7fS/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="social-icon" />
        </a>

        <a href="https://x.com/Ramirof94791618?t=PaxjKXG0xo_0-xqJUIbSZQ&s=09" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="social-icon" />
        </a>

        <a href="https://github.com/ramiro9833" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
        </a>
      </div>
    </div>
  );
}
