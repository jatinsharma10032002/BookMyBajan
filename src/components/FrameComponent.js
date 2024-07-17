import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FrameComponent = ({
  className = "",
  onCategoriesTextClick,
  onListYourEventClick,
}) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/landing-design-a-2");
  }, [navigate]);

  const onUpcomingEventsTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='upcomingEventsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onCategoriesTextClick1 = useCallback(() => {
    navigate("/categories-page");
  }, [navigate]);

  return (
    <header
      className={`self-stretch h-[71px] flex flex-row items-end justify-start pt-[22.6px] px-[99px] pb-0 box-border sticky gap-[3px] top-[0] z-[99] max-w-full text-left text-14xl-6 text-white font-sacramento lg:pl-[49px] lg:pr-[49px] lg:box-border mq750:pl-6 mq750:pr-6 mq750:box-border ${className}`}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] left-[0px] shadow-[0px_8px_20px_rgba(209,_209,_209,_0.19)] z-[2]" />
      <div className="self-stretch w-[472px] flex flex-col items-start justify-end pt-0 px-0 pb-[9.7px] box-border max-w-full">
        <div
          className="w-[224.9px] flex-1 flex flex-row items-start justify-start gap-[4px] cursor-pointer z-[4]"
          onClick={onGroupContainerClick}
        >
          <img
            className="h-[33.9px] w-[50px] relative"
            loading="lazy"
            alt=""
            src="/group.svg"
          />
          <a className="[text-decoration:none] h-[37.8px] flex-1 relative text-[inherit] inline-block whitespace-nowrap">
            SatsangSeva
          </a>
        </div>
      </div>
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[11px]">
        <img
          className="w-[18px] h-5 relative overflow-hidden shrink-0 z-[3]"
          loading="lazy"
          alt=""
          src="/iconsmappin.svg"
        />
      </div>
      <div className="w-[590px] flex flex-col items-start justify-end pt-0 px-0 pb-2.5 box-border max-w-full lg:w-[46px]">
        <nav className="m-0 w-[544px] flex flex-row items-start justify-between gap-[20px] max-w-full text-left text-base text-white font-dm-sans lg:hidden">
          <div className="relative text-sm font-medium font-poppins inline-block min-w-[69px] whitespace-nowrap z-[3]">{`New Delhi `}</div>
          <a
            className="[text-decoration:none] relative font-medium text-[inherit] whitespace-nowrap cursor-pointer z-[3]"
            onClick={onUpcomingEventsTextClick}
          >
            Upcoming Events
          </a>
          <a
            className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[111px] whitespace-nowrap z-[3]"
            onClick={onListYourEventClick}
          >
            List Your Event
          </a>
          <a
            className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[84px] cursor-pointer z-[3]"
            onClick={onCategoriesTextClick}
          >
            Categories
          </a>
        </nav>
      </div>
      <Button
        className="h-[41px] w-[123.5px] z-[3]"
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
        onClick={onListYourEventClick}
      >
        Login
      </Button>
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,

  /** Action props */
  onCategoriesTextClick: PropTypes.func,
  onListYourEventClick: PropTypes.func,
};

export default FrameComponent;
