import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import styles from "./index.module.scss";

const ChooseDate = () => {
  const [value, setValue] = useState<Date | null>(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="inputGroup">
        <label className="label">Invoice Date</label>
        <DatePicker
          value={value}
          onChange={(value) => setValue(value)}
          showDaysOutsideCurrentMonth
          format="dd LLL yyyy"
          className="input"
          disablePast
        />
      </div>
    </LocalizationProvider>
  );
};

export default ChooseDate;
