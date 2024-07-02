import { useLoaderData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { LoginLink, LogoutLink } from "../../components/Authentication/AuthLink.jsx";
import Header from "../../components/Header/Header.jsx"

const Login = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const [currentPath, setCurrentPath] = useState(location.pathname);

    useEffect(() => {
        setCurrentPath(location.pathname);
      }, 
      [location.pathname]
    );
    
    return (
        <div>
            <LoginLink />
        </div>
    )
}

export default Login