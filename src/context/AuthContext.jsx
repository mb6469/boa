import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Hardcoded credentials
    const PRESET_EMAIL = "user@demo.com";
    const PRESET_PASSWORD = "password123";

    useEffect(() => {
        // Check local storage for existing session
        const storedUser = localStorage.getItem('boa_clone_user');
        if (storedUser) {
            setCurrentUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        return new Promise((resolve, reject) => {
            // Simulate network delay for realism
            setTimeout(() => {
                if (email === PRESET_EMAIL && password === PRESET_PASSWORD) {
                    const user = { email: PRESET_EMAIL, name: "Demo User" };
                    setCurrentUser(user);
                    localStorage.setItem('boa_clone_user', JSON.stringify(user));
                    resolve(user);
                } else {
                    reject(new Error("Invalid email or password"));
                }
            }, 800);
        });
    };

    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem('boa_clone_user');
    };

    const value = {
        currentUser,
        login,
        logout,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
