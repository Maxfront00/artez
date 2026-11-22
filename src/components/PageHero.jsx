import '../styles/page-hero.css';

export default function PageHero({ label, title, subtitle }) {
  return <section className="page-hero"><div className="container"><div className="eyebrow">{label}</div><h1>{title}</h1><p>{subtitle}</p></div></section>;
}
