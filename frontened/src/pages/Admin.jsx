import React, { useEffect, useState } from 'react';
import { getProducts, addProduct, deleteProduct, updateProduct } from '../services/api';
import ProductCard from '../components/ProductCard';
import './Admin.css';

function Admin() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: '', description: '', category: '', price: '', image: '' });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Mock statistics
  const stats = [
    { icon: '📦', label: 'Total Products', value: products.length, color: 'blue' },
    { icon: '🚢', label: 'Active Shipments', value: '24', color: 'purple' },
    { icon: '👥', label: 'Total Users', value: '1,234', color: 'pink' },
    { icon: '💰', label: 'Revenue', value: '$45,678', color: 'green' }
  ];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      console.error('Failed to fetch products:', err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editId) {
        await updateProduct(editId, form);
        alert('✅ Product updated successfully!');
        setEditId(null);
      } else {
        await addProduct(form);
        alert('✅ Product added successfully!');
      }
      setForm({ name: '', description: '', category: '', price: '', image: '' });
      fetchProducts();
    } catch (err) {
      alert('❌ Failed to save product. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (product) => {
    setForm({
      name: product.name,
      description: product.description,
      category: product.category,
      price: product.price,
      image: product.image
    });
    setEditId(product._id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteProduct(id);
        alert('✅ Product deleted successfully!');
        fetchProducts();
      } catch (err) {
        alert('❌ Failed to delete product.');
        console.error(err);
      }
    }
  };

  const handleCancelEdit = () => {
    setForm({ name: '', description: '', category: '', price: '', image: '' });
    setEditId(null);
  };

  return (
    <div className="admin-page">
      {/* Header */}
      <div className="admin-header">
        <h1 className="admin-title">
          Admin <span className="gradient-text">Dashboard</span>
        </h1>
        <p className="admin-subtitle">Manage your products and monitor your business</p>
      </div>

      {/* Statistics Cards */}
      <div className="admin-stats">
        {stats.map((stat, index) => (
          <div key={index} className={`stat-card ${stat.color}`}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Form */}
      <div className="admin-form-section">
        <div className="form-header">
          <h2 className="form-title">
            {editId ? '✏️ Edit Product' : '➕ Add New Product'}
          </h2>
          {editId && (
            <button onClick={handleCancelEdit} className="cancel-btn">
              Cancel Edit
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Product Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-input"
                placeholder="Enter product name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="category" className="form-label">Category</label>
              <input
                id="category"
                name="category"
                type="text"
                className="form-input"
                placeholder="Enter category"
                value={form.category}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              id="description"
              name="description"
              className="form-textarea"
              placeholder="Enter product description"
              rows="3"
              value={form.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="price" className="form-label">Price ($)</label>
              <input
                id="price"
                name="price"
                type="number"
                className="form-input"
                placeholder="0.00"
                value={form.price}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="image" className="form-label">Image URL</label>
              <input
                id="image"
                name="image"
                type="url"
                className="form-input"
                placeholder="https://example.com/image.jpg"
                value={form.image}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner"></span>
                {editId ? 'Updating...' : 'Adding...'}
              </>
            ) : (
              <>
                {editId ? '💾 Update Product' : '➕ Add Product'}
              </>
            )}
          </button>
        </form>
      </div>

      {/* Products List */}
      <div className="admin-products-section">
        <h2 className="section-title">📦 Product Inventory ({products.length})</h2>

        {products.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📭</div>
            <h3>No Products Yet</h3>
            <p>Add your first product using the form above</p>
          </div>
        ) : (
          <div className="admin-products">
            {products.map((product) => (
              <div key={product._id} className="admin-product-card">
                <ProductCard product={product} />
                <div className="product-actions">
                  <button onClick={() => handleEdit(product)} className="edit-btn">
                    ✏️ Edit
                  </button>
                  <button onClick={() => handleDelete(product._id)} className="delete-btn">
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;
