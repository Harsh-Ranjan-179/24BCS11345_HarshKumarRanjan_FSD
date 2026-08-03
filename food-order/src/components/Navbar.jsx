function Navbar({ user, cartCount }) {

    return (
        <>
            <h1>QUICK BITE - FOOD ORDERING APP</h1>
            <h3>Welcome, {user.name}</h3>
            <p>Location: {user.location}</p>
            <h3>Cart: {cartCount} items</h3>
            <hr />
        </>
    );
}

export default Navbar;