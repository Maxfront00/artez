import Logo from './Logo.jsx';
import '../styles/footer.css';

export default function Footer({ setPage }) {
  return <footer className="footer">
    <div className="container footer-top">
      <Logo />
      <nav className="footer-nav" aria-label="Навигация в подвале">
        <button onClick={() => setPage('home')}>Главная</button>
        <button onClick={() => setPage('about')}>О компании</button>
        <button onClick={() => setPage('contacts')}>Контакты</button>
      </nav>
      <span>ООО «Стройлюкс»</span>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} АРТЕЗ. Все права защищены.</span><span>Природная минеральная вода</span></div>
  </footer>;
}
