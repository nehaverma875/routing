import { useState, useEffect } from "react";
import Overview from "./Overview";
import Call from "./Call";
import ContactLead from "./ContectLead";
import AppointmentLead from "./AppointmentLead";
import Navbar from "../Components/Navbar";
import { useLocation } from "react-router-dom";
export default function Lead() {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabParam = urlParams.get("tab");
    if (tabParam) {
      setTab(tabParam);
    } else {
      // Set default tab if no tab parameter is provided
      setTab("overview");
    }
  }, [location.search]);

  return (
    <div className="flex flex-col">
      <Navbar />
      <div>
        {tab === "overview" && <Overview />}
        {tab === "call" && <Call />}
        {tab === "contactLead" && <ContactLead />}
        {tab === "appointmentLead" && <AppointmentLead />}
      </div>
    </div>
  );
}
