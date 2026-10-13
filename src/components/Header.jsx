import Navbar from './Navbar.jsx';

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#inicio" aria-label="EventTickets, ir al inicio">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
          </span>
          <span className="brand-name">event<span>tickets</span></span>
        </a>
        <Navbar />
        <a className="header-action" href="#eventos">
          Explorar eventos <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
