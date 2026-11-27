const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-inner">
      <span>© {new Date().getFullYear()} Kartik Sai</span>
      <div className="footer-links">
        <a
          href="https://github.com/Bokka-kartik"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a href="#hero">Back to top ↑</a>
      </div>
    </div>
  </footer>
);

export default Footer;
