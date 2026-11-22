import '../styles/product-card.css';

export default function ProductCard({ product }) {
  const bottleClass = product.volume.replace(/[^0-9]/g, '');
  return <article className="product-card">
    <div className="product-picture" aria-label={`Бутыль воды ${product.volume}`}>
      <div className={`bottle bottle-${bottleClass}`} aria-hidden="true">
        <div className="cap" /><div className="bottle-neck" />
        <div className="label"><span>▲</span><b>АРТЕЗ</b><small>ПРИРОДНАЯ ВОДА</small></div>
        <strong className="volume">{product.volume}</strong>
      </div>
    </div>
    <div className="product-info"><div><h3>АРТЕЗ {product.volume}</h3><p>{product.description}</p></div><span className="price">Цена по запросу</span></div>
  </article>;
}
