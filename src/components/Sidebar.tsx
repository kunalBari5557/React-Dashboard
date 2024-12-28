import { LogOut } from "lucide-react";
import { createContext, useContext, useState, ReactNode, ReactElement } from "react";

// Define the context type
interface SidebarContextType {
    expanded: boolean;
    toggleExpanded: () => void;
}

// Create the context with a default value
const SidebarContext = createContext<SidebarContextType>({
    expanded: false,
    toggleExpanded: () => { },
});

// Props for Sidebar component
interface SidebarProps {
    children: ReactNode;
}

// Sidebar component
export default function Sidebar({ children }: SidebarProps): ReactElement {
    const [expanded, setExpanded] = useState<boolean>(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <aside
            className={`h-screen bg-[#202028] shadow-sm transition-all ${expanded ? "w-64" : "w-16"} sm:w-20 md:w-64`}
        >
            <nav className="h-full flex flex-col">
                <SidebarContext.Provider value={{ expanded, toggleExpanded }}>
                    <ul className="flex-1 px-3">{children}</ul>
                </SidebarContext.Provider>

                <div className="flex items-center justify-center p-4 border-t border-gray-700">
                    <button onClick={toggleExpanded} className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700">
                        <LogOut size={20} color="#fff" />
                    </button>
                </div>
            </nav>
        </aside>
    );
}

// Props for SidebarItem component
interface SidebarItemProps {
    icon: ReactNode;
    text: string;
    active?: boolean;
    alert?: boolean;
}

// SidebarItem component
export function SidebarItem({
    icon,
    text,
    active = false,
    alert = false,
}: SidebarItemProps): ReactElement {
    const { expanded } = useContext(SidebarContext);

    return (
        <li
            className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-all group ${active
                ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                : "hover:bg-indigo-50 text-gray-400"
                }`}
        >
            {/* Icon */}
            {icon}

            {/* Text */}
            <span
                className={`ml-3 transition-all text-sm ${expanded ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            >
                {text}
            </span>

            {/* Alert Bubble */}
            {alert && (
                <div
                    className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"
                        }`}
                ></div>
            )}

            {/* Tooltip for collapsed mode */}
            {!expanded && (
                <div
                    className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-0 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
                >
                    {text}
                </div>
            )}
        </li>
    );
}
