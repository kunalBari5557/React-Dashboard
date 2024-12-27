import React, { useState } from "react";
import {
  useNavigate,
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import {
  ChartColumnIncreasing,
  Home,
  FileCheck,
  Wallet,
  Lock,
  Power,
} from "lucide-react";
import SquareComponent from "./components/Square";

// Dummy components for routing
const HomeComponent: React.FC = () => <div className="p-4 text-[#D2D1D1]">Chart Component</div>;
const NotesComponent: React.FC = () => <div className="p-4 text-[#D2D1D1]">Notes Component</div>;
const LayersComponent: React.FC = () => <div className="p-4 text-[#D2D1D1]">Wallet Component</div>;
const FlagComponent: React.FC = () => <div className="p-4 text-[#D2D1D1]">Lock Component</div>;

const App: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>(location.pathname);

  const handleTabClick = (route: string): void => {
    setActiveTab(route);
    navigate(route);
  };

  return (
    <>
      {/* Fixed Header */}
      <Header />
      <div className="flex h-[calc(100vh-64px)]">
        {/* Collapsed Sidebar */}
        <div className="w-16 bg-[#202028] text-white flex flex-col items-center py-4">
          {/* Top Icons */}
          <div className="flex flex-col space-y-4 flex-grow">
            <div
              className="relative cursor-pointer p-2"
              onClick={() => handleTabClick("/")}
            >
              {activeTab === "/" && (
                <div className="absolute -left-[3px] top-1/2 -translate-y-1/2 h-8 w-1 bg-blue-500 rounded"></div>
              )}
              <Home size={20} className={`${activeTab === "/" ? "text-blue-500" : "text-white"}`} />
            </div>
            <div
              className="relative cursor-pointer p-2"
              onClick={() => handleTabClick("/dashboard")}
            >
              {activeTab === "/dashboard" && (
                <div className="absolute -left-[3px] top-1/2 -translate-y-1/2 h-8 w-1 bg-blue-500 rounded"></div>
              )}
              <ChartColumnIncreasing
                size={20}
                className={`${activeTab === "/dashboard" ? "text-blue-500" : "text-white"}`}
              />
            </div>
            <div
              className="relative cursor-pointer p-2"
              onClick={() => handleTabClick("/notes")}
            >
              {activeTab === "/notes" && (
                <div className="absolute -left-[3px] top-1/2 -translate-y-1/2 h-8 w-1 bg-blue-500 rounded"></div>
              )}
              <FileCheck size={20} className={`${activeTab === "/notes" ? "text-blue-500" : "text-white"}`} />
            </div>
            <div
              className="relative cursor-pointer p-2"
              onClick={() => handleTabClick("/layers")}
            >
              {activeTab === "/layers" && (
                <div className="absolute -left-[3px] top-1/2 -translate-y-1/2 h-8 w-1 bg-blue-500 rounded"></div>
              )}
              <Wallet size={20} className={`${activeTab === "/layers" ? "text-blue-500" : "text-white"}`} />
            </div>
            <div
              className="relative cursor-pointer p-2"
              onClick={() => handleTabClick("/flag")}
            >
              {activeTab === "/flag" && (
                <div className="absolute -left-[3px] top-1/2 -translate-y-1/2 h-8 w-1 bg-blue-500 rounded"></div>
              )}
              <Lock size={20} className={`${activeTab === "/flag" ? "text-blue-500" : "text-white"}`} />
            </div>
          </div>
          {/* Spacer */}
          <div className="flex-grow"></div>
          {/* Bottom Power Icon */}
          <div
            className="relative cursor-pointer p-2"
            onClick={() => handleTabClick("/logout")}
          >
            {activeTab === "/logout" && (
              <div className="absolute -left-[3px] top-1/2 -translate-y-1/2 h-8 w-1 bg-blue-500 rounded"></div>
            )}
            <Power size={20} className={`${activeTab === "/logout" ? "text-blue-500" : "text-white"}`} />
          </div>
        </div>

        {/* Scrollable Content */}
        <div
          className="flex-1 overflow-y-auto p-4"
          style={{
            height: "calc(100vh - 64px)", // Match height minus header
            scrollbarWidth: "none", // Hide scrollbar for Firefox
            msOverflowStyle: "none", // Hide scrollbar for IE/Edge
          }}
        >
          <style>
            {`
            /* Hide scrollbar for WebKit browsers (Chrome, Safari) */
            .flex-1::-webkit-scrollbar {
              display: none;
            }
            `}
          </style>
          <Routes>
            <Route path="/" element={<SquareComponent />} />
            <Route path="/dashboard" element={<HomeComponent />} />
            <Route path="/notes" element={<NotesComponent />} />
            <Route path="/layers" element={<LayersComponent />} />
            <Route path="/flag" element={<FlagComponent />} />
            <Route path="/logout" element={<div className="p-4 text-[#D2D1D1]">Logout Action</div>} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
