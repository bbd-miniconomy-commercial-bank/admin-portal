import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AlertType, showAlert } from './Alerts.jsx';
import { postDataWithoutBearer } from '../../api/api.jsx'
import './Callback.css';
import Error from '../../pages/Error/Error.jsx'

const Callback = () => {

  const [error, setError] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {

    const queryParameters = new URLSearchParams(window.location.search)
    const code = queryParameters.get('code')

    if (code) {

      postDataWithoutBearer('auth/token', { code: code })
      .then((response) => {

        response.json().then((body) => {

          if (response.ok) {

            const { access_token, id_token, refresh_token } = body;
            localStorage.setItem('accessToken', access_token);
            localStorage.setItem('idToken', id_token);
            localStorage.setItem('refreshToken', refresh_token);
            window.dispatchEvent(new Event('storage'));
            navigate('/');
            showAlert('Successfully logged in, welcome to the Admin Portal of the Mini BBD Economy Commercial Bank.', AlertType.Success);
          } 
          else {
            setError(true);
            showAlert('An error occured with validating your login, please try logging in again.', AlertType.Error);
          }
        })
      })
      .catch(error => {
        setError(true);
        showAlert('Unable to validate your login token, please try again in a moment. If this error continues, please contact BBD commercial bank for support', AlertType.Error);
      });
    } else {
      navigate("/unauthorized");
    }
  }, [location, navigate]);

  if (error) 
    return <Error />

  return <div className='callback-content'>
      <img className='logging-in-image' src = "" alt="Logging In"/>
      <h1>Trying to log you in...</h1>
    </div>;
};

export default Callback;