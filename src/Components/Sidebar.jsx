import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div>
      <div className="sidebar border w-40 h-screen text-white bg-blue-950 rounded">
        <ul className="flex flex-col gap-2 items-start justify-start px-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="dropdown">
            <span>Sales</span>
            <ul className="dropdown-content px-4">
              <li>
                <Link to="/sales/data">Data</Link>
              </li>
              <li>
                <Link to="/sales/lead">Lead</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
          <li>
            <Link to="/appointment">Appointment</Link>
          </li>
          <li>
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
