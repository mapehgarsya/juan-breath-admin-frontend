import { Redirect, Route, } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const ProtectedRoute = (props) => {
  const token = localStorage.getItem('token');
  const decodedToken = token ? jwt_decode(token) : null;

  return decodedToken?.role === 'Super-admin' ? (
    <Route {...props} />
  ) : (
    <Redirect to='/' />
  );
};

export default ProtectedRoute;
