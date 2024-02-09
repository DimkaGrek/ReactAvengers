import { Chart } from 'components';
//
import s from './TransactionsChart.module.css';

export const TransactionsChart = () => {
  const data = [
    { name: 'Hobby', value: 25, color: '#06874b' },
    { name: 'Products', value: 25, color: '#04cf70' },
    { name: 'Cinema', value: 25, color: '#50cf94' },
    { name: 'Health', value: 25, color: '#7ef1bb' },
  ];

  return (
    <div className={s.chartContainer}>
      <h3 className={s.title}>Expenses categories</h3>
      <div className={s.statsWrapper}>
        <div className={s.pieChartWrapper}>
          <Chart data={data} />
          <p className={s.chartDescr}>100%</p>
        </div>
        <ul className={s.list}>
          {data.map((item, index) => (
            <li className={s.listItem} key={index}>
              <div
                className={s.wrapperMarker}
                style={{ backgroundColor: item.color }}
              ></div>
              <p className={s.itemDescr}>{item.name}</p>
              <p className={s.itemSpan}>{item.value}%</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
