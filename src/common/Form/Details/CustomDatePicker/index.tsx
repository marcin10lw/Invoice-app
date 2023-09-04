import { useState } from "react";
import dayjs from "dayjs";

import { generateDate } from "utils/calender";
import { ReactComponent as CalenderIcon } from "assets/icon-calendar.svg";
import styles from "./index.module.scss";
import { getFormattedDate } from "utils/getFormattedDate";

const CustomDatePicker = () => {
  const [isPopperOpen, setIsPopperOpen] = useState(false);
  const currentDate = dayjs();
  const [selectedDate, setSelectedDate] = useState(currentDate);

  console.log(selectedDate);

  return (
    <div className="inputGroup">
      <div onClick={() => setIsPopperOpen(true)} className="label">
        Invoice Date
      </div>

      <button
        onClick={() => setIsPopperOpen((isPopperOpen) => !isPopperOpen)}
        className={`${styles.datePicker} ${
          isPopperOpen ? styles["datePicker--open"] : ""
        }`}
      >
        <div className={styles.datePicker__info}>
          <span>{getFormattedDate(selectedDate.toDate().toDateString())}</span>
          <CalenderIcon />
        </div>

        {isPopperOpen && (
          <div className={styles.popper}>
            <div className={styles.popper__dateBoard}>
              {generateDate().map(({ date, currentMonth, today }) => {
                const isSelectedDate =
                  selectedDate.toDate().toDateString() ===
                  date.toDate().toDateString();

                return (
                  <button
                    key={date.toDate().toDateString()}
                    onClick={() => setSelectedDate(date)}
                    className={`${styles.popper__chooseDate} ${
                      isSelectedDate
                        ? styles["popper__chooseDate--selected"]
                        : ""
                    } ${
                      currentMonth
                        ? ""
                        : isSelectedDate
                        ? ""
                        : styles["popper__chooseDate--nextMonth"]
                    }`}
                  >
                    {date.date()}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </button>
    </div>
  );
};

export default CustomDatePicker;
