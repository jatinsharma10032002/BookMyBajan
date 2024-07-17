import Footer from "./Footer1";
import PropTypes from "prop-types";

const EventListHeader = ({ className = "" }) => {
  return (
    <section
      className={`w-[1358px] flex flex-row items-start justify-end py-0 px-px box-border max-w-full ${className}`}
    >
      <Footer
        group="/group1.svg"
        facebook="/facebook.svg"
        twitter="/twitter.svg"
        linkedin="/linkedin.svg"
        group1="/group1.svg"
        footerAlignSelf="unset"
        footerWidth="1440px"
      />
    </section>
  );
};

EventListHeader.propTypes = {
  className: PropTypes.string,
};

export default EventListHeader;
