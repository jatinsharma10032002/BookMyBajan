import { useMemo } from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

const FirstFold3 = ({
  className = "",
  group,
  firstFoldMenu,
  rectangle10,
  group1,
  firstFoldAlignSelf,
  firstFoldFlex,
}) => {
  const firstFoldStyle = useMemo(() => {
    return {
      alignSelf: firstFoldAlignSelf,
      flex: firstFoldFlex,
    };
  }, [firstFoldAlignSelf, firstFoldFlex]);

  return (
    <section
      className={`self-stretch h-[428px] relative z-[1] text-left text-base text-white font-montserrat ${className}`}
      style={firstFoldStyle}
    >
      <a className="[text-decoration:none] absolute top-[17.6px] left-[153px] text-14xl-6 font-sacramento text-[inherit] inline-block w-[170.9px] h-[28.3px] mq450:text-xl mq1050:text-8xl">
        SatsangSeva
      </a>
      <img
        className="absolute top-[16.9px] left-[99px] w-[50px] h-[25.4px]"
        loading="lazy"
        alt=""
        src={group}
      />
      <img
        className="absolute top-[0px] left-[0px] w-full h-full object-cover"
        alt=""
        src={firstFoldMenu}
      />
      <img
        className="absolute top-[0px] left-[0px] w-full h-full mix-blend-normal z-[1]"
        alt=""
        src={rectangle10}
      />
      <div className="absolute top-[0px] left-[0px] shadow-[0px_8px_20px_rgba(209,_209,_209,_0.19)] w-[1440px] h-[5.4px] z-[2]" />
      <a className="[text-decoration:none] absolute top-[28px] left-[138.6px] text-14xl-6 font-sacramento text-[inherit] inline-block w-[201.3px] h-[47.1px] z-[2] mq450:text-xl mq1050:text-8xl">
        SatsangSeva
      </a>
      <img
        className="absolute top-[26.9px] left-[75px] w-[58.9px] h-[42.2px] z-[2]"
        alt=""
        src={group1}
      />
      <b className="absolute top-[135px] left-[96px] inline-block w-[443px] h-[127px] z-[2] text-21xl mq450:text-5xl mq1050:text-13xl">
        <p className="m-0">Live Event Starts In</p>
        <p className="m-0 text-45xl">00:00:00 hrs</p>
      </b>
      <Button
        className="absolute top-[311px] left-[96px] shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] z-[2]"
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "18",
          background: "#ff5f17",
          borderRadius: "50px",
          "&:hover": { background: "#ff5f17" },
          width: 182,
          height: 60.2,
        }}
      >
        Join Now
      </Button>
      <Button
        className="absolute top-[311px] left-[298px] shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] z-[2]"
        variant="outlined"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "18",
          borderColor: "#fff",
          borderRadius: "50px",
          "&:hover": { borderColor: "#fff" },
          width: 182,
          height: 60.2,
        }}
      >
        Learn More
      </Button>
      <div className="absolute top-[139px] left-[750px] text-lg leading-[130%] inline-block w-[443px] h-[69.3px] z-[2]">
        Look no further! Our SBS The Show tickets are the simplest way for you
        to experience a live Kpop recording.
      </div>
      <div className="absolute top-[230px] left-[750px] text-lg leading-[130%] inline-block w-[443px] h-[69.3px] z-[2]">
        Look no further! Our SBS The Show tickets are the simplest way for you
        to experience a live Kpop recording.
      </div>
      <a className="[text-decoration:none] absolute top-[47px] left-[721px] font-medium font-dm-sans text-[inherit] inline-block w-[133px] h-[21px] z-[2]">
        Upcoming Events
      </a>
      <a className="[text-decoration:none] absolute top-[47px] left-[903px] font-medium font-dm-sans text-[inherit] inline-block w-[111px] h-[21px] min-w-[111px] z-[2]">
        List Your Event
      </a>
      <a className="[text-decoration:none] absolute top-[47px] left-[1063px] font-medium font-dm-sans text-[inherit] inline-block w-[84px] h-[21px] min-w-[84px] z-[2]">
        Categories
      </a>
      <Button
        className="absolute top-[37px] left-[1196px] z-[2]"
        disableElevation
        variant="outlined"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "16",
          borderColor: "#fff",
          borderRadius: "50px",
          "&:hover": { borderColor: "#fff" },
          width: 123.5,
          height: 41,
        }}
      >
        Login
      </Button>
      <img
        className="absolute top-[47px] left-[582px] w-[18px] h-5 overflow-hidden z-[2]"
        loading="lazy"
        alt=""
        src="/iconsmappin.svg"
      />
      <div className="absolute top-[47px] left-[603px] text-sm font-medium font-poppins inline-block min-w-[69px] z-[2]">{`New Delhi `}</div>
    </section>
  );
};

FirstFold3.propTypes = {
  className: PropTypes.string,
  group: PropTypes.string,
  firstFoldMenu: PropTypes.string,
  rectangle10: PropTypes.string,
  group1: PropTypes.string,

  /** Style props */
  firstFoldAlignSelf: PropTypes.any,
  firstFoldFlex: PropTypes.any,
};

export default FirstFold3;
