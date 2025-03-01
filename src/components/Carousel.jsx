import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

const Carousel = () => {
  const [postagens, setPostagens] = useState([]);

  useEffect(() => {
    import('../postagens/todas_postagens.json')
      .then((module) => setPostagens(module.default))
      .catch((err) => console.error("Erro ao carregar as postagens", err));
  }, []);

  const postagensLimitadas = postagens.filter(post => [1, 2, 3, 4, 5].includes(post.id));

  return (
    <div 
      id="carouselExampleIndicators" 
      className="carousel slide" 
      data-bs-ride="carousel" 
      style={{ maxWidth: '900px', margin: '0 auto' }} 
    >
      <div className="carousel-indicators">
        {postagensLimitadas.map((post, index) => (
          <button
            key={post.id}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {postagensLimitadas.map((post, index) => (
          <div key={post.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <Link to={`/postagem/${post.id}`}>
              <img 
                src={post.imagem} 
                className="d-block w-100" 
                alt={post.titulo} 
                style={{ 
                  objectFit: 'contain', 
                  width: '100%', 
                  height: '400px'
                }} 
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{post.titulo}</h5>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
