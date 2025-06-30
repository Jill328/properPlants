import CartItem from  "./CartItem";

function Cart({ cartItems, onIncrement, onDecrement}) {
    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {Array.isArray(cartItems) && cartItems.length === 0 ? (
                <p>The Cart is empty.</p>
            ) : (
            cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onIncrement={onIncrement}
                  onDecrement={onDecrement}
                />
              ))
            )}
        </div> 

    );
}

export default Cart;