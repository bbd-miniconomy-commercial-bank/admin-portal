import './Unauthenticated.css';

const Unauthenticated = () => {
    return (
        <div className="unauthenticated-content">
            <img className='logged-out-image' src = "" alt="Logged Out"/>
            <h1>You are logged out, please login to continue.</h1>
        </div>
    );
}

export default Unauthenticated