import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import './App.css';
// Login Page
import Login from './pages/Login';
// Pages inside Main Admin
import Dashboard from './pages/Dashboard';
import Locations from './pages/Locations';
import ContactTracingLogs from './pages/ContactTracingLogs';
import AdminManagement from './pages/AdminManagement';

//utilities
import ReportGenerator from './pages/ContactTracingLogs/utilities/ReportGenerator';
import AddLocation from './pages/Locations/utilities/AddLocation';

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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact-tracing-logs" element={<ContactTracingLogs />} />
          <Route path="/admin-management" element={<AdminManagement />} />

          {/* utilities */}
          <Route path="/contact-tracing-logs/generate-report" element={<ReportGenerator />} />
          <Route path="/locations/add-location" element={<AddLocation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
