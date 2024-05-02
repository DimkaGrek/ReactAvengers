import { PieChart, Pie, Cell } from 'recharts';
import { useMemo } from 'react';

export const Chart = ({ data }) => {
  const chartData = useMemo(() => data, [data]);

  return (
    <PieChart width={292} height={150}>
      <Pie
        dataKey="value"
        data={chartData}
        startAngle={180}
        endAngle={0}
        cy={140}
        innerRadius={95}
        outerRadius={145}
        paddingAngle={-10}
        cornerRadius={10}
        fill="#15151b"
        stroke="none"
      >
        {chartData.map((entry, index) => (
          <Cell
            style={{ outline: 'none' }}
            key={`cell-${index}`}
            fill={entry.color}
          />
        ))}
      </Pie>
    </PieChart>
  );
};
