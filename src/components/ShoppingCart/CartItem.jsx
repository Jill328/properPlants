

function CartItem({ item, onIncrement, onDecrement }) {
    return (
        <div className="cart-item">
            <span>{item.image}</span>
            <span>{item.name}</span>
            <span>Qty: {item.quantity}</span>
            <button onClick={() => onIncrement(item.id)}>+</button>
            <button onClick={() => onDecrement(item.id)}>-</button>
        </div>
    );
}

export default CartItem;