import React from 'react';
import {

    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    BarChart,
    Bar,
} from 'recharts';

const ExamStat: React.FC = () => {


    const userTakeExam = [
        {
            name: "Total",
            totalExamTake: 1000,
            totalExamPass: 200,
            femaleExamTake: 655,
            maleExamTake: 345,
            femalePass: 300,
            malePass: 310,
        },
    ];

    return (
        <div className="m-4 bg-white shadow-shadow w-[400px] h-[350px] rounded-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Exam Statistics</h2>
            <BarChart
                width={380}
                height={300}
                data={userTakeExam}
                margin={{
                    top: 20,
                    right: 20,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend
                    wrapperStyle={{
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: '12px',
                        fontWeight: 'bold',
                        padding: '10px 0',
                    }}
                />
                <Bar dataKey="totalExamTake" stackId="a" fill="#8884d8" name="Total Exam Taken" />
                <Bar dataKey="totalExamPass" stackId="a" fill="#82ca9d" name="Total Exam Passed" />
                <Bar dataKey="femaleExamTake" stackId="b" fill="#FFC658" name="Total Exam Taken by Female" />
                <Bar dataKey="maleExamTake" stackId="b" fill="#FF8042" name="Total Exam Taken by Male" />
                <Bar dataKey="femalePass" stackId="c" fill="#FFD700" name="Total Female Candidates Who Passed" />
                <Bar dataKey="malePass" stackId="c" fill="#FF4500" name="Total Male Candidates Who Passed" />
            </BarChart>
        </div>
        
    )
}

export default ExamStat
