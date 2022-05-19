import React from 'react';
import { 
    LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
    ResponsiveContainer 
} from 'recharts';

const data = [
  {
    date: 'May 16',
    Normal: 1,
    Positive: 5,
    Recovered: 10,
  },
  {
    date: 'May 17',
    Normal: 2,
    Positive: 2,
    Recovered: 0,
  },
  {
    date: 'May 18',
    Normal: 9,
    Positive: 2,
    Recovered: 0,
  },
  {
    date: 'May 19',
    Normal: 6,
    Positive: 1,
    Recovered: 5,
  },
  {
    date: 'May 20',
    Normal: 5,
    Positive: 2,
    Recovered: 14,
  },
  {
    date: 'May 21',
    Normal: 1,
    Positive: 0,
    Recovered: 1,
  },
  {
    date: 'May 22',
    Normal: 1,
    Positive: 7,
    Recovered: 15,
  },
];

const Example = () => {
    return (
        <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis/>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Normal" stroke="grey"/>
                <Line type="monotone" dataKey="Positive" stroke="red" />
                <Line type="monotone" dataKey="Recovered" stroke="green" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default Example
