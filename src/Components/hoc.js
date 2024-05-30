import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function withAuth(WrappedComponent) {
  
  return (props) => {
    const token = Cookies.get('token');
    let location = useLocation();
    let navigate = useNavigate();

    React.useEffect(() => {
      if (!token) {
        navigate('/', {
          state: { from: location.pathname }
        });
      }
    }, [location, token, navigate]);

    return <>{token && <WrappedComponent {...props} />}</>
  }
}