function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img 
        src={product.image || 'https://via.placeholder.com/150'} 
        alt={product.name} 
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductCard;
