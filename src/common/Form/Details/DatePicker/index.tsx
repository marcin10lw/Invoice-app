import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { SxProps } from "@mui/material";

import { ReactComponent as CalenderIcon } from "assets/icon-calendar.svg";
import { ReactComponent as LeftArrowIcon } from "assets/icon-arrow-left.svg";
import { ReactComponent as RightArrowIcon } from "assets/icon-arrow-right.svg";
import styles from "./index.module.scss";

const ChooseDate = () => {
  const [value, setValue] = useState<Date | null>(new Date());

  const sx: SxProps = {
    ".MuiButtonBase-root": { paddingRight: "20px" },
    ".MuiInputBase-root": { height: "49px" },
    ".MuiPickersLayout-root": { background: "#b02c2c" },
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="inputGroup">
          <label className="label">Invoice Date</label>
          <DesktopDatePicker
            value={value}
            onChange={(value) => setValue(value)}
            showDaysOutsideCurrentMonth
            format="dd LLL yyyy"
            className={styles.dataPicker}
            disablePast
            slots={{
              openPickerIcon: CalenderIcon,
              leftArrowIcon: LeftArrowIcon,
              rightArrowIcon: RightArrowIcon,
            }}
            sx={sx}
            views={["day"]}
          />
        </div>
      </LocalizationProvider>
    </div>
  );
};

export default ChooseDate;
