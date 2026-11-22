import '../styles/hero.css';

export default function Hero({ setPage }) {
  const scrollToCatalog = () => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  return <section className="hero">
    <div className="hero-bg" aria-hidden="true" />
    <div className="container hero-content">
      <div className="eyebrow">ПРИРОДНАЯ МИНЕРАЛЬНАЯ ВОДА</div>
      <h1>Чистота природы<br /><span>в каждой капле</span></h1>
      <p>Вода «АРТЕЗ» от производителя ООО «Стройлюкс».</p>
      <div className="hero-actions">
        <button className="button primary" onClick={scrollToCatalog}>Наша продукция</button>
        <button className="button secondary" onClick={() => setPage('about')}>Узнать о воде <span>→</span></button>
      </div>
      <div className="hero-proof"><span>✓</span> Качество воды подтверждается документами</div>
    </div>
  </section>;
}
