import React, { useState } from 'react';

const PriceSelector = ({ onChange }) => {
    const [minPrice, setMinPrice] = useState(''); // État pour suivre la valeur de Prix min
    const [maxPrice, setMaxPrice] = useState(''); // État pour suivre la valeur de Prix max

    const handleMinPriceChange = (event) => {
        const minValue = event.target.value;
        setMinPrice(minValue); // Mettre à jour la valeur de Prix min
        onChange(minValue, maxPrice); // Appel de la fonction de rappel avec les nouvelles valeurs de prix
    };

    const handleMaxPriceChange = (event) => {
        const maxValue = event.target.value;
        setMaxPrice(maxValue); // Mettre à jour la valeur de Prix max
        onChange(minPrice, maxValue); // Appel de la fonction de rappel avec les nouvelles valeurs de prix
    };

    return (
        <div>
            <label htmlFor="min-price">Prix min:</label>
            <input type="number" id="min-price" name="min-price" value={minPrice} onChange={handleMinPriceChange} />
            <label htmlFor="max-price">Prix max:</label>
            <input type="number" id="max-price" name="max-price" value={maxPrice} onChange={handleMaxPriceChange} />
        </div>
    );
};

export default PriceSelector;
