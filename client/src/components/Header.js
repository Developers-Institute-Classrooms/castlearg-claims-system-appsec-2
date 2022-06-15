import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
const Header = () => {
    const { user, isLoading, isAuthenticated } = useAuth0();
    return (
        <div style={{ 'backgroundColor': 'gray' }}>
            <h1>Welcome to Ensure</h1>
            {isAuthenticated ? (
                <span>
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <LogoutButton />
                </span>)
                : <LoginButton />
            }
        </div>);
}


export default Header;