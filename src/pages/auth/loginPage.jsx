import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
// import useAuth from '../../hooks/useAuth';
import { useAuthContext } from "../../context/authContext";

export default function LoginPage() {
    const navigate = useNavigate();
    const { setAuth } = useAuthContext(); // Assuming you have a custom hook for auth context



    const handleGoogleSuccess = async (credentialResponse) => {
        try {
            const response = await axios.post('https://api.lingomeet.space/api/auth/google', {
                credential: credentialResponse.credential
            }, {
                withCredentials: true
            });

            setAuth({
                user: response.data.user,
                accessToken: response.data.accessToken
            });
            
            navigate("/");
        } catch (err) {
            console.error('Google login failed:', err);
            // Handle error (show toast, etc.)
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={() => {
                    console.log('Login Failed');
                }}
                auto_select={true}
                useOneTap
                theme="filled_blue"
                size="large"
                text="continue_with"
                shape="rectangular"
            />
        </div>
    );
}