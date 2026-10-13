const links = [
  { label: 'Inicio', href: '#inicio', active: true },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Mis boletos', href: '#mis-boletos' },
  { label: 'Mi perfil', href: '#mi-perfil' },
];

function Navbar() {
  return (
    <nav className="main-nav" aria-label="Navegación principal">
      {links.map((link) => (
        <a
          className={link.active ? 'nav-link nav-link-active' : 'nav-link'}
          href={link.href}
          aria-current={link.active ? 'page' : undefined}
          key={link.label}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}

export default Navbar;
