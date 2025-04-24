import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

const StudentStat: React.FC = () => {
    const students = [
        {
            month: "Jan",
            male: 120,
            female: 200,
            total: 320,
        },
        {
            month: "Feb",
            male: 45,
            female: 133,
            total: 178,
        },
        {
            month: "Mar",
            male: 95,
            female: 103,
            total: 198,
        },
        {
            month: "Apr",
            male: 72,
            female: 120,
            total: 192,
        },
        {
            month: "May",
            male: 167,
            female: 91,
            total: 258,
        },
    ];

    return (
        <div className="m-4 bg-white shadow-shadow w-[400px] h-[350px] rounded-md">
            {/* Chart Title */}
            <h2 className="text-2xl font-bold text-center mb-4">Student Enrollment Trend</h2>

            {/* Line Chart */}
            <LineChart
                width={400}
                height={280}
                data={students}
                margin={{
                    top: 20,
                    right: 20,
                    left: 20,
                    bottom: 5,
                }}
                style={{ fontFamily: "'Roboto', sans-serif", fontSize: '12px' }}
            >
                {/* Grid */}
                <CartesianGrid strokeDasharray="3 3" />

                {/* X-Axis (Bottom Labels) */}
                <XAxis
                    dataKey="month"
                    fontSize={12}
                    fontWeight={500}
                    tickLine={false}
                    dy={8} // Adjust vertical spacing for ticks
                />

                {/* Y-Axis (Side Labels) */}
                <YAxis
                    fontSize={12}
                    fontWeight={500}
                    tickLine={false}
                    dx={-8} // Adjust horizontal spacing for ticks
                />

                {/* Tooltip */}
                <Tooltip
                    contentStyle={{
                        backgroundColor: '#fff',
                        border: '1px solid #ccc',
                        padding: '10px',
                        borderRadius: '5px',
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: '12px',
                    }}
                />

                {/* Legend */}
                <Legend
                    wrapperStyle={{
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: '12px',
                        fontWeight: 'bold',
                        padding: '10px 0',
                    }}
                />

                {/* Lines */}
                <Line
                    type="monotone"
                    dataKey="male"
                    stroke="#4CAF50"
                    activeDot={{ r: 8 }}
                    name="Male Students"
                />
                <Line
                    type="monotone"
                    dataKey="female"
                    stroke="#FF9800"
                    activeDot={{ r: 8 }}
                    name="Female Students"
                />
                <Line
                    type="monotone"
                    dataKey="total"
                    stroke="#03A9F4"
                    activeDot={{ r: 8 }}
                    name="Total Students"
                />
            </LineChart>
        </div>
    );
};

export default StudentStat;