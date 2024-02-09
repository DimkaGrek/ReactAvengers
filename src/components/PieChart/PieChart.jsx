import { PieChart, Pie, Cell } from 'recharts';
//
import s from './PieChart.module.css';

export const Chart = ({ data }) => {
  return (
    <PieChart className={s.chart} width={200} height={200}>
      <Pie
        dataKey="value"
        data={data}
        startAngle={180}
        endAngle={0}
        cx="50%"
        cy="50%"
        innerRadius={65}
        outerRadius={100}
        paddingAngle={0.5}
        fill="#15151b"
        stroke="none"
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={entry.color} />
        ))}
      </Pie>
    </PieChart>
  );
};
