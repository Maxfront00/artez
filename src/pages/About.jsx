import PageHero from '../components/PageHero.jsx';
import Document from '../components/Document.jsx';
import '../styles/about.css';

export default function About() {
  return <>
    <PageHero label="О ПРОИЗВОДИТЕЛЕ" title={<>Вода начинается<br /><span>с источника</span></>} subtitle="Природная минеральная вода «АРТЕЗ» от ООО «Стройлюкс»." />
    <section className="section"><div className="container about-grid">
      <div><div className="eyebrow blue">ООО «СТРОЙЛЮКС»</div><h2>О нашей компании</h2>
        <p className="lead">Мы производим и предлагаем природную минеральную воду под брендом «АРТЕЗ».</p>
        <p>Здесь будет опубликована информация о местоположении скважины, происхождении воды, производстве и контроле качества.</p>
        <p>Мы открыто рассказываем о продукции и размещаем документы, подтверждающие её качество и законность производства.</p>
      </div>
      <div className="source-visual" role="img" aria-label="Иллюстрация природного источника"><div className="source-sun" /><div className="mountain one" /><div className="mountain two" /><div className="source-water" /><div className="source-caption">ПРИРОДНЫЙ ИСТОЧНИК</div></div>
    </div></section>
    <section className="documents"><div className="container">
      <div className="eyebrow blue">ОТКРЫТОСТЬ И ДОВЕРИЕ</div><h2>Документы и качество</h2>
      <p className="muted">Раздел для оригиналов документов, подтверждающих качество воды и законность деятельности производителя.</p>
      <div className="document-list">
        <Document title="Сертификаты и декларации" detail="Официальные документы на продукцию" />
        <Document title="Лабораторные исследования" detail="Результаты исследований состава и безопасности воды" />
        <Document title="Документы на скважину и производство" detail="Документы, подтверждающие законность деятельности" />
      </div>
      <p className="hint">Перед публикацией добавьте оригиналы документов в формате PDF.</p>
    </div></section>
  </>;
}
