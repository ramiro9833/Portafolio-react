import "./App.css";
import profile from "./assets/profile.jpg";

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
    </div>
  );
}
