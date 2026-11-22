import Hero from '../components/Hero.jsx';
import Catalog from '../components/Catalog.jsx';
import Benefits from '../components/Benefits.jsx';
import '../styles/home.css';

export default function Home({ setPage }) {
  return <>
    <Hero setPage={setPage} />
    <Catalog />
    <Benefits />
    <section className="cta"><div className="container cta-inner">
      <div><div className="eyebrow">АРТЕЗ · ООО «СТРОЙЛЮКС»</div><h2>Остались вопросы?</h2><p>Свяжитесь с нами по вопросам продукции и сотрудничества.</p></div>
      <button className="button primary" onClick={() => setPage('contacts')}>Наши контакты →</button>
    </div></section>
  </>;
}
