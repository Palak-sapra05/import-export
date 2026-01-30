import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";

// New Trade Portal Components
import ShipmentTracker from "./ShipmentTracker";
import DocumentsGallery from "./DocumentsGallery";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />

        {/* Trade Portal Routes */}
        <Route path="/shipment" element={<ShipmentTracker />} />
        <Route path="/documents" element={<DocumentsGallery />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

