import { Link,} from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul className="lead-links flex gap-2 py-2 px-2 w-full h-10">
        <li>
          <Link to="/sales/Lead?tab=overview">Overview</Link>
        </li>
        <li>
          <Link to="/sales/Lead?tab=call">Call</Link>
        </li>
        <li>
          <Link to="/sales/Lead?tab=contactLead">Contact Lead</Link>
        </li>
        <li>
          <Link to="/sales/Lead?tab=appointmentLead">Appointment Lead</Link>
        </li>
      </ul>
    </div>
  );
}

