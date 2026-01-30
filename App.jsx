import React, { useState } from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';
import Products from './Products';
import Contact from './Contact';
import Admin from './Admin';
import './App.css';

function App() {
    const [activePage, setActivePage] = useState('home');

    const renderPage = () => {
        switch (activePage) {
            case 'home': return <Home />;
            case 'about': return <About />;
            case 'services': return <Services />;
            case 'products': return <Products />;
            case 'contact': return <Contact />;
            case 'admin': return <Admin />;
            default: return <Home />;
        }
    };

    return (
        <div className="app-container">
            {/* Permanent Professional Navbar */}
            <nav className="main-navbar">
                <div className="nav-logo" onClick={() => setActivePage('home')}>
                    🚀 <span className="logo-text">TRADE<span className="accent">PORTAL</span></span>
                </div>

                <div className="nav-links">
                    <button className={activePage === 'home' ? 'active' : ''} onClick={() => setActivePage('home')}>Home</button>
                    <button className={activePage === 'about' ? 'active' : ''} onClick={() => setActivePage('about')}>About</button>
                    <button className={activePage === 'services' ? 'active' : ''} onClick={() => setActivePage('services')}>Services</button>
                    <button className={activePage === 'products' ? 'active' : ''} onClick={() => setActivePage('products')}>Operations</button>
                    <button className={activePage === 'contact' ? 'active' : ''} onClick={() => setActivePage('contact')}>Inquiry</button>
                </div>

                <div className="nav-actions">
                    <button className="admin-toggle" onClick={() => setActivePage('admin')}>⚙️ Admin</button>
                </div>
            </nav>

            {/* Main Content Area */}
            <main className="content-wrapper">
                {renderPage()}
            </main>

            {/* Professional B2B Footer */}
            <footer className="main-footer">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>Trade Portal Ltd.</h3>
                        <p>Your technical gateway to global markets.</p>
                    </div>
                    <div className="footer-legal">
                        <span>© 2026 International Trade Consultancy. All rights reserved.</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
