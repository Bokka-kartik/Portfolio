import { ArrowDown, ArrowUpRight, Code2, MapPin } from "lucide-react";
import ProfilePhotoCarousel from "./ProfilePhotoCarousel";

const Hero = () => (
  <section className="hero container" aria-labelledby="hero-title">
    <div className="hero-copy">
      <p className="hero-kicker">
        <span className="availability-dot" aria-hidden="true" />
        Software developer · India
      </p>
      <h1 className="hero-title" id="hero-title">
        Ideas into
        <span>useful software.</span>
      </h1>
      <p className="hero-description">
        Hey, I&apos;m Kartik Sai. I build thoughtful web experiences and the
        reliable systems behind them, from polished interfaces to practical
        APIs.
      </p>
      <div className="hero-actions">
        <a className="button button-primary" href="#projects">
          Explore my work <ArrowDown size={17} aria-hidden="true" />
        </a>
        <a
          className="button button-secondary"
          href="/documents/KartikSai_CV.pdf"
          target="_blank"
          rel="noreferrer"
        >
          View résumé <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
      <div className="hero-meta" aria-label="Location and focus">
        <span><MapPin size={14} aria-hidden="true" /> India</span>
        <span><Code2 size={14} aria-hidden="true" /> Web · APIs · ML</span>
      </div>
    </div>

    <div className="hero-visual">
      <ProfilePhotoCarousel />
      <div className="portrait-note">
        <span className="portrait-note-icon">
          <Code2 size={19} aria-hidden="true" />
        </span>
        <span>
          <strong>Curious by default</strong>
          <small>Building, learning, improving</small>
        </span>
      </div>
    </div>
  </section>
);

export default Hero;
