import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../Firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ email: 'alamin@gmail.com' });


    const authInfo = {
        user,
        setUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;