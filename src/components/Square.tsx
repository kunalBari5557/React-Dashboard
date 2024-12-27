import React from "react";
import {
    ShoppingCart,
    ShoppingBasket,
    DollarSign,
    CopyX,
    ChevronDown,
    ChevronUp,
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

interface NetProfitChartProps {
    value: number;
}

const NetProfitChart: React.FC<{ value: number }> = ({ value }) => {
    return (
        <>
            <div
                className="flex flex-col items-center"
                style={{ width: "150px", height: "120px", overflow: "hidden" }}
            >
                <div
                    style={{
                        transformOrigin: "center",
                        width: "80%",
                        height: "50%",
                    }}
                >
                    <CircularProgressbar
                        value={value}
                        text={`${value}%`}
                        styles={buildStyles({
                            textColor: "#FFFFFF",
                            pathColor: "#7194FE",
                            trailColor: "#282F5C",
                            textSize: "16px",
                        })}
                    />
                </div>

            </div>
            <span className="text-xs text-gray-400">
                *The values here have been rounded off.
            </span>
        </>
    );
};

const SquareComponent: React.FC = () => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4 text-customGray">Dashboard</h2>

            <div className="flex gap-6 flex-wrap lg:flex-nowrap">
                <div className="flex flex-wrap gap-4 w-full lg:w-[70%]">
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
                                <ChevronUp size={16} color={valueColor} />
                            ) : (
                                <ChevronDown size={16} color={valueColor} />
                            );

                            return (
                                <div
                                    key={id}
                                    className="w-full sm:w-[48%] lg:w-[23.4%] bg-[#202028] flex flex-col justify-between rounded-md text-white p-4"
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

                                    <div className="flex justify-between items-center">
                                        <p className="text-2xl font-semibold">{value}</p>
                                        <div className="flex items-center">
                                            {iconArrow}
                                            <p
                                                className={`text-lg font-semibold ml-1 ${isPositive ? "text-[#00C78B]" : "text-[#F35E5F]"
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

                <div className="w-full lg:w-[30%] min-w-[250px] bg-[#202028] flex flex-col sm:flex-row items-center justify-between rounded-md text-white p-4">
                    <div>
                        <p className="text-sm font-semibold">Net Profit</p>
                        <p className="text-4xl font-semibold mt-2">$6759.25</p>
                        <p className="text-lg mt-1 text-[#00C78B] font-semibold">
                            ▲ 6%
                        </p>
                    </div>

                    <div className="ml-4">
                        <NetProfitChart value={70} />
                    </div>
                </div>
            </div>


            <br />
            <ActivityChart />
            <br />
            <RecentOrders />
        </>
    );
};

export default SquareComponent;
