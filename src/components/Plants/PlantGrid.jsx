import PlantCard from "./PlantCard";

function PlantGrid({ plants, onAddToCart }) {
    return (
        <div className="plant-grid">
            {plants.map((plant) => (
            <PlantCard 
                key={plant.id} 
                plant={plant} 
                onAddToCart={onAddToCart} 
            />
            ))}
        </div>
    );
}

export default PlantGrid;