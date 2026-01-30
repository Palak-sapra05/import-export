import React, { useEffect, useState } from 'react';
import './Admin.css';

// Mock Services for API-less environment
const mockApi = {
    getProducts: () => JSON.parse(localStorage.getItem('products') || '[]'),
    addProduct: (p) => {
        const products = JSON.parse(localStorage.getItem('products') || '[]');
        const newProduct = { ...p, _id: Date.now().toString() };
        products.push(newProduct);
        localStorage.setItem('products', JSON.stringify(products));
        return newProduct;
    },
    deleteProduct: (id) => {
        const products = JSON.parse(localStorage.getItem('products') || '[]');
        const filtered = products.filter(p => p._id !== id);
        localStorage.setItem('products', JSON.stringify(filtered));
    },
    updateProduct: (id, p) => {
        const products = JSON.parse(localStorage.getItem('products') || '[]');
        const index = products.findIndex(p => p._id === id);
        products[index] = { ...p, _id: id };
        localStorage.setItem('products', JSON.stringify(products));
    }
};

function Admin() {
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({ name: '', description: '', category: '', price: '', image: '' });
    const [editId, setEditId] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        setProducts(mockApi.getProducts());
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            if (editId) {
                mockApi.updateProduct(editId, form);
                setEditId(null);
            } else {
                mockApi.addProduct(form);
            }
            setForm({ name: '', description: '', category: '', price: '', image: '' });
            fetchProducts();
            setLoading(false);
        }, 500);
    };

    const handleEdit = (product) => {
        setForm(product);
        setEditId(product._id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = (id) => {
        if (window.confirm('Delete this product?')) {
            mockApi.deleteProduct(id);
            fetchProducts();
        }
    };

    return (
        <div className="admin-page">
            <div className="admin-header">
                <h1>Admin <span className="gradient-text">Dashboard</span></h1>
                <p>Simplified product management for your B2B trade portal.</p>
            </div>

            <div className="admin-form-section">
                <h2>{editId ? '✏️ Edit Product' : '➕ Add New Product'}</h2>
                <form onSubmit={handleSubmit} className="admin-form">
                    <input name="name" className="form-input" placeholder="Product Name" value={form.name} onChange={handleChange} required />
                    <input name="category" className="form-input" placeholder="Category" value={form.category} onChange={handleChange} required />
                    <textarea name="description" className="form-textarea" placeholder="B2B Specifications" value={form.description} onChange={handleChange} required />
                    <div className="form-row">
                        <input name="price" type="number" className="form-input" placeholder="Price ($)" value={form.price} onChange={handleChange} required />
                        <input name="image" className="form-input" placeholder="Image URL" value={form.image} onChange={handleChange} />
                    </div>
                    <button type="submit" className="submit-btn">{loading ? 'Saving...' : 'Save Product'}</button>
                </form>
            </div>

            <div className="admin-products-section">
                <h2>Inventory ({products.length})</h2>
                <div className="admin-products">
                    {products.map(p => (
                        <div key={p._id} className="admin-product-card">
                            <h3>{p.name}</h3>
                            <p>{p.category}</p>
                            <div className="product-actions">
                                <button onClick={() => handleEdit(p)} className="edit-btn">Edit</button>
                                <button onClick={() => handleDelete(p._id)} className="delete-btn">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Admin;
