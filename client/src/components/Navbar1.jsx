import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from "../assets/DARKOUM1.png";


const Navbar1 = () => {
    return (
        <nav style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            backgroundColor: 'white',
            color: 'black',
            padding: '15px 15px',
            zIndex: 1000,
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center' 
        }}>
            <img src={logo} alt="Logo" style={{ marginRight: 20 , width:100, marginTop:0}} />
            <ul style={{ 
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <li style={{ marginRight:30, fontWeight: 'bold' }}>
                    <Link to="/Home" style={{ textDecoration: 'none', color: 'black', position: 'relative' }}>
                        Accueil
                        <span style={{ position: 'absolute', bottom: -2, left: 0, width: '100%', height: 2, backgroundColor: 'black', transform: 'scaleX(0)', transition: 'transform 0.3s ease' }}></span>
                    </Link>
                </li>
                <li style={{ marginRight:30, fontWeight: 'bold', marginLeft: 30 }}>
                    <Link to="/NosServices" style={{ textDecoration: 'none', color: 'black', position: 'relative' }}>
                        Nos services
                        <span style={{ position: 'absolute', bottom: -2, left: 0, width: '100%', height: 2, backgroundColor: 'black', transform: 'scaleX(0)', transition: 'transform 0.3s ease' }}></span>
                    </Link>
                </li>
                <li style={{ fontWeight: 'bold', marginLeft: 30 }}>
                    <Link to="/AboutUs" style={{ textDecoration: 'none', color: 'black', position: 'relative' }}>
                        À propos
                        <span style={{ position: 'absolute', bottom: -2, left: 0, width: '100%', height: 2, backgroundColor: 'black', transform: 'scaleX(0)', transition: 'transform 0.3s ease' }}></span>
                    </Link>
                </li>
            </ul>

            <Link to="/sign-in" style={{ textDecoration: 'none' }}>
                <button className="login-btn" style={{ 
                    backgroundColor: 'darkorange',
                    color: 'white',
                    border: 'none',
                    padding: '8px 15px',
                    borderRadius: 5,
                    cursor: 'pointer',
                    fontWeight: 'bold'
                }}>Se connecter</button>
            </Link>
        </nav>
    );
}

export default Navbar1;
