import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddCrimeButton from "./AddCrimeButton";
import ViewToggle from "./ViewToggle";
import ChartButton from "./ChartButton";
import SettingsButton from "./SettingsButton";
import CrimeReportForm from "./CrimeReportForm/CrimeReportForm";
import { Context } from "../../MainRoutes";

// Example icons from Lucide
import {
  Grid,
  Navigation2 as MapMenuIcon,
  Plus,
  BarChart2,
  Settings,
  User as UserIcon,
} from "lucide-react";

function Menu({ userLocation }) {
  const [showReportForm, setShowReportForm] = useState(false);
  const navigate = useNavigate();
  const { openChartPopup, openSettingsPopup } = useContext(Context);

  return (
    <>
      <div className="menu-container">
        {/* 1) Grid Icon */}
        <button
          className="menu-button grid-button"
          data-label="Grid"
          onClick={() => console.log("Grid clicked")}
        >
          <Grid />
        </button>

        {/* 2) Map Icon (Navigation2) */}
        <button
          className="menu-button map-menu-button"
          data-label="Map"
          onClick={() => console.log("Map clicked")}
        >
          <MapMenuIcon />
        </button>

        {/* 3) Plus (Add) Icon => opens CrimeReportForm */}
        <button
          className="menu-button add-button"
          data-label="Add Crime"
          onClick={() => setShowReportForm(true)}
        >
          <Plus />
        </button>

        {/* 4) Chart Icon */}
        <button
          className="menu-button chart-button"
          data-label="Chart"
          onClick={() => openChartPopup(true)}
        >
          <BarChart2 />
        </button>

        {/* 5) Settings Icon */}
        <button
          className="menu-button settings-button"
          data-label="Settings"
          onClick={() => openSettingsPopup(true)}
        >
          <Settings />
        </button>
        {/* 6) Profile Icon */}
        <button
          className="menu-button profile-button"
          data-label="Profile"
          onClick={() => navigate("/profile")}
        >
          <UserIcon />
        </button>
      </div>

      {/* Conditionally render the crime report form */}
      {showReportForm && (
        <CrimeReportForm
          onClose={() => setShowReportForm(false)}
          userLocation={userLocation}
        />
      )}
    </>
  );
}

export default Menu;
