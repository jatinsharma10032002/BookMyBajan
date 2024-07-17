import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import GroupComponent2 from "./GroupComponent2";
import GroupComponent1 from "./GroupComponent1";
import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";

const EventListing = ({ className = "" }) => {
  const [searchTopAnchorEl, setSearchTopAnchorEl] = useState(null);
  const searchTopOpen = Boolean(searchTopAnchorEl);
  const handleSearchTopClick = (event) => {
    setSearchTopAnchorEl(event.currentTarget);
  };
  const handleSearchTopClose = () => {
    setSearchTopAnchorEl(null);
  };
  return (
    <section
      className={`w-[1418px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0 text-left text-21xl text-goldenrod font-montserrat ${className}`}
    >
      <div
        className="w-[1086px] flex flex-col items-start justify-start gap-[80px] max-w-full lg:gap-[40px] mq750:gap-[20px]"
        data-scroll-to="upcomingEventsContainer"
      >
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
          <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq1050:text-13xl mq450:text-5xl">
            Upcoming Events
          </h1>
          <div className="w-[544px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full text-sm text-darkorange-200 font-dm-sans">
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px] mq750:flex-wrap">
              <div className="h-[46px] flex-1 min-w-[109px]">
                <Button
                  id="button-undefined"
                  aria-controls="menu-undefined"
                  aria-haspopup="true"
                  aria-expanded={searchTopOpen ? "true" : undefined}
                  onClick={handleSearchTopClick}
                  color="primary"
                  sx={{
                    width: "100%",
                    height: "46",
                    backgroundColor: "#ffe6c5",
                    borderRadius: "50px",
                  }}
                />
                <Menu
                  anchorEl={searchTopAnchorEl}
                  open={searchTopOpen}
                  onClose={handleSearchTopClose}
                />
              </div>
              <div className="flex-1 rounded-31xl bg-bisque flex flex-row items-start justify-between py-3.5 px-[25px] box-border min-w-[109px] gap-[20px]">
                <div className="h-[46px] w-[168px] relative rounded-31xl bg-bisque hidden" />
                <div className="relative font-medium inline-block min-w-[74px] z-[1]">
                  Event Type
                </div>
                <div className="flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0">
                  <img
                    className="w-2.5 h-[5px] relative z-[2]"
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
              </div>
              <div className="rounded-31xl bg-bisque flex flex-row items-start justify-start py-3.5 px-[25px] gap-[17px]">
                <div className="h-[46px] w-[168px] relative rounded-31xl bg-bisque hidden" />
                <div className="relative font-medium inline-block min-w-[91px] z-[1]">
                  Any Category
                </div>
                <div className="flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0">
                  <img
                    className="w-2.5 h-[5px] relative z-[2]"
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[62.5px] max-w-full text-center text-xs-4 text-orangered font-dm-sans lg:gap-[31px] mq750:gap-[16px]">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[28.5px_26.5px] min-h-[698px] max-w-full">
            <GroupComponent2
              eventCardImage="/rectangle-12-1@2x.png"
              aPR="APR"
              emptyMonth="14"
            />
            <GroupComponent2
              eventCardImage="/rectangle-12-2@2x.png"
              aPR="AUG"
              emptyMonth="20"
              propHeight="unset"
              propMinWidth="326px"
              propWidth="343px"
            />
            <GroupComponent1 rectangle12="/rectangle-12-3@2x.png" />
            <GroupComponent
              rectangle12="/rectangle-12-4@2x.png"
              aPR="APR"
              emptyMonthTwo="14"
            />
            <GroupComponent
              rectangle12="/rectangle-12-5@2x.png"
              aPR="AUG"
              emptyMonthTwo="20"
              propHeight="unset"
              propMinWidth="326px"
              propPadding="unset"
              propWidth="343px"
              propFlex="unset"
            />
            <GroupComponent1
              rectangle12="/rectangle-12-6@2x.png"
              propMinWidth="326px"
              propWidth="343px"
            />
          </div>
          <div className="w-[1038px] h-[60px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <Button
              className="self-stretch w-[182px] shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)]"
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#ff5f17",
                fontSize: "18",
                borderColor: "#ff5f17",
                borderRadius: "50px",
                "&:hover": { borderColor: "#ff5f17" },
                width: 182,
              }}
            >
              Load More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

EventListing.propTypes = {
  className: PropTypes.string,
};

export default EventListing;
