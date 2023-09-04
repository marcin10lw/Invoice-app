import { useState } from "react";
import dayjs from "dayjs";

import { getFormattedDate } from "utils/getFormattedDate";
import { generateDate } from "utils/calender";
import { ReactComponent as CalenderIcon } from "assets/icon-calendar.svg";
import styles from "./index.module.scss";

const CustomDatePicker = () => {
  const [isPopperOpen, setIsPopperOpen] = useState(false);
  const currentDate = dayjs();
  const [selectedDate, setSelectedDate] = useState(currentDate);

  console.log(selectedDate);

  const togglePopperOpen = () => {
    setIsPopperOpen((isPopperOpen) => !isPopperOpen);
  };

  return (
    <div className="inputGroup">
      <div onClick={togglePopperOpen} className="label">
        Invoice Date
      </div>

      <button
        onClick={togglePopperOpen}
        className={`${styles.datePicker} ${
          isPopperOpen ? styles["datePicker--open"] : ""
        }`}
      >
        <div className={styles.datePicker__info}>
          <span>{getFormattedDate(selectedDate.toDate().toDateString())}</span>
          <CalenderIcon />
        </div>

        {isPopperOpen && (
          <div className={styles.popper} onClick={(e) => e.stopPropagation()}>
            <div className={styles.popper__dateBoard}>
              {generateDate().map(({ date, currentMonth, passed }) => {
                const isSelectedDate =
                  selectedDate.toDate().toDateString() ===
                  date.toDate().toDateString();

                return (
                  <button
                    key={date.toDate().toDateString()}
                    onClick={() => {
                      if (passed) return;
                      setSelectedDate(date);
                    }}
                    disabled={passed}
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
