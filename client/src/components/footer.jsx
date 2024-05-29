import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: "#F27438", 
    color: '#ffffff', 
    padding: '40px 0', 
    textAlign: 'center',
  };

  const columnStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap', 
    marginBottom: '20px', 
  };

  const columnTitleStyle = {
    fontWeight: 'bold',
    marginBottom: '10px', // Espacement sous le titre
  };

  const linkStyle = {
    color: '#ffffff', // Couleur de texte blanc par défaut
    textDecoration: 'none',
    display: 'block', // Pour rendre les liens comme des blocs pour un espacement uniforme
    marginBottom: '5px', // Espacement entre les liens
    transition: 'color 0.3s', // Transition pour une animation fluide lors du survol
  };

  const handleHover = (e) => {
    e.target.style.color = '#000000'; // Couleur de texte noir lors du survol
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = '#ffffff'; // Couleur de texte blanc après le survol
  };

  return (
    <footer style={footerStyle} className="footer" id="footer">
      <div className="footer-content" style={{ justifyContent: 'center', marginLeft: '80px' }}> {/* Alignement au centre et décalage vers la droite */}
        <div style={columnStyle}>
          <div>
            <h3 style={columnTitleStyle}>À PROPOS</h3>
            <a style={linkStyle} href="#about" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>Notre histoire</a>
            <a style={linkStyle} href="#team" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>Notre équipe</a>
            <a style={linkStyle} href="#clients" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>Nos clients</a>
          </div>
          <div>
            <h3 style={columnTitleStyle}>NOS SERVICES</h3>
            <a style={linkStyle} href="#services" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>Service 1</a>
            <a style={linkStyle} href="#services" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>Service 2</a>
            <a style={linkStyle} href="#services" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>Service 3</a>
          </div>
          <div>
            <h3 style={columnTitleStyle}>CONTACTEZ-NOUS</h3>
            <p style={{ marginBottom: '5px' }}>Adresse: Tizi Ouzou, Algeria</p>
            <p style={{ marginBottom: '5px' }}>Téléphone: +123456789</p>
            <p style={{ marginBottom: '5px' }}>Email: Tizihome@gmail.com</p>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid #ffffff', paddingTop: '20px' }}> {/* Ligne de séparation avec le contenu supérieur */}
        <p>&copy; 2024 Tizi Home. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
