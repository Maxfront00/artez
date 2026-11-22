import '../styles/benefits.css';

const benefits = [
  { icon: '⌖', title: 'Природный источник', text: 'Рассказываем о происхождении воды и нашей скважине.' },
  { icon: '✓', title: 'Контроль качества', text: 'Сертификаты и лабораторные исследования продукции.' },
  { icon: '◇', title: 'От производителя', text: 'ООО «Стройлюкс» — производитель воды «АРТЕЗ».' },
];

export default function Benefits() {
  return <section className="benefits"><div className="container benefits-grid">
    {benefits.map(item => <article key={item.title}><span className="benefit-icon">{item.icon}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
  </div></section>;
}
