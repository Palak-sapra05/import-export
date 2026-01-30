import React, { useState } from 'react';
import ShipmentTracker from '../ShipmentTracker';
import DocumentsGallery from '../DocumentsGallery';
import './Products.css';

function Products() {
  const [activeView, setActiveView] = useState('catalog'); // 'catalog', 'shipment', 'documents'

  const catalogProducts = [
    {
      id: 1,
      name: 'Industrial Stainless Steel Sheets',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=400',
      specs: {
        material: '304 / 316 / 430 Stainless Steel',
        thickness: '0.3mm - 12.0mm',
        size: '1219mm x 2438mm / Custom',
        finish: '2B, BA, No.4, HL, 8K'
      },
      btob: {
        moq: '5 Metric Tons',
        packaging: 'Standard Export Wooden Crates',
        standards: 'ASTM A240, EN 10088-2, ISO 9001',
        incoterms: 'FOB, CIF, CFR, DDP',
        payment: '30% T/T Advance, 70% L/C or T/T before shipment'
      }
    },
    {
      id: 2,
      name: 'High-Density Polyethylene (HDPE) Resin',
      image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=400',
      specs: {
        grade: 'Film / Injection / Blow Molding',
        density: '0.941 - 0.965 g/cm³',
        meltFlow: '0.1 - 20 g/10 min',
        color: 'Natural / White / Custom'
      },
      btob: {
        moq: '25 Metric Tons (1 Container)',
        packaging: '25kg PP Bags / Jumbo Bags',
        standards: 'FDA Compliant, ISO 14001',
        incoterms: 'FOB, CIF, CFR',
        payment: '100% L/C at sight or 30/70 T/T'
      }
    },
    {
      id: 3,
      name: 'Solar Panel System - Mono-crystalline',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=400',
      specs: {
        power: '450W - 670W',
        efficiency: '21.3% - 22.8%',
        cells: '144 Half-cut cells',
        warranty: '25 Years Performance'
      },
      btob: {
        moq: '1 Pallet (31-36 pcs)',
        packaging: 'Safety Pallet with Edge Protection',
        standards: 'TUV, CE, UL, IEC 61215',
        incoterms: 'CIF, DDP, EXW',
        payment: '30% Deposit, 70% against B/L copy'
      }
    }
  ];

  return (
    <div className="products-page">
      {/* Search/Toggle Navigation */}
      <div className="products-nav-container">
        <h1 className="products-main-title">B2B Trade <span className="gradient-text">Operations</span></h1>
        <div className="products-nav">
          <button
            className={`toggle-btn ${activeView === 'catalog' ? 'active' : ''}`}
            onClick={() => setActiveView('catalog')}
          >
            📦 Product Catalog
          </button>
          <button
            className={`toggle-btn ${activeView === 'shipment' ? 'active' : ''}`}
            onClick={() => setActiveView('shipment')}
          >
            🚢 Shipment Tracker
          </button>
          <button
            className={`toggle-btn ${activeView === 'documents' ? 'active' : ''}`}
            onClick={() => setActiveView('documents')}
          >
            📄 Trade Documents
          </button>
        </div>
      </div>

      {/* Display Active Component */}
      <div className="products-content">
        {activeView === 'catalog' && (
          <div className="catalog-view">
            <div className="catalog-header">
              <h2>Verified Supply Chain Catalog</h2>
              <p>Direct sourcing from ISO-certified manufacturers with guaranteed quality standards.</p>
            </div>
            <div className="catalog-grid">
              {catalogProducts.map(product => (
                <div key={product.id} className="b2b-product-card">
                  <div className="product-image-container">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <div className="product-category-badge">Verified</div>
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>

                    <div className="specs-section">
                      <h4>Technical Specifications</h4>
                      <ul>
                        {Object.entries(product.specs).map(([key, value]) => (
                          <li key={key}><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="b2b-terms-section">
                      <h4>Trade & Logistics Terms</h4>
                      <div className="terms-grid">
                        <div className="term-item">
                          <span className="term-icon">📦</span>
                          <div>
                            <span className="term-label">MOQ</span>
                            <span className="term-value">{product.btob.moq}</span>
                          </div>
                        </div>
                        <div className="term-item">
                          <span className="term-icon">🛡️</span>
                          <div>
                            <span className="term-label">Standards</span>
                            <span className="term-value">{product.btob.standards}</span>
                          </div>
                        </div>
                        <div className="term-item">
                          <span className="term-icon">🚢</span>
                          <div>
                            <span className="term-label">Incoterms</span>
                            <span className="term-value">{product.btob.incoterms}</span>
                          </div>
                        </div>
                        <div className="term-item">
                          <span className="term-icon">💳</span>
                          <div>
                            <span className="term-label">Payment</span>
                            <span className="term-value">{product.btob.payment}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="product-actions">
                      <button className="inquiry-btn">Request Price List</button>
                      <button className="sample-btn">Order Sample</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeView === 'shipment' && <ShipmentTracker />}
        {activeView === 'documents' && <DocumentsGallery />}
      </div>
    </div>
  );
}

export default Products;
