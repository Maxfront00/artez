import Logo from './Logo.jsx';
import '../styles/header.css';

const links = [{ id: 'home', label: 'Главная' }, { id: 'about', label: 'О компании' }, { id: 'contacts', label: 'Контакты' }];

export default function Header({ page, setPage }) {
  return <header className="header">
    <div className="container header-inner">
      <button className="logo-button" onClick={() => setPage('home')} aria-label="На главную"><Logo /></button>
      <nav className="main-nav" aria-label="Основная навигация">
        {links.map(link => <button key={link.id} className={page === link.id ? 'active' : ''} onClick={() => setPage(link.id)}>{link.label}</button>)}
      </nav>
      <a className="header-link" href="tel:+70000000000">Связаться с нами</a>
    </div>
  </header>;
}
