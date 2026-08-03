import UserInfo from "./UserInfo";

function FoodMenu({ user, cartCount, setCartCount }) {
    const foods = [
        { name: "Pizza", price: 299 },
        { name: "Burger", price: 149 },
        { name: "Pasta", price: 199 }
    ];
    return (
        <>
            <h2>Food Menu</h2>
            {foods.map((food, index) => (
                <div key={index}>
                    <h3>{food.name}</h3>
                    <p>₹{food.price}</p>
                    <button onClick={() => setCartCount(cartCount + 1)}>
                        Add to Cart
                    </button>
                    <hr />
                </div>
            ))}
            <UserInfo user={user} />
        </>
    );
}

export default FoodMenu;