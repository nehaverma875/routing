import { useState } from "react";
import Overview from "./Overview";
import Call from "./Call";
import ContactLead from "./ContectLead";
import AppointmentLead from "./AppointmentLead";
import Navbar from "../Components/Navbar";

export default function Lead() {
  const [tab, setTab] = useState("call");
  const urlParams = new URLSearchParams(location)

  return (
    <div className="flex flex-col">
        <Navbar/>
      <div>
        {tab === "call" && <Call />}
        {tab === "overview" && <Overview />}
        {tab === "contactLead" && <ContactLead />}
        {tab === "appointmentLead" && <AppointmentLead />}
      </div>
    </div>
  );
}
