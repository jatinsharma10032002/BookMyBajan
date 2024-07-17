import { Button } from "@mui/material";
import PropTypes from "prop-types";

const FirstFold1 = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[56.8px] box-border relative gap-[27px] max-w-full text-left text-14xl-6 text-white font-sacramento mq450:pb-[37px] mq450:box-border ${className}`}
    >
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/rectangle-121@2x.png"
        />
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full mix-blend-normal z-[1]"
          alt=""
          src="/rectangle-101.svg"
        />
      </div>
      <div className="self-stretch h-[5.4px] relative shadow-[0px_8px_20px_rgba(209,_209,_209,_0.19)] z-[2]" />
      <div className="flex flex-row items-start justify-start py-0 px-[75px] box-border max-w-full lg:pl-[37px] lg:pr-[37px] lg:box-border">
        <div className="flex flex-col items-start justify-start gap-[11.7px] max-w-full">
          <div className="flex flex-row items-start justify-start gap-[42px] max-w-full mq750:gap-[21px]">
            <div className="w-[501px] flex flex-col items-start justify-start py-0 pr-[37px] pl-0 box-border gap-[44.7px] max-w-full mq750:gap-[22px]">
              <div className="w-[264.9px] flex flex-row items-start justify-start gap-[4.7px]">
                <img
                  className="h-[50.7px] w-[58.9px] relative z-[2]"
                  loading="lazy"
                  alt=""
                  src="/group6.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-[1.3px] px-0 pb-0">
                  <a className="[text-decoration:none] self-stretch h-[56.6px] relative text-[inherit] inline-block shrink-0 z-[2]">
                    SatsangSeva
                  </a>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[21px] box-border max-w-full text-21xl font-montserrat">
                <b className="flex-1 relative inline-block max-w-full z-[2]">
                  <p className="m-0">Live Event Starts In</p>
                  <p className="m-0 text-45xl">00:00:00 hrs</p>
                </b>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[29.6px] px-0 pb-0 text-sm font-poppins">
              <div className="flex flex-row items-start justify-start gap-[3px]">
                <img
                  className="h-5 w-[18px] relative overflow-hidden shrink-0 z-[2]"
                  loading="lazy"
                  alt=""
                  src="/iconsmappin.svg"
                />
                <div className="relative font-medium inline-block min-w-[69px] whitespace-nowrap z-[2]">{`New Delhi `}</div>
              </div>
            </div>
            <div className="w-[575px] flex flex-col items-start justify-start pt-[19.6px] px-0 pb-0 box-border max-w-full text-lg font-montserrat">
              <div className="self-stretch flex flex-col items-start justify-start gap-[47px] max-w-full mq750:gap-[23px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[7px] box-border max-w-full">
                  <nav className="m-0 flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-base text-white font-dm-sans">
                    <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                      <a className="[text-decoration:none] relative font-medium text-[inherit] whitespace-nowrap z-[2]">
                        Upcoming Events
                      </a>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                      <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[111px] whitespace-nowrap z-[2]">
                        List Your Event
                      </a>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                      <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[84px] z-[2]">
                        Categories
                      </a>
                    </div>
                    <div className="w-[93px] flex flex-row items-start justify-start gap-[7px]">
                      <div className="h-10 w-[41px] rounded-31xl box-border flex flex-row items-center justify-center py-2.5 px-[9px] z-[2] border-[1.5px] border-solid border-white">
                        <img
                          className="h-5 w-5 relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/users.svg"
                        />
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                        <a className="[text-decoration:none] self-stretch relative font-medium text-[inherit] z-[2]">
                          Jatin
                        </a>
                      </div>
                    </div>
                  </nav>
                </div>
                <div className="w-[443px] flex flex-col items-start justify-start gap-[21.7px] max-w-full">
                  <div className="self-stretch relative leading-[130%] shrink-0 z-[2]">
                    Look no further! Our SBS The Show tickets are the simplest
                    way for you to experience a live Kpop recording.
                  </div>
                  <div className="self-stretch relative leading-[130%] shrink-0 z-[2]">
                    Look no further! Our SBS The Show tickets are the simplest
                    way for you to experience a live Kpop recording.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[426px] h-[60.2px] flex flex-row items-start justify-start py-0 px-[21px] box-border max-w-full">
            <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[20px] max-w-full">
              <Button
                className="h-[60.2px] flex-1 shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] z-[2]"
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
                className="self-stretch flex-1 shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] z-[2]"
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "18",
                  borderColor: "#fff",
                  borderRadius: "50px",
                  "&:hover": { borderColor: "#fff" },
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

FirstFold1.propTypes = {
  className: PropTypes.string,
};

export default FirstFold1;
