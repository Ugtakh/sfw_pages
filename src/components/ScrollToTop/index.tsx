import React, { useEffect } from "react";
import { animateScroll } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [offset, setOffset] = React.useState(300);
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > offset) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [offset]);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <>
      {show && (
        <button
          className="bg-primary rounded-lg w-12 h-12 right-4 bottom-3 transition-all duration-100 ease-in flex items-center justify-center fixed"
          type="button"
          onClick={scrollToTop}
        >
          <FaArrowUp size={20} color="white" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
