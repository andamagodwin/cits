
import { createContext, useContext } from 'react';
import useAuth from '../hooks/useAuth'; // Import your custom hook
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const authValues = useAuth(); // Use your custom hook here

    return (
        <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useAuthContext = () => {
    return useContext(AuthContext);
};
