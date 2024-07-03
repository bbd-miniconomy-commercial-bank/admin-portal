import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './Login.css';
import Header from '../../components/Header/Header.jsx';

const Login = ({ handleLogin }) => {
  const navigate = useNavigate();

  const onLogin = () => {
    handleLogin();
    navigate("/admin/accounts"); // Redirect to a protected route after login
  };

  return (
    <div>
        <Header />
        <div className="main-container">
            <Card className="login-header login-card">
                <Card.Header>Welcome to Commercial Bank Admin Portal</Card.Header>
            </Card>
            <div className="login-container">
                <button onClick={onLogin}>Login</button>
            </div>
        </div>
    </div>
  );
};

export default Login;
