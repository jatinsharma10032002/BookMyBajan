import { Button } from "@mui/material";
import PropTypes from "prop-types";

const FirstFold2 = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[56.8px] box-border relative gap-[37.3px] max-w-full text-left text-14xl-6 text-white font-sacramento mq750:gap-[19px] mq450:pb-[37px] mq450:box-border ${className}`}
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
      <div className="w-[1400px] flex flex-row items-start justify-start py-0 px-[75px] box-border max-w-full lg:pl-[37px] lg:pr-[37px] lg:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[4.7px] max-w-full">
            <img
              className="h-[66.9px] w-[58.9px] relative z-[2]"
              loading="lazy"
              alt=""
              src="/group31.svg"
            />
            <div className="w-[495.7px] flex flex-col items-start justify-start pt-[1.7px] pb-0 pr-5 pl-0 box-border relative max-w-full">
              <a className="[text-decoration:none] w-[201.3px] h-[74.6px] relative text-[inherit] inline-block shrink-0 z-[2]">
                SatsangSeva
              </a>
              <img
                className="w-[18px] h-5 absolute !m-[0] top-[19.3px] right-[-1.7px] overflow-hidden shrink-0 z-[2]"
                loading="lazy"
                alt=""
                src="/iconsmappin.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[19.3px] px-0 pb-0 box-border max-w-full">
              <nav className="m-0 w-[544px] flex flex-row items-start justify-between gap-[20px] max-w-full text-left text-base text-white font-dm-sans">
                <div className="relative text-sm font-medium font-poppins inline-block min-w-[69px] whitespace-nowrap z-[2]">{`New Delhi `}</div>
                <a className="[text-decoration:none] relative font-medium text-[inherit] whitespace-nowrap z-[2]">
                  Upcoming Events
                </a>
                <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[111px] whitespace-nowrap z-[2]">
                  List Your Event
                </a>
                <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[84px] z-[2]">
                  Categories
                </a>
              </nav>
            </div>
            <div className="flex flex-col items-start justify-start pt-[9.3px] pb-0 pr-0.5 pl-0">
              <div className="w-[41px] h-10 rounded-31xl box-border flex flex-row items-center justify-center py-2.5 px-[9px] z-[2] border-[1.5px] border-solid border-white">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/users.svg"
                />
              </div>
            </div>
            <div className="w-[45px] flex flex-col items-start justify-start pt-[18.3px] px-0 pb-0 box-border text-base font-dm-sans">
              <a className="[text-decoration:none] self-stretch relative font-medium text-[inherit] z-[2]">
                Jatin
              </a>
            </div>
          </div>
          <div className="w-[1139px] flex flex-row items-start justify-start py-0 px-[21px] box-border max-w-full text-21xl font-montserrat">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
              <div className="w-[443px] flex flex-col items-start justify-start gap-[49px] max-w-full mq450:gap-[24px]">
                <b className="self-stretch relative z-[2]">
                  <p className="m-0">Live Event Starts In</p>
                  <p className="m-0 text-45xl">00:00:00 hrs</p>
                </b>
                <div className="w-96 h-[60.2px] flex flex-row items-start justify-start gap-[20px] max-w-full">
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
              <div className="w-[443px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border max-w-full text-lg">
                <div className="self-stretch flex flex-col items-start justify-start gap-[21.7px]">
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
        </div>
      </div>
    </header>
  );
};

FirstFold2.propTypes = {
  className: PropTypes.string,
};

export default FirstFold2;
