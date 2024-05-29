import React from 'react';
import axios from 'axios';
import cookie from 'js-cookie';


  
export const Logout = async () => {
    console.log("sur logouuut");
        try {
            await axios.get('http://localhost:5000/api/v1/auth/logout', { withCredentials: true });
            cookie.remove('jwt', { expires: 1 });
            console.log('Déconnexion réussie');
            window.location = '/';
        } catch (error) {
            console.error('Erreur lors de la déconnexion :', error);
        }
    };
    

export default Logout;
