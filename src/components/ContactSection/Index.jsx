import { ArrowUpRight, Mail, Phone } from "lucide-react";

const ContactSection = () => (
  <section className="contact-section section" aria-labelledby="contact-title">
    <div className="container">
      <div className="contact-panel">
        <div className="contact-copy">
          <p className="eyebrow">Get in touch</p>
          <h2 className="contact-title" id="contact-title">
            Let&apos;s make something meaningful.
          </h2>
          <div className="contact-details">
            <a href="mailto:Kartiksai619@gmail.com">
              <Mail size={15} aria-hidden="true" /> Kartiksai619@gmail.com
            </a>
            <a href="tel:+919106960869">
              <Phone size={15} aria-hidden="true" /> +91 9106960869
            </a>
          </div>
        </div>
        <div className="contact-action">
          <a className="button button-primary" href="mailto:Kartiksai619@gmail.com">
            Say hello <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
