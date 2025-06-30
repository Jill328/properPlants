function PlantCard({ plant, onAddToCart }) {
    return (
        <div className="plant-card">
            <span>{plant.image}</span>
            <h3>{plant.name}</h3>
            <button onClick={() => onAddToCart(plant)}>Add to Cart</button>
        </div>
    );
}

export default PlantCard;
