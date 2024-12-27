import React, { useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarProps,
} from "recharts";
import { Target, CakeSlice, BookMinus, ChevronRight } from "lucide-react";

// Define the data type for activity data
interface ActivityData {
    day: string;
    activity: number;
}

const activityData: ActivityData[] = Array.from({ length: 30 }, (_, index) => ({
    day: `${index + 1}`,
    activity: Math.floor(Math.random() * 1000) + 100,
}));

// Define the props type for CustomBarShape
interface CustomBarShapeProps extends BarProps {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    fill?: string;
}

const CustomBarShape: React.FC<CustomBarShapeProps> = (props) => {
    const { x, y, width, height, fill } = props;

    return (
        <rect
            x={x}
            y={y}
            width={width}
            height={height}
            rx={8}
            ry={8}
            fill={fill}
        />
    );
};

const ActivityChart: React.FC = () => {
    const [filterType, setFilterType] = useState<string>("Weekly");

    return (
        <div className="flex flex-wrap lg:flex-nowrap gap-6">
            {/* Chart Section */}
            <div className="w-full lg:w-[70%] h-[200px] sm:h-[300px] bg-[#202028] p-4 text-white rounded-lg">
                <div className="flex items-center px-2 mb-4">
                    <h2 className="text-lg sm:text-xl font-semibold flex-shrink-0">Activity</h2>

                    <div className="ml-auto">
                        <select
                            value={filterType}
                            onChange={(e) => setFilterType(e.target.value)}
                            className="bg-[#4C4D52] text-gray-400 rounded-2xl px-4 py-2 text-sm sm:text-base cursor-pointer"
                        >
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                        </select>
                    </div>
                </div>

                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={activityData}
                        barCategoryGap="15%"
                        margin={{ top: 10, right: 30, left: 0, bottom: 50 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                        <XAxis
                            dataKey="day"
                            padding={{ left: 20, right: 20 }}
                            interval={1}
                            tick={{ fill: "#616165", fontSize: 12 }}
                        />
                        <YAxis tickFormatter={(value: number) => `${value / 1000}k`} />
                        <Tooltip />
                        <Bar dataKey="activity" shape={<CustomBarShape dataKey={""} />} fill="#7194FE" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Info Cards Section */}
            <div className="w-full lg:w-[30%] h-auto bg-[#202028] p-6 sm:p-10 text-white rounded-lg">
                <div className="grid gap-4">
                    {[
                        {
                            icon: <Target size={35} />,
                            bg: "bg-[#5F3237]",
                            text: "text-[#EC6421]",
                            title: "Goals",
                        },
                        {
                            icon: <CakeSlice size={35} />,
                            bg: "bg-[#293368]",
                            text: "text-[#3B4789]",
                            title: "Popular Dishes",
                        },
                        {
                            icon: <BookMinus size={35} />,
                            bg: "bg-[#248DBE]",
                            text: "text-[#224A63]",
                            title: "Menus",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center"
                        >
                            <div
                                className={`flex justify-center items-center w-14 h-14 rounded-full ${item.bg} ${item.text} mr-4`}
                            >
                                {item.icon}
                            </div>
                            <h4 className="text-sm sm:text-lg font-semibold flex-grow">
                                {item.title}
                            </h4>
                            <div className="flex justify-center items-center w-8 h-8 rounded-full bg-[#47484D] text-white ml-4">
                                <ChevronRight size={18} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ActivityChart;
