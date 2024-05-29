import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import home1 from "../assets/q11.jpeg" 
import home2 from "../assets/q12.jpeg"
import home3 from "../assets/q13.jpeg"

const Propertie = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isTitleHovered, setIsTitleHovered] = useState(false);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleTitleHover = () => {
    setIsTitleHovered(true);
  };

  const handleTitleLeave = () => {
    setIsTitleHovered(false);
  };

  return (
    <div className="properties" style={{ marginTop: '100px' }}> {/* Ajoutez une marge supérieure de -20px */}
      <h2 
        className={`properties-title ${isTitleHovered ? 'orange' : ''}`} 
        style={{ marginBottom: '100px' }}
        onMouseEnter={handleTitleHover}
        onMouseLeave={handleTitleLeave}
      >
        Nos services
      </h2>
      <div className="property-list">
        <div className="property-item">
          <Link to="" className="property-link">
            <div 
              className={`image-text-wrapper ${hoveredItem === 0 ? 'hovered' : ''}`}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={() => handleMouseLeave()}
            >
              <img src={home1} alt="home1" className="property-image" />
              <div className="text-wrapper">
                <p className="property-title">visite virtuelle</p>
                <p className="property-description">
                  Découvrez une nouvelle façon révolutionnaire de visiter des propriétés avec notre application innovante. Grâce à notre fonctionnalité de visite virtuelle, vous pouvez explorer chaque recoin de votre future maison, où que vous soyez, et à tout moment qui vous convient. Plongez dans l'expérience immersive de la visite virtuelle, où vous pouvez vous promener à travers les pièces, examiner les détails et ressentir l'atmosphère de chaque espace, le tout depuis le confort de votre téléphone ou de votre ordinateur. Avec notre application, la distance ne sera plus un obstacle pour découvrir votre prochain chez-vous. Vivez l'expérience de la visite virtuelle dès aujourd'hui et ouvrez la porte vers votre avenir immobilier avec facilité et confiance.
                </p>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="property-item">
          <Link to="" className="property-link">
            <div 
              className={`image-text-wrapper ${hoveredItem === 1 ? 'hovered' : ''}`}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={() => handleMouseLeave()}
            >
              <img src={home2} alt="home2" className="property-image" />
              <div className="text-wrapper">
                <p className="property-title">bon plan</p>
                <p className="property-description">
                  Plongez dans une aventure immobilière sans pareille avec nos prix imbattables. Découvrez des offres exceptionnelles qui vont au-delà de vos attentes, vous offrant la possibilité de réaliser vos rêves de propriété à un coût qui défie toute concurrence. Avec des tarifs aussi avantageux, chaque opportunité devient une occasion à ne pas manquer. Ne laissez pas passer cette chance unique de trouver votre prochain chez-vous à un prix qui vous éblouira
                </p>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="property-item">
          <Link to="" className="property-link">
            <div 
              className={`image-text-wrapper ${hoveredItem === 2 ? 'hovered' : ''}`}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={() => handleMouseLeave()}
            >
              <img src={home3} alt="home3" className="property-image" />
              <div className="text-wrapper">
                <p className="property-title">votre maison</p>
                <p className="property-description">
                  Plongez dans le monde de l'excellence immobilière avec nos biens d'une qualité exceptionnelle. Chaque propriété que nous proposons est soigneusement sélectionnée pour répondre aux normes les plus élevées en matière de qualité de construction, de design et de confort. Avec une attention méticuleuse portée aux détails et une recherche constante de l'excellence, nos biens immobiliers offrent un niveau de raffinement et de prestige incomparable. Découvrez l'harmonie parfaite entre le luxe et le confort dans chaque espace de vie, et laissez-vous séduire par l'élégance intemporelle de nos propriétés. Avec nous, vous pouvez être assuré de trouver non seulement une maison, mais un véritable sanctuaire où vous pourrez épanouir votre style de vie et créer des souvenirs inoubliables.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <style>
        {`
          .properties {
            padding: 50px 0;
            text-align: center;
          }

          .properties-title {
            font-size: 2.7em;
            font-weight: bold;
            color: #333;
            transition: color 0.3s ease; /* Ajoutez une transition pour l'effet dynamique */
          }

          .properties-title.orange {
            color: orange; /* Définissez la couleur orange pour l'état survolé */
          }

          .property-list {
            display: flex;
            justify-content: space-around;
          }

          .property-item {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .property-link {
            text-decoration: none;
            color: inherit;
          }

          .image-text-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .property-image {
            width: 300px; 
            height: 300px; 
            object-fit: cover;
            border-radius: 50%;
            margin-bottom: 10px;
            transition: transform 0.3s ease;
          }

          .text-wrapper {
            text-align: center;
          }

          .property-title {
            font-size: 1.2em;
            font-weight: bold;
            color: #333;
            margin-bottom: 8px;
             max-width: 400px; 
          }

          .property-description {
            font-size: 1em;
            color: #666;
            max-width: 300px; 
          }

          .image-text-wrapper.hovered .property-image {
            transform: rotateY(180deg);
          }

          .property-image:hover {
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
}

export default Propertie;
