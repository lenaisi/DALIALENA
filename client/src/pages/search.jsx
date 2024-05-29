import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaLocationDot, FaHeart, FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Footer from '../components/footer'; 

const Search = ({ userId }) => {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/auth/houses");
        setHouses(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    const fetchFavorites = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/auth/${userId}`);
        setFavorites(response.data.favorites.map(fav => fav._id));
      } catch (err) {
        console.error("Erreur lors de la récupération des favoris:", err);
      }
    };

    fetchHouses();
    fetchFavorites();
  }, [userId]);

  const handleFavorite = async (houseId) => {
    try {
      if (favorites.includes(houseId)) {
        await axios.post("http://localhost:5000/api/v1/auth/favorites/remove", { userId, houseId });
        setFavorites(favorites.filter(fav => fav !== houseId));
      } else {
        await axios.post("http://localhost:5000/api/v1/auth/favorites/add", { userId, houseId });
        setFavorites([...favorites, houseId]);
      }
    } catch (err) {
      console.error("Erreur lors de la mise à jour des favoris:", err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const groupedHouses = houses.reduce((acc, house) => {
    if (!acc[house.typeBien]) {
      acc[house.typeBien] = [];
    }
    acc[house.typeBien].push(house);
    return acc;
  }, {});

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "36px", fontWeight: "bold", textAlign: "center", marginBottom: "40px" }}>Nos biens disponibles</h1>
      
      {Object.keys(groupedHouses).map((category) => (
        <div key={category} style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#333", textAlign: "center", marginBottom: "20px", textTransform: "capitalize" }}>{category}</h2>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
            {groupedHouses[category].map((house) => (
              <div key={house._id} style={{ marginRight: "20px", marginBottom: "20px", width: "200px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", borderRadius: "10px", overflow: "hidden" }}>
                <Link to={`/HouseDetails/${house._id}`} style={{ textDecoration: "none", color: "#333" }}>
                  <img
                    src={`http://localhost:3000/${house.images}`}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <div style={{ padding: "15px" }}>
                    <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>{house.title}</h3>
                    <p style={{ marginBottom: "10px", display: "inline-flex", alignItems: "center" }}>
                      <span style={{ marginRight: "5px", color: "#F27438" }}>
                        <FaLocationDot />
                      </span>
                      {house.wilaya}
                    </p>
                  </div>
                </Link>
                <button onClick={() => handleFavorite(house._id)} style={{ background: "none", border: "none", cursor: "pointer" }}>
                  {favorites.includes(house._id) ? (
                    <FaHeart style={{ color: "#F27438" }} />
                  ) : (
                    <FaRegHeart />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Search;
