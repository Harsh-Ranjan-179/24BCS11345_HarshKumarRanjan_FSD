import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { UserContext } from "./UserContext";

function App() {

    const user = {
        name: "Rahul Sharma",
        email: "rahul@gmail.com",
        location: "Chandigarh"
    };

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        console.log("Items Added:", cartCount);
    }, [cartCount]);

    return (
        // <Navbar user={user} cartCount={cartCount} />
        //     <Home
        //         user={user}
        //         cartCount={cartCount}
        //         setCartCount={setCartCount}
        //     />
        <UserContext.Provider value={user}>
            <Navbar user={user} cartCount={cartCount} />
            <Home
                user={user}
                cartCount={cartCount}
                setCartCount={setCartCount}
            />
        </UserContext.Provider>
    );
}

export default App;