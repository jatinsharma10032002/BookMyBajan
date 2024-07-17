import { useCallback } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const SearchBox = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSearchBoxContainerClick = useCallback(() => {
    navigate("/search-bar");
  }, [navigate]);

  return (
    <div
      className={`w-[1086px] shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] rounded-xl bg-darkorange-200 flex flex-row flex-wrap items-start justify-start py-[30px] px-12 box-border gap-[60px] min-h-[140px] max-w-full cursor-pointer z-[4] text-left text-base text-white font-dm-sans lg:gap-[30px] lg:pl-6 lg:pr-6 lg:box-border mq750:gap-[15px] ${className}`}
      onClick={onSearchBoxContainerClick}
    >
      <div className="h-[140px] w-[1086px] relative shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] rounded-xl bg-darkorange-200 hidden max-w-full" />
      <div className="flex-1 flex flex-col items-start justify-start gap-[11px] min-w-[217px]">
        <div className="relative inline-block min-w-[97px] z-[1]">
          Search Event
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
          <input
            className="w-[126px] [border:none] [outline:none] inline-block font-dm-sans text-3xl bg-[transparent] h-[29px] relative font-bold text-white text-left p-0 z-[1] mq450:text-lg"
            placeholder="Konser Jazz"
            type="text"
          />
          <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-sandybrown" />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[11px] min-w-[217px]">
        <div className="relative inline-block min-w-[40px] z-[1]">Place</div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-3xl">
          <b className="relative inline-block min-w-[105px] z-[1] mq450:text-lg">
            Indonesia
          </b>
          <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-sandybrown" />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[11px] min-w-[217px]">
        <div className="relative inline-block min-w-[37px] z-[1]">Time</div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
          <FormControl
            className="self-stretch h-[29px] font-dm-sans font-bold text-3xl text-white w-auto"
            variant="standard"
            sx={{
              borderTopWidth: "0px",
              borderRightWidth: "0px",
              borderBottomWidth: "0px",
              borderLeftWidth: "0px",
              borderRadius: "0px 0px 0px 0px",
              width: "99.6551724137931%",
              height: "29px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "29px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "29px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "29px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "29px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#fff",
                fontSize: 22,
                fontWeight: "Bold",
                fontFamily: "DM Sans",
                textAlign: "left",
                p: "0 !important",
              },
            }}
          >
            <InputLabel color="primary" />
            <Select
              color="primary"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img width="10px" height="5px" src="/vector.svg" style={{}} />
              )}
            >
              <MenuItem>Any date</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
          <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-sandybrown" />
        </div>
      </div>
    </div>
  );
};

SearchBox.propTypes = {
  className: PropTypes.string,
};

export default SearchBox;
