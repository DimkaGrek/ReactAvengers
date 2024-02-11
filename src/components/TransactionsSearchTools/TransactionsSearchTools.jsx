import s from './TransactionsSearchTools.module.css';
import { format } from 'date-fns';

import { useDispatch, useSelector } from 'react-redux';
import {
  changeDate,
  changeFilter,
  selectDate,
  selectFilter,
} from 'my-redux/Filter/FilterSlice';
// import { Icon } from 'components';
import DatePicker from 'react-datepicker';

export const TransactionsSearchTools = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const changeFilterValue = e => {
    dispatch(changeFilter(e.target.value));
  };

  const date = useSelector(selectDate);
  const changeDateValue = e => {
    dispatch(changeDate(format(e, 'yyyy-MM-dd')));
  };

  return (
    <div className={s.formContainer}>
      <form action="" className={s.formBox}>
        <input
          value={filter}
          onChange={changeFilterValue}
          type="text"
          className={s.formInput}
        />
        {/* <input type="text" className={s.formCalendar} /> */}
        <div className="datepickerContainer">
          <DatePicker
            className={s.formCalendar}
            selected={date}
            onChange={changeDateValue}
            showPopperArrow={false}
            maxDate={new Date()}
          />
        </div>
        {/* <Icon name="calendar" className={s.iconDate} size="16" /> */}
      </form>
    </div>
  );
};
