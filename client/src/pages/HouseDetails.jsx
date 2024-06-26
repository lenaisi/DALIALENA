import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const HouseDetails = () => {
  const { id } = useParams();
  const [house, setHouse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHouseDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/admin/houses/${id}`);
        setHouse(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHouseDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <div style={{ marginBottom: "20px" }}>
        <div style={{ width: "100%", overflow: "hidden", marginBottom: "20px" }}>
          <img src={house.images} style={{ width: "100%", height: "auto", borderRadius: "10px" }} />
        </div>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "bold", color: "#000", marginBottom: "10px" }}>{house.title}</h1>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
          <p style={{ fontSize: "18px", display: "flex", alignItems: "center", color: "#000", fontWeight: "bold" }}>
            <FaLocationDot style={{ marginRight: "5px", color: "#F27438" }} />
            {house.wilaya}
          </p>
          <p style={{ fontSize: "18px", color: "#000", fontWeight: "bold" }}>
            {house.price} DA
          </p>
        </div>
        <p style={{ fontSize: "18px", marginBottom: "10px", color: "#000" }}>
          <strong>Type de bien:</strong> {house.typeBien}
        </p>
        <p style={{ fontSize: "18px", marginBottom: "20px", color: "#000" }}>
          <strong>Type d'annonce:</strong> {house.typeAnnonce}
        </p>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#000", marginBottom: "10px" }}>Description</h2>
        <p style={{ fontSize: "18px", color: "#000" }}>{house.description}</p>
        <div style={{ marginTop: "20px" }}>
          <Link to="/visit" style={{ textDecoration: "none" }}>
            <button style={{ backgroundColor: "#F27438", color: "#FFF", padding: "10px 20px", marginRight: "10px", border: "none", borderRadius: "10px", cursor: "pointer" }}>
              Visite 3D
            </button>
          </Link>
          <Link to="/visit" style={{ textDecoration: "none" }}>
            <button style={{ backgroundColor: "#F27438", color: "#FFF", padding: "10px 20px", border: "none", borderRadius: "10px", cursor: "pointer" }}>
              Visiter ce bien en personne
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HouseDetails;
