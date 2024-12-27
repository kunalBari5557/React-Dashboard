import React, { useEffect, useState } from "react";

type Feedback = {
    name: string;
    feedback: string;
    rating: number;
    avatar: string;
};

const RecentOrders: React.FC = () => {
    const feedbackData: Feedback[] = [
        {
            name: "Jenny Wilson",
            feedback:
                "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
            rating: 5,
            avatar: "https://i.pravatar.cc/150?img=7",
        },
        {
            name: "Dianne Russell",
            feedback:
                "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
            rating: 5,
            avatar: "https://i.pravatar.cc/150?img=8",
        },
        {
            name: "Devon Lane",
            feedback:
                "Normally wings are wings, but these are lean meaty and tender, and served with just the right amount of sauce.",
            rating: 4,
            avatar: "https://i.pravatar.cc/150?img=9",
        },
        {
            name: "Jane Cooper",
            feedback:
                "The pizza here is absolutely amazing. Fresh ingredients and the crust was perfectly crispy.",
            rating: 5,
            avatar: "https://i.pravatar.cc/150?img=10",
        },
        {
            name: "Albert Flores",
            feedback:
                "A wonderful experience overall. The ambiance and service were top-notch.",
            rating: 4,
            avatar: "https://i.pravatar.cc/150?img=11",
        },
    ];

    const [visibleFeedback, setVisibleFeedback] = useState<number>(3);

    // Function to load more feedback on scroll
    const handleScroll = (e: React.UIEvent<HTMLDivElement>): void => {
        const container = e.target as HTMLDivElement;
        if (
            container.scrollTop + container.clientHeight >=
            container.scrollHeight - 10
        ) {
            setVisibleFeedback((prev) => Math.min(prev + 2, feedbackData.length));
        }
    };

    useEffect(() => {
        const feedbackContainer = document.getElementById("feedback-container");
        if (feedbackContainer) {
            feedbackContainer.addEventListener("scroll", handleScroll as any);
        }
        return () => {
            if (feedbackContainer) {
                feedbackContainer.removeEventListener(
                    "scroll",
                    handleScroll as any
                );
            }
        };
    }, []);

    return (
        <div className="flex gap-6">
            {/* Recent Orders Section */}
            <div className="w-[72%] bg-[#202028] p-4 text-white">
                <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-700">
                                <th className="px-4 py-2">Customer</th>
                                <th className="px-4 py-2">Order No.</th>
                                <th className="px-4 py-2">Amount</th>
                                <th className="px-4 py-2 text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                {
                                    customer: "Wade Warren",
                                    orderNo: "15478256",
                                    amount: "$124.00",
                                    status: "Delivered",
                                    avatar: "https://i.pravatar.cc/150?img=1",
                                },
                                {
                                    customer: "Jane Cooper",
                                    orderNo: "48965786",
                                    amount: "$365.02",
                                    status: "Delivered",
                                    avatar: "https://i.pravatar.cc/150?img=2",
                                },
                                {
                                    customer: "Guy Hawkins",
                                    orderNo: "7895215",
                                    amount: "$45.88",
                                    status: "Cancelled",
                                    avatar: "https://i.pravatar.cc/150?img=3",
                                },
                                {
                                    customer: "Kristin Watson",
                                    orderNo: "20965732",
                                    amount: "$65.00",
                                    status: "Pending",
                                    avatar: "https://i.pravatar.cc/150?img=4",
                                },
                                {
                                    customer: "Cody Fisher",
                                    orderNo: "9571620",
                                    amount: "$545.00",
                                    status: "Delivered",
                                    avatar: "https://i.pravatar.cc/150?img=5",
                                },
                                {
                                    customer: "Savannah Nguyen",
                                    orderNo: "78514568",
                                    amount: "$128.20",
                                    status: "Delivered",
                                    avatar: "https://i.pravatar.cc/150?img=6",
                                },
                            ].map((order: any, index: number) => (
                                <>
                                    <tr key={index} className="border-b border-gray-700">
                                        <td className="px-4 py-6 flex items-center space-x-3">
                                            <img
                                                src={order.avatar}
                                                alt={`${order.customer}'s Avatar`}
                                                className="h-8 w-8 rounded-full"
                                            />
                                            <span>{order.customer}</span>
                                        </td>
                                        <td className="px-6 py-6">{order.orderNo}</td>
                                        <td className="px-6 py-6">{order.amount}</td>
                                        <td className="px-6 py-6 flex justify-center">
                                            <span
                                                className={`px-3 py-1 rounded-full text-sm font-bold w-[120px] text-center ${order.status === "Delivered"
                                                    ? "text-[#0F6E56] bg-[#175246]"
                                                    : order.status === "Pending"
                                                        ? "text-yellow-600 bg-yellow-500"
                                                        : "text-[#A0484B] bg-[#5D3336]"
                                                    }`}
                                            >
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Customer Feedback Section */}
            <div className="w-[28%] bg-[#202028] p-6 text-white ml-4 rounded-md shadow-lg">
                <h2 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
                    Customer's Feedback
                </h2>
                <div
                    id="feedback-container"
                    className="space-y-6 overflow-y-auto pr-2 custom-scrollbar"
                    style={{
                        height: "auto",
                        maxHeight: "calc(100vh - 200px)",
                    }}
                    onScroll={handleScroll}
                >
                    {feedbackData.slice(0, visibleFeedback).map((feedback, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-700 pb-4"
                            style={{
                                minHeight: "8rem",
                            }}
                        >
                            <div className="flex items-center space-x-3">
                                <img
                                    src={feedback.avatar}
                                    alt={`${feedback.name}'s Avatar`}
                                    className="h-12 w-12 rounded-full"
                                />
                                <h3 className="font-semibold text-lg">{feedback.name}</h3>
                            </div>
                            <p className="text-sm mt-2 text-gray-300">{feedback.feedback}</p>
                            <div className="flex space-x-1 mt-2">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <span
                                        key={i}
                                        className={`text-lg ${i < feedback.rating ? "text-yellow-500" : "text-gray-500"
                                            }`}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>
                {`
/* Custom Scrollbar Styles */
.custom-scrollbar::-webkit-scrollbar {
    width: 5px; /* Width of the scrollbar */
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: #2d2d2d; /* Track color */
    border-radius: 10px; /* Rounded corners for track */
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #A7A7A7; /* Thumb color */
    border-radius: 10px; /* Rounded corners for thumb */
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #777; /* Thumb hover color */
}
`}
            </style>
        </div>
    );
};

export default RecentOrders;
