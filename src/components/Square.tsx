import React from "react";
import {
    ShoppingCart,
    ShoppingBasket,
    DollarSign,
    CopyX,
} from "lucide-react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ActivityChart from "./ActivityChart";
import RecentOrders from "./RecentOrders";

interface DataItem {
    title: string;
    value: string;
    iconColor: string;
    bgColor: string;
    id: number;
    icon: React.ReactElement;
    growthPercent: number;
}

const data: DataItem[] = [
    {
        title: "Total Order",
        value: "75",
        iconColor: "#4063FE",
        bgColor: "#293368",
        id: 1,
        icon: <ShoppingCart />,
        growthPercent: 3,
    },
    {
        title: "Total Delivered",
        value: "12",
        iconColor: "#00C78B",
        bgColor: "#165246",
        id: 2,
        icon: <ShoppingBasket />,
        growthPercent: -3,
    },
    {
        title: "Total Cancelled",
        value: "05",
        iconColor: "#F35E5F",
        bgColor: "#5F3237",
        id: 3,
        icon: <CopyX />,
        growthPercent: 3,
    },
    {
        title: "Total Revenue",
        value: "$12k",
        iconColor: "#F6B8DC",
        bgColor: "#5B294A",
        id: 4,
        icon: <DollarSign />,
        growthPercent: -3,
    },
];

const NetProfitChart: React.FC<{ value: number }> = ({ value }) => {
    return (
        <div
            className="flex flex-col items-center"
            style={{ width: "150px", height: "120px", overflow: "hidden" }}
        >
            <div
                style={{
                    transformOrigin: "center",
                    width: "80%",
                    height: "50%",
                    marginBottom: "10px",
                }}
            >
                <CircularProgressbar
                    value={value}
                    text={`${value}%`}
                    styles={buildStyles({
                        textColor: "#FFFFFF",
                        pathColor: "#7194FE",
                        trailColor: "#293366",
                        textSize: "16px",
                    })}
                />
            </div>
            <style>
                {`
                    .CircularProgressbar-text {
                        font-weight: bold; /* Make the text bold */
                    }
                `}
            </style>
        </div>
    );
};


const SquareComponent: React.FC = () => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4 text-customGray">Dashboard</h2>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Stats Cards Section */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {data.map(
                            ({
                                title,
                                value,
                                id,
                                icon,
                                iconColor,
                                bgColor,
                                growthPercent,
                            }) => {
                                const isPositive = growthPercent >= 0;
                                const valueColor = isPositive ? "#00C78B" : "#F35E5F";
                                const iconArrow = isPositive ? (
                                    // <ChevronUp size={16} color={valueColor} />
                                    <p className="text-sm mt-1 text-[#00C78B] font-semibold">▲</p>
                                ) : (
                                    <p className="text-sm mt-1 text-[#F35E5F] font-semibold">▼</p>
                                );

                                return (
                                    <div
                                        key={id}
                                        className="bg-[#202028] flex flex-col justify-between rounded-md text-white p-4"
                                    >
                                        <div className="flex flex-col items-start">
                                            <div
                                                className="flex items-center justify-center rounded-md w-12 h-12 mb-2"
                                                style={{ backgroundColor: bgColor }}
                                            >
                                                {React.cloneElement(icon, {
                                                    size: 30,
                                                    color: iconColor,
                                                })}
                                            </div>
                                            <p className="text-sm font-semibold">{title}</p>
                                        </div>

                                        <div className="flex justify-between items-center mt-2">
                                            <p className="text-2xl font-semibold">{value}</p>

                                            <div className="flex items-center">
                                                {iconArrow}
                                                <p
                                                    className={`text-lg font-semibold ml-1 ${isPositive
                                                        ? "text-[#00C78B]"
                                                        : "text-[#F35E5F]"
                                                        }`}
                                                >
                                                    {growthPercent}%
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>

                {/* Net Profit Section */}
                {/* Net Profit Section */}
                {/* Net Profit Section */}
                <div className="lg:w-[30%] w-full bg-[#202028] flex items-center justify-between rounded-md text-white p-4 relative">
                    <div>
                        <p className="text-sm font-semibold">Net Profit</p>
                        <p className="text-4xl font-semibold mt-2">$6759.25</p>
                        <p className="text-lg mt-1 text-[#00C78B] font-semibold">▲ 6%</p>
                    </div>

                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        <NetProfitChart value={70} />
                    </div>
                </div>


            </div>

            {/* Charts */}
            <div className="mt-6">
                <ActivityChart />
            </div>

            {/* Recent Orders */}
            <div className="mt-6">
                <RecentOrders />
            </div>
        </div>
    );
};

export default SquareComponent;
