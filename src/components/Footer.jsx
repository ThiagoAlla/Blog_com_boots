import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center p-3 mt-5" style={{ backgroundColor: '#121629', color: '#bbb' }}>
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
        <a href="https://www.chess.com/" target="_blank" rel="noopener noreferrer" className="mb-3 mb-md-0">
          <img 
            src="/icons8-xadrez-com.svg" 
            alt="Chess.com" 
            className="w-4 h-4 mx-auto filter-white" 
            style={{ fill: '#bbb' }} 
          />
          <p className="mt-1 text-xs" style={{ color: '#bbb' }}>Jogue uma partida no melhor site de xadrez do mundo!</p>        
        </a>
        <div className="d-flex flex-column justify-content-center align-items-center gap-1">
          <a href="https://github.com/ThiagoAlla" className="text-secondary hover:text-light">
            <img 
              src="/assets/icons8-github.svg" 
              alt='GitHub ThiagoAlla' 
              className="w-4 h-4 mx-auto" 
              style={{ fill: '#bbb' }} 
            /> 
          </a>
          <p className="text-xs" style={{ color: '#bbb' }}>ThiagoAlla</p> 
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center gap-1">
          <a href="https://github.com/felipe291" className="text-secondary hover:text-light">
            <img 
              src="/assets/icons8-github.svg" 
              alt='GitHub Felipe' 
              className="w-4 h-4 mx-auto" 
              style={{ fill: '#bbb' }} 
            /> 
          </a>
          <p className="text-xs" style={{ color: '#bbb' }}>Felipe</p> 
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center gap-1">
          <a href="https://github.com/Rinsano" className="text-secondary hover:text-light">
            <img 
              src="/assets/icons8-github.svg" 
              alt='GitHub Ademilson' 
              className="w-4 h-4 mx-auto" 
              style={{ fill: '#bbb' }} 
            /> 
          </a>
          <p className="text-xs" style={{ color: '#bbb' }}>Ademilson</p>
        </div>
      </div>
      <p className="mt-3 text-xs" style={{ color: '#bbb' }}>&copy; 2025 Blog - Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
