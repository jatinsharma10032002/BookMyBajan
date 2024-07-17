import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FrameComponent from "./FrameComponent";
import SearchBox from "./SearchBox";
import PropTypes from "prop-types";

const Main = ({ className = "" }) => {
  const navigate = useNavigate();

  const onListYourEventClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <section
      className={`self-stretch flex flex-row items-end justify-start pt-0 px-0 pb-[19px] box-border max-w-full shrink-0 text-left text-21xl text-white font-montserrat ${className}`}
    >
      <div className="w-[1440px] flex flex-col items-start justify-start pt-0 px-0 pb-[67px] box-border min-h-[790px] max-w-full mq1050:pb-11 mq1050:box-border mq450:pb-[29px] mq450:box-border">
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[71.3px] box-border relative gap-[30.7px] max-w-full mq750:gap-[15px] mq750:pb-[46px] mq750:box-border">
          <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
            <img
              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/rectangle-12@2x.png"
            />
            <img
              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full mix-blend-normal z-[1]"
              alt=""
              src="/rectangle-10.svg"
            />
          </div>
          <FrameComponent
            onListYourEventClick={onListYourEventClick}
            onListYourEventClick={onListYourEventClick}
          />
          <div className="w-[1339px] flex flex-row items-start justify-start py-0 px-[76px] box-border max-w-full lg:pl-[38px] lg:pr-[38px] lg:box-border">
            <div className="flex-1 flex flex-row items-start justify-center [row-gap:20px] max-w-full mq1050:flex-wrap">
              <div className="h-[550.7px] flex-1 relative min-w-[504px] max-w-full mq750:min-w-full">
                <div className="absolute top-[459.3px] left-[0px] w-[776px] h-[91.4px] z-[2] flex items-center justify-center">
                  <img
                    className="w-full h-full z-[2] object-contain absolute left-[12px] top-[0px] [transform:scale(3.188)]"
                    alt=""
                    src="/group-30.svg"
                  />
                </div>
                <img
                  className="absolute top-[0px] left-[101px] w-[522px] h-[520px] object-contain z-[4]"
                  loading="lazy"
                  alt=""
                  src="/untitled-design-6-1@2x.png"
                />
              </div>
              <div className="w-[451px] flex flex-col items-start justify-start pt-[83px] px-0 pb-0 box-border min-w-[451px] max-w-full ml-[-40px] mq750:min-w-full mq1050:flex-1 mq1050:ml-0">
                <div className="self-stretch flex flex-col items-start justify-start gap-[31.3px] max-w-full mq450:gap-[16px]">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-1 box-border max-w-full">
                    <b className="flex-1 relative inline-block max-w-full z-[2] mq1050:text-13xl mq450:text-5xl">
                      <p className="m-0">Live Event Starts In</p>
                      <p className="m-0 text-45xl">00:00:00 hrs</p>
                    </b>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-2 box-border max-w-full text-lg">
                    <div className="flex-1 relative leading-[130%] inline-block max-w-full z-[2]">
                      Look no further! Our SBS The Show tickets are the simplest
                      way for you to experience a live Kpop recording.
                    </div>
                  </div>
                  <div className="w-96 flex flex-row items-start justify-start gap-[20px] max-w-full mq450:flex-wrap">
                    <Button
                      className="h-[60.2px] flex-1 shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] min-w-[118px] z-[2]"
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#fff",
                        fontSize: "18",
                        background: "#ff5f17",
                        borderRadius: "50px",
                        "&:hover": { background: "#ff5f17" },
                        height: 60.2,
                      }}
                    >
                      Join Now
                    </Button>
                    <Button
                      className="h-[60.2px] flex-1 shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] min-w-[118px] z-[2]"
                      variant="outlined"
                      sx={{
                        textTransform: "none",
                        color: "#fff",
                        fontSize: "18",
                        borderColor: "#fff",
                        borderRadius: "50px",
                        "&:hover": { borderColor: "#fff" },
                        height: 60.2,
                      }}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SearchBox />
    </section>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
