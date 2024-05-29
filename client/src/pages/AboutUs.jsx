import React, { useState } from 'react';
import Navbar from '../components/Navbar1';
import Footer from '../components/footer';
import videoFile from '../assets/vidi.mp4'; // Assurez-vous que le chemin est correct

const AboutUss = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={styles.container}>
      <div className="navbar">
        <Navbar />
      </div>
      
      <div style={styles.videoContainer}>
        <video style={styles.video} autoPlay muted loop>
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={styles.textOverlay}>
          <h1
            style={{ ...styles.text, color: isHovered ? 'orange' : 'white', marginTop: '20px' }}
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
          >
            A propos de nous 
          </h1>
          <div style={styles.space}></div> {/* Espace entre les deux textes */}
          <h2 style={styles.subText}>Darkoum est bien plus qu'une simple plateforme d'achat et de location de biens immobiliers. Nous sommes des pionniers dans l'ère numérique de l'immobilier, mettant en avant l'innovation et la technologie pour transformer radicalement la façon dont les individus découvrent, achètent et louent des propriétés. Notre application intègre une expérience de réalité virtuelle immersive, permettant aux utilisateurs d'explorer virtuellement des maisons, des appartements et des espaces commerciaux avec un niveau de détail sans précédent. Grâce à notre technologie de pointe, les clients peuvent visualiser chaque pièce, sentir l'atmosphère et même personnaliser leur espace avant de prendre une décision. Chez Darkoum, nous croyons en la puissance de l'innovation pour faciliter les transitions résidentielles et commerciales en offrant une expérience transparente, engageante et sécurisée pour tous nos utilisateurs. Nous nous engageons à repousser les limites de l'immobilier traditionnel et à créer un avenir où trouver la propriété parfaite devient une aventure passionnante et accessible à tous.</h2>
        </div>
      </div>
      
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  videoContainer: {
    position: 'relative',
    width: '100%',
    minHeight: 'calc(100vh - 80px)', // Ajustez la hauteur minimale pour inclure le texte entier
    overflow: 'hidden', // Assurez-vous que le texte ne dépasse pas du conteneur
  },
  video: {
    width: '100%', // Ajustez la taille de la vidéo pour s'adapter à la largeur du conteneur
    maxHeight: '200vh', // Réduire légèrement la hauteur maximale de la vidéo
    objectFit: 'cover',
  },
  textOverlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
  text: {
    fontSize: '2rem', // Adjust the font size as needed
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Adds a shadow for better readability
    margin: 0, // Remove default margin
    cursor: 'pointer', // Change cursor on hover
    transition: 'color 0.3s ease', // Smooth transition for color change
  },
  subText: {
    fontSize: '1.5rem', // Adjust the font size as needed
    fontWeight: 'normal',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Adds a shadow for better readability
    margin: 0, // Remove default margin
  },
  space: {
    height: '50px', // Espace entre les deux textes
  },
};

export default AboutUss;
