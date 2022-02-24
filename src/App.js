import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Helmet from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// Login Page
import Login from './pages/Login';
// Pages inside Main Admin
import Dashboard from './pages/Dashboard';
import Locations from './pages/Locations';
import ContactTracingLogs from './pages/ContactTracingLogs';
import AdminManagement from './pages/AdminManagement';
import RolesAndPermissions from './pages/RolesAndPermissions';
import UserManagement from './pages/UserManagement';
import PositiveTracingLogs from './pages/PositiveUpdateLogs';

//utilities
import jwt_decode from 'jwt-decode';

// axios interceptors
import axios from 'axios';
import { setupInterceptorsTo } from "./axios/interceptors";
import NotFoundRoute from './routes/NotFoundRoute';

setupInterceptorsTo(axios);

function RequireAuth({ children }) {
  // decode token from the api
  const token = localStorage.getItem('accessToken');
  const decodedToken = token ? jwt_decode(token) : null;
  let location = useLocation();
 
  if (!decodedToken || null) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function App() {
  return (
    <div>
      {/* Helmet for page's title*/}
      <Helmet>
        <title>JuanBreath Admin</title>
      </Helmet>
      {/* Routing */}
      <Router>
        <Routes>
          {/* Login */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          
          {/* Main Admin Pages */}
          <Route 
            path="/dashboard" 
            element={
              <RequireAuth>
                <Dashboard/>
              </RequireAuth>
            } 
          />
          <Route 
            path="/locations" 
            element={
              <RequireAuth>
                <Locations/>
              </RequireAuth>
            } 
          />
          <Route 
            path="/visitation-logs" 
            element={
              <RequireAuth>
                <ContactTracingLogs/>
              </RequireAuth>
            } 
          />
          <Route 
            path="/positive-tracing-logs" 
            element={
              <RequireAuth>
                <PositiveTracingLogs/>
              </RequireAuth>
            } 
          />
          <Route 
            path="/user-management" 
            element={
              <RequireAuth>
                <UserManagement/>
              </RequireAuth>
            } 
          />
          <Route 
            path="/admin-management" 
            element={
              <RequireAuth>
                <AdminManagement/>
              </RequireAuth>
            } 
          />
          <Route 
            path="/roles-and-permissions" 
            element={
              <RequireAuth>
                <RolesAndPermissions/>
              </RequireAuth>
            } 
          />
          {/* user manual url not catcher */}
          <Route path="*" element={<NotFoundRoute/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
