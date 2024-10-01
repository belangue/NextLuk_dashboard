import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', current: 2000, previous: 8500 },
  { month: 'Feb', current: 7500, previous: 11500 },
  { month: 'Mar', current: 3000, previous: 6500 },
  { month: 'Apr', current: 17000, previous: 20000 },
  { month: 'May', current: 9000, previous: 15000 },
  { month: 'Jun', current: 3000, previous: 7000 },
];

const ComparisonChart = () => {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <h2>Comparison</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="current" fill="#8884d8" />
          <Bar dataKey="previous" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComparisonChart;