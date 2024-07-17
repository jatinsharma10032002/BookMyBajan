import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LiveEvent from "./LiveEvent";
import PropTypes from "prop-types";

const Main1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onCategoriesTextClick = useCallback(() => {
    navigate("/categories-page");
  }, [navigate]);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[35px] box-border max-w-full ${className}`}
    >
      <header className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[56.8px] box-border relative gap-[23.5px] max-w-full text-left text-14xl-6 text-white font-sacramento mq450:pb-[37px] mq450:box-border">
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px]">
          <img
            className="absolute top-[0px] left-[-1px] w-full h-full object-cover"
            alt=""
            src="/rectangle-121@2x.png"
          />
          <img
            className="absolute top-[0px] left-[-1px] w-full h-full mix-blend-normal z-[1]"
            alt=""
            src="/rectangle-101.svg"
          />
        </div>
        <div className="self-stretch h-[5.4px] relative shadow-[0px_8px_20px_rgba(209,_209,_209,_0.19)] z-[2]" />
        <div className="w-[1392.5px] flex flex-row items-start justify-start py-0 px-[75px] box-border max-w-full shrink-0 lg:pl-[37px] lg:pr-[37px] lg:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[54.5px] max-w-full mq750:gap-[27px]">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-0.5 pl-0 box-border gap-[3px] max-w-full">
              <img
                className="h-[45.3px] w-[58.9px] relative z-[2]"
                loading="lazy"
                alt=""
                src="/group5.svg"
              />
              <div className="w-[438.4px] flex flex-col items-start justify-start pt-[1.1px] pb-0 pr-5 pl-0 box-border max-w-full">
                <a className="[text-decoration:none] w-[201.3px] relative text-[inherit] inline-block z-[2]">
                  SatsangSeva
                </a>
              </div>
              <div className="flex flex-col items-start justify-start pt-[16.1px] px-0 pb-0">
                <img
                  className="w-[18px] h-5 relative overflow-hidden shrink-0 z-[2]"
                  loading="lazy"
                  alt=""
                  src="/iconsmappin.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[16.1px] px-0 pb-0 box-border min-w-[383px] max-w-full mq750:min-w-full">
                <nav className="m-0 w-[544px] flex flex-row items-start justify-between gap-[20px] max-w-full whitespace-nowrap text-left text-base text-white font-dm-sans mq750:flex-wrap">
                  <div className="relative text-sm font-medium font-poppins inline-block min-w-[69px] whitespace-nowrap z-[2]">{`New Delhi `}</div>
                  <a className="[text-decoration:none] relative font-medium text-[inherit] whitespace-nowrap z-[2]">
                    Upcoming Events
                  </a>
                  <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[111px] whitespace-nowrap z-[2]">
                    List Your Event
                  </a>
                  <a
                    className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[84px] cursor-pointer z-[2]"
                    onClick={onCategoriesTextClick}
                  >
                    Categories
                  </a>
                </nav>
              </div>
              <div className="w-[123.5px] flex flex-col items-start justify-start pt-[6.1px] px-0 pb-0 box-border">
                <Button
                  className="self-stretch h-[41px] z-[2]"
                  disableElevation
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "16",
                    borderColor: "#fff",
                    borderRadius: "50px",
                    "&:hover": { borderColor: "#fff" },
                    height: 41,
                  }}
                >
                  Login
                </Button>
              </div>
            </div>
            <LiveEvent propWidth="1139px" />
          </div>
        </div>
      </header>
    </section>
  );
};

Main1.propTypes = {
  className: PropTypes.string,
};

export default Main1;
