function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a className="brand footer-brand" href="#inicio" aria-label="EventTickets, ir al inicio">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
          </span>
          <span className="brand-name">event<span>tickets</span></span>
        </a>
        <p>Hecho para vivirlo en vivo.</p>
        <span className="footer-copy">© {new Date().getFullYear()} EventTickets · Proyecto escolar</span>
      </div>
    </footer>
  );
}

export default Footer;
