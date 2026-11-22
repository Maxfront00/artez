import Logo from '../components/Logo.jsx';
import PageHero from '../components/PageHero.jsx';
import '../styles/contacts.css';

export default function Contacts() {
  return <>
    <PageHero label="БУДЕМ НА СВЯЗИ" title="Контакты" subtitle="Свяжитесь с нами по вопросам приобретения воды и сотрудничества." />
    <section className="section"><div className="container contact-grid">
      <div><div className="eyebrow blue">ПРОИЗВОДИТЕЛЬ</div><h2>ООО «Стройлюкс»</h2><p className="muted">Оптовые и розничные обращения, вопросы о продукции и сотрудничестве.</p>
        <div className="contact-details">
          <div><small>Телефон</small><b>Добавить номер телефона</b></div>
          <div><small>Электронная почта</small><b>Добавить адрес почты</b></div>
          <div><small>Адрес производства</small><b>Добавить адрес</b></div>
        </div>
      </div>
      <aside className="contact-card"><Logo /><h3>Открыты к сотрудничеству</h3><p>Будем рады ответить на ваши вопросы.</p><div className="map-placeholder">Здесь можно разместить карту или схему проезда</div></aside>
    </div></section>
  </>;
}
