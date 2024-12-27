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

interface ActivityData {
    day: string;
    activity: number;
}

const activityData: ActivityData[] = Array.from({ length: 30 }, (_, index) => ({
    day: `${index + 1}`,
    activity: Math.floor(Math.random() * 1000) + 100,
}));

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
            <div className="w-full lg:w-[72%] min-h-[300px] bg-[#202028] p-4 text-white rounded-md">
                <div className="flex items-center px-2 mb-4">
                    <h2 className="text-xl font-semibold flex-shrink-0">Activity</h2>
                    <div className="ml-auto">
                        <select
                            value={filterType}
                            onChange={(e) => setFilterType(e.target.value)}
                            className="bg-[#4C4D52] text-gray-400 rounded-2xl px-4 py-2 cursor-pointer"
                        >
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                        </select>
                    </div>
                </div>

                <ResponsiveContainer width="100%" height={300}>
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

            {/* Sidebar Section */}
            <div className="w-full lg:w-[28%] bg-[#202028] p-6 text-white rounded-md">
                {/* Goal */}
                <div className="flex items-center mb-4">
                    <div className="flex justify-center items-center w-14 h-14 rounded-full bg-[#5F3237] text-[#EC6421] mr-4">
                        <Target size={35} />
                    </div>
                    <h4 className="text-lg font-semibold flex-grow">Goals</h4>
                    <div className="flex justify-center items-center w-8 h-8 rounded-full bg-[#47484D] text-white ml-4">
                        <ChevronRight size={18} />
                    </div>
                </div>

                {/* Popular Dishes */}
                <div className="flex items-center mb-4">
                    <div className="flex justify-center items-center w-14 h-14 rounded-full bg-[#293368] text-[#3B4789] mr-4">
                        <CakeSlice size={35} />
                    </div>
                    <h4 className="text-lg font-semibold flex-grow">Popular Dishes</h4>
                    <div className="flex justify-center items-center w-8 h-8 rounded-full bg-[#47484D] text-white ml-4">
                        <ChevronRight size={18} />
                    </div>
                </div>

                {/* Menus */}
                <div className="flex items-center mb-4">
                    <div className="flex justify-center items-center w-14 h-14 rounded-full bg-[#248DBE] text-[#224A63] mr-4">
                        <BookMinus size={35} />
                    </div>
                    <h4 className="text-lg font-semibold flex-grow">Menus</h4>
                    <div className="flex justify-center items-center w-8 h-8 rounded-full bg-[#47484D] text-white ml-4">
                        <ChevronRight size={18} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActivityChart;
