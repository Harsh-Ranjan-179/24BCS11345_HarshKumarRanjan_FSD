import useUser from "../hooks/useUser";

function UserInfo() {
    const user = useUser();

    return (
        <>
            <h2>Customer Details</h2>
            <p><b>Name:</b> {user.name}</p>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Location:</b> {user.location}</p>
        </>
    );
}

export default UserInfo;