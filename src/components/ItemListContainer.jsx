import React from 'react'
import '../css/hero.css'
const ItemListContainer = ({ greeting = "¡Bienvenido a Mi Tienda!" }) => {
  return (
    <section className="hero">
      <div className="hero-inner container">
        <div className="hero-text">
          <h1 className="hero-title">{greeting}</h1>
          <p className="hero-sub">
             Innovación, diseño y rendimiento en un solo lugar.  
            Descubrí la nueva generación de tecnología pensada para potenciar tu día.
          </p>

          <div className="hero-ctas">
            <a href="/shop" className="btn btn-primary">Ver Productos</a>
            <a href="/explore" className="btn btn-outline">Explorar</a>
          </div>
        </div>

        <div className="hero-image">
          <img src="../public/hero.png" alt="Sofá verde moderno" />
        </div>
      </div>
    </section>
  );
};

export default ItemListContainer