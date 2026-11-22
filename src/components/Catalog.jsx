import ProductCard from './ProductCard.jsx';
import '../styles/catalog.css';

const products = [
  { volume: '0,5 л', description: 'Удобно взять с собой' },
  { volume: '1,5 л', description: 'На каждый день' },
  { volume: '5 л', description: 'Для дома и семьи' },
  { volume: '19 л', description: 'Для дома и офиса' },
];

export default function Catalog() {
  return <section className="section catalog" id="catalog">
    <div className="container">
      <div className="section-title">
        <div><div className="eyebrow blue">НАША ПРОДУКЦИЯ</div><h2>Выберите свой объём</h2></div>
        <p>Вода «АРТЕЗ» в удобном формате для дома, работы и повседневной жизни.</p>
      </div>
      <div className="products">{products.map(product => <ProductCard key={product.volume} product={product} />)}</div>
    </div>
  </section>;
}
