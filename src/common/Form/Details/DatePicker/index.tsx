import { useState } from "react";
import dayjs from "dayjs";

import useOutsideClick from "hooks/useOutsideClick";
import { generateDate } from "common/Form/Details/DatePicker/generateDate";
import { ReactComponent as CalenderIcon } from "assets/icon-calendar.svg";
import { ReactComponent as LeftArrow } from "assets/icon-arrow-left.svg";
import { ReactComponent as RightArrow } from "assets/icon-arrow-right.svg";
import styles from "./index.module.scss";

type DatePickerProps = {
  selectedDate: string;
  setSelectedDate: (...event: any[]) => void;
};

const DatePicker = ({ selectedDate, setSelectedDate }: DatePickerProps) => {
  const [isPopperOpen, setIsPopperOpen] = useState(false);
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);

  const ref = useOutsideClick<HTMLDivElement>(() => setIsPopperOpen(false));

  const isPrevMonthDisabled = () => {
    const prevMonth = today.subtract(1, "month");
    return prevMonth.isBefore(currentDate, "month");
  };

  const togglePopperOpen = () => {
    setIsPopperOpen((isPopperOpen) => !isPopperOpen);
  };

  return (
    <div ref={ref} className="inputGroup">
      <div
        onClick={togglePopperOpen}
        className="label"
        aria-labelledby="open calender to provide invoice date"
      >
        Invoice Date
      </div>

      <div
        onClick={togglePopperOpen}
        className={`${styles.datePicker} ${
          isPopperOpen ? styles["datePicker--open"] : ""
        }`}
      >
        <div className={styles.datePicker__info}>
          <span>{dayjs(selectedDate).format("DD MMM YYYY")}</span>
          <CalenderIcon />
        </div>

        {isPopperOpen && (
          <div className={styles.popper} onClick={(e) => e.stopPropagation()}>
            <div className={styles.popper__changeMonth}>
              <button
                onClick={() => {
                  setToday(today.month(today.month() - 1));
                }}
                disabled={isPrevMonthDisabled()}
              >
                <LeftArrow />
              </button>
              <span>{today.format("MMM YYYY")}</span>
              <button
                onClick={() => {
                  setToday(today.month(today.month() + 1));
                }}
              >
                <RightArrow />
              </button>
            </div>

            <div className={styles.popper__dateBoard}>
              {generateDate(today.month(), today.year()).map(
                ({ date, currentMonth, passed }) => {
                  const isSelectedDate =
                    dayjs(selectedDate).toDate().toDateString() ===
                    date.toDate().toDateString();

                  return (
                    <button
                      key={date.toDate().toDateString()}
                      onClick={() => {
                        if (passed) return;
                        setSelectedDate(date.format("YYYY-MM-DD"));
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
                }
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DatePicker;
