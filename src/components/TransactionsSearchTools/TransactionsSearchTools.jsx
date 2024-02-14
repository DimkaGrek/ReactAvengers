import s from './TransactionsSearchTools.module.css';
import { format } from 'date-fns';

import { useDispatch, useSelector } from 'react-redux';
import {
  changeDate,
  changeFilter,
  resetFilter,
  selectDate,
  selectFilter,
} from 'my-redux/Filter/FilterSlice';
import { Icon, UniversalButton } from 'components';
import DatePicker from 'react-datepicker';

export const TransactionsSearchTools = ({ handleOpenModal }) => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const changeFilterValue = e => {
    dispatch(changeFilter(e.target.value));
  };

  const date = useSelector(selectDate);
  console.log('DDDATE ->>>', date);
  const changeDateValue = e => {
    if (!e) {
      dispatch(changeDate(format(new Date(), 'yyyy-MM-dd')));
      return;
    }

    dispatch(changeDate(format(e, 'yyyy-MM-dd')));
  };

  const handleResetFilter = () => {
    dispatch(resetFilter());
  };

  return (
    <div className={s.formContainer}>
      <form action="" className={s.formBox}>
        <div className={s.filterContainer}>
          <input
            value={filter}
            onChange={changeFilterValue}
            type="text"
            className={s.formInput}
            placeholder="Search for anything.."
          />
          <Icon name="search" className={s.iconSearch} size="20" />
        </div>

        <div className={s.datepickerContainer}>
          <DatePicker
            className={s.formCalendar}
            selected={date}
            onChange={changeDateValue}
            showPopperArrow={false}
            maxDate={new Date()}
            placeholderText="dd/mm/yyyy"
          />
          <Icon name="calendar" className={s.iconDate} size="20" />
        </div>
        <UniversalButton action={handleResetFilter} type="reset" />
        <UniversalButton className={s.addBtn} action={handleOpenModal} />
      </form>
    </div>
  );
};
