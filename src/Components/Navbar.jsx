import { useState } from "react";

export default function Navbar() {
  const [tab, setTab] = useState("");
  return (
    <div>
      <ul className="lead-links flex gap-2 py-2 px-2 w-full h-10">
        <li>Overview</li>
        <li>Call</li>
        <li>Contact</li>
        <li>Appointment</li>
      </ul>
    </div>
  );
}
