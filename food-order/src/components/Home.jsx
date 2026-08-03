import Restaurant from "./Restaurant";

function Home({ user, cartCount, setCartCount }) {

    return (
        <Restaurant
            user={user}
            cartCount={cartCount}
            setCartCount={setCartCount}
        />
    );
}

export default Home;