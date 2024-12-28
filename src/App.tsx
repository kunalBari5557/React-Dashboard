import React, { useState } from "react";
import {
  useNavigate,
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
  LayoutDashboard,
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
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true); // Toggle for sidebar

  const handleTabClick = (route: string): void => {
    setActiveTab(route);
    navigate(route);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`${isSidebarOpen ? "w-16" : "w-0"
          } bg-[#202028] text-white flex flex-col items-center py-4 fixed h-full transition-all duration-300`}
      >
        {/* Menu Icons */}
        <div className="flex flex-col space-y-4 flex-grow">
          {/* Home */}
          <div
            className="relative cursor-pointer p-2"
            onClick={() => handleTabClick("/")}
          >
            <button className="p-0 bg-gray-800">
              <LayoutDashboard size={28} color="#7194FF" />
            </button>
          </div>
          <div
            className="relative cursor-pointer p-2"
            onClick={() => handleTabClick("/")}
          >
            {activeTab === "/" && (
              <div className="absolute -left-[3px] top-1/2 -translate-y-1/2 h-8 w-1 bg-blue-500 rounded"></div>
            )}
            <Home
              size={20}
              className={`${activeTab === "/" ? "text-blue-500" : "text-white"}`}
            />
          </div>
          {/* Dashboard */}
          <div
            className="relative cursor-pointer p-2"
            onClick={() => handleTabClick("/dashboard")}
          >
            {activeTab === "/dashboard" && (
              <div className="absolute -left-[3px] top-1/2 -translate-y-1/2 h-8 w-1 bg-blue-500 rounded"></div>
            )}
            <ChartColumnIncreasing
              size={20}
              className={`${activeTab === "/dashboard" ? "text-blue-500" : "text-white"
                }`}
            />
          </div>
          {/* Notes */}
          <div
            className="relative cursor-pointer p-2"
            onClick={() => handleTabClick("/notes")}
          >
            {activeTab === "/notes" && (
              <div className="absolute -left-[3px] top-1/2 -translate-y-1/2 h-8 w-1 bg-blue-500 rounded"></div>
            )}
            <FileCheck
              size={20}
              className={`${activeTab === "/notes" ? "text-blue-500" : "text-white"
                }`}
            />
          </div>
          {/* Layers */}
          <div
            className="relative cursor-pointer p-2"
            onClick={() => handleTabClick("/layers")}
          >
            {activeTab === "/layers" && (
              <div className="absolute -left-[3px] top-1/2 -translate-y-1/2 h-8 w-1 bg-blue-500 rounded"></div>
            )}
            <Wallet
              size={20}
              className={`${activeTab === "/layers" ? "text-blue-500" : "text-white"
                }`}
            />
          </div>
          {/* Flag */}
          <div
            className="relative cursor-pointer p-2"
            onClick={() => handleTabClick("/flag")}
          >
            {activeTab === "/flag" && (
              <div className="absolute -left-[3px] top-1/2 -translate-y-1/2 h-8 w-1 bg-blue-500 rounded"></div>
            )}
            <Lock
              size={20}
              className={`${activeTab === "/flag" ? "text-blue-500" : "text-white"
                }`}
            />
          </div>
        </div>
        {/* Power Icon */}
        <div
          className="relative cursor-pointer p-2"
          onClick={() => handleTabClick("/logout")}
        >
          {activeTab === "/logout" && (
            <div className="absolute -left-[3px] top-1/2 -translate-y-1/2 h-8 w-1 bg-blue-500 rounded"></div>
          )}
          <Power
            size={20}
            className={`${activeTab === "/logout" ? "text-blue-500" : "text-white"
              }`}
          />
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`${isSidebarOpen ? "ml-16" : "ml-0"
          } flex-1 flex flex-col transition-all duration-300`}
      >
        {/* Header */}
        <Header>
          <button
            className="md:hidden text-white"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
          </button>
        </Header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto bg-[#121212] p-4">
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
    </div>
  );
};

export default App;
