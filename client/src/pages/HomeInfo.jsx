import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import maison1 from '../assets/home.jpg';
import { Link } from 'react-router-dom';

const HomeInfo = () => {
    const navigate = useNavigate();

    const handle3DVisit = () => {
        navigate('/vr-visit');
    };

    const handleInPersonVisit = () => {
        // Logique pour la visite en personne
    };

    return (
        <div>
            <Navbar />
            <div style={styles.container}>
                <div style={styles.imagesSection}>
                    <div style={styles.imageGallery}>
                        <div style={styles.imageContainer}>
                            <img src={maison1} alt={`Maison`} style={styles.image} />
                            <p style={styles.price}>Prix: 4000 000 00 DA</p>
                        </div>
                    </div>
                </div>
                <div style={styles.titleSection}>
                    <h1 style={styles.title}>Appartement au coeur de Tizi Ouzou</h1>
                </div>
                <div style={styles.descriptionSection}>
                    <div style={styles.descriptionBox}>
                        <p style={styles.descriptionText}>
                            Darkoum vous propose cette charmante maison située au cœur de Tizi Ouzou. Offrant un cadre paisible et confortable, c'est l'endroit parfait pour créer des souvenirs inoubliables en famille ou entre amis. Avec ses espaces lumineux et accueillants, vous vous sentirez chez vous. De plus, elle est proche de toutes les commodités de la ville. Une maison idéale pour une vie facile et plaisante.
                        </p>
                    </div>
                </div>
                <div style={styles.actionsSection}>
                    <button style={styles.visitBtn} onClick={handle3DVisit}>Visite 3D</button>
                    <Link to="/visit" style={styles.visitBtn}>Visiter ce bien en personne</Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

const styles = {
    navbar: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px',
        marginBottom: '20px',
    },
    container: {
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
    },
    imagesSection: {
        marginTop: '70px',
        marginBottom: '20px',
    },
    imageGallery: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    imageContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '10px',
    },
    image: {
        width: '400px',
        height: '300px',
    },
    price: {
        fontSize: '24px',  
        fontWeight: 'bold', 
        marginTop: '10px',
    },
    titleSection: {
        marginTop: '-15px',
        textAlign: 'center',
        marginRight: '300px',
    },
    title: {
        fontSize: '36px',
        fontWeight: 'bold',
        marginTop: '20px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', 
    },
    descriptionSection: {
        marginBottom: '20px',
        width: '50%', 
        textAlign: 'left',
    },
    descriptionBox: {
        border: '2px solid #ccc', 
        padding: '20px',
        borderRadius: '10px', 
        marginLeft: '-250px',
        marginTop: '30px',
    },
    descriptionText: {
        marginTop: '20px',
        wordWrap: 'break-word', 
        fontFamily: 'Motserraf, sans-serif', 
        fontWeight: 'lighter',
    },
    actionsSection: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '80%',
        marginTop: '20px',
    },
    visitBtn: {
        backgroundColor: '#F27438',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        marginBottom: '10px',
        cursor: 'pointer',
        marginLeft: '10px',
        borderRadius: '10px', 
        transition: 'background-color 0.3s ease', 
    },
    visitBtnHover: {
        backgroundColor: '#D45F2B', 
    }
};

export default HomeInfo;

