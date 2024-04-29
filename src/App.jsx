import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import Sales from "./Pages/Sales";
import Contact from "./Pages/Contact";
import Account from "./Pages/Account";
import Appointment from "./Pages/Appointment";
import Data from "./Pages/Data";
import Lead from "./Pages/Lead";
import Login from "./Pages/Login";
import PrivateRoute from "./PrivateRoute";

export default function App() {
  return (
    <Router>
      <div className="app-container flex">
        <div className="content">
          <Routes>
            {/* Public route for the login page */}
            <Route path="/" element={<Login />} />
            
            {/* Private routes */}
            <Route element={<PrivateRoute />}>
              <Route path="/home" element={<Home />} />
              <Route path="/sales/*" element={<Sales />} />
              <Route path="/sales/data" element={<Data />} />
              <Route path="/sales/lead/*" element={<Lead />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/account" element={<Account />} />
              <Route path="/appointment" element={<Appointment />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
