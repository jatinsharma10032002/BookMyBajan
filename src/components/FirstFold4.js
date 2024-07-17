import { useMemo } from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

const FirstFold = ({
  className = "",
  iconsxCircle,
  rectangleIconAlignSelf,
  rectangleIconFlex,
}) => {
  const firstFold1Style = useMemo(() => {
    return {
      alignSelf: rectangleIconAlignSelf,
      flex: rectangleIconFlex,
    };
  }, [rectangleIconAlignSelf, rectangleIconFlex]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[71.3px] box-border relative gap-[23.7px] max-w-full text-left text-14xl-6 text-white font-sacramento mq750:pb-[46px] mq750:box-border ${className}`}
      style={firstFold1Style}
    >
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
      <header className="self-stretch h-[70.3px] flex flex-row items-start justify-center pt-[25px] px-5 pb-[4.3px] box-border sticky gap-[671px] top-[0] z-[99] max-w-full lg:gap-[335px] mq750:gap-[168px] mq450:gap-[84px]">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_8px_20px_rgba(209,_209,_209,_0.19)] z-[2]" />
        <div className="w-[50px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
          <img
            className="self-stretch h-[39px] relative max-w-full overflow-hidden shrink-0 z-[4]"
            loading="lazy"
            alt=""
            src="/group1.svg"
          />
        </div>
        <nav className="m-0 self-stretch w-[515px] flex flex-row items-start justify-between gap-[20px] max-w-full text-left text-base text-white font-dm-sans mq750:hidden">
          <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
            <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[71px] z-[3]">
              Schedule
            </a>
          </div>
          <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
            <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[70px] z-[3]">
              Speakers
            </a>
          </div>
          <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
            <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[47px] z-[3]">
              Ticket
            </a>
          </div>
          <div className="flex flex-col items-start justify-start pt-2.5 pb-0 pr-3 pl-0">
            <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[62px] z-[3]">
              Contact
            </a>
          </div>
          <Button
            className="self-stretch w-[101px] z-[3]"
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              borderColor: "#fff",
              borderRadius: "50px",
              "&:hover": { borderColor: "#fff" },
              width: 101,
            }}
          >
            Login
          </Button>
        </nav>
      </header>
      <a className="[text-decoration:none] w-[170.9px] absolute !m-[0] top-[27px] left-[153px] leading-[49px] text-[inherit] inline-block z-[4] mq1050:text-8xl mq450:text-xl">
        SatsangSeva
      </a>
      <div className="w-[1339px] flex flex-row items-start justify-start py-0 px-[76px] box-border max-w-full text-21xl font-montserrat lg:pl-[38px] lg:pr-[38px] lg:box-border">
        <div className="flex-1 flex flex-col items-end justify-start gap-[16px] max-w-full">
          <div className="w-[610px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <img
              className="h-[30px] w-[30px] relative overflow-hidden shrink-0 z-[7]"
              loading="lazy"
              alt=""
              src={iconsxCircle}
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center [row-gap:20px] max-w-full mq1050:flex-wrap">
            <div className="h-[511.7px] flex-1 relative min-w-[504px] max-w-full mq750:min-w-full">
              <div className="absolute top-[420.3px] left-[0px] w-[776px] h-[91.4px] z-[2] flex items-center justify-center">
                <img
                  className="w-full h-full z-[2] object-contain absolute left-[12px] top-[0px] [transform:scale(3.188)]"
                  alt=""
                  src="/group-30.svg"
                />
              </div>
              <img
                className="absolute top-[0px] left-[152px] w-[472px] h-[466px] object-cover z-[4]"
                alt=""
                src="/assets-2@2x.png"
              />
            </div>
            <div className="w-[451px] flex flex-col items-start justify-start pt-11 px-0 pb-0 box-border min-w-[451px] max-w-full ml-[-40px] mq750:min-w-full mq1050:flex-1 mq1050:ml-0">
              <div className="self-stretch flex flex-col items-start justify-start gap-[30.1px] max-w-full mq450:gap-[15px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[13.4px] max-w-full">
                    <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit shrink-0 z-[2] mq1050:text-13xl mq450:text-5xl">
                      Get yourself into the Real cause of Your Life
                    </h1>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border max-w-full text-lg">
                      <div className="flex-1 relative leading-[130%] inline-block shrink-0 max-w-full z-[2]">
                        Look no further! Our SBS The Show tickets are the
                        simplest way for you to experience a live Kpop
                        recording.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-96 flex flex-row items-start justify-start gap-[20px] max-w-full text-center text-lg font-dm-sans mq450:flex-wrap">
                  <div className="shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] rounded-31xl bg-orangered flex flex-row items-start justify-start py-[18.1px] pr-11 pl-[46px] whitespace-nowrap z-[2]">
                    <div className="h-[60.2px] w-[182px] relative shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] rounded-31xl bg-orangered hidden" />
                    <b className="relative inline-block min-w-[92px] z-[1]">
                      Get Ticket
                    </b>
                  </div>
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
  );
};

FirstFold.propTypes = {
  className: PropTypes.string,
  iconsxCircle: PropTypes.string,

  /** Style props */
  rectangleIconAlignSelf: PropTypes.any,
  rectangleIconFlex: PropTypes.any,
};

export default FirstFold;
