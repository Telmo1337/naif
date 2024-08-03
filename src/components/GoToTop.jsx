/* eslint-disable react/prop-types */
import  { useEffect, useState } from "react";

const GoToTop = ({ className, circleColor = "black", iconColor = "black" }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [dashOffset, setDashOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      const progress = (scrollTop / (fullHeight - windowHeight)) * 100;
      setScrollProgress(progress);

      // Calculate the dash offset dynamically
      const newDashOffset = 305 * (1 - progress / 100);
      setDashOffset(newDashOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const visibilityStyle = {
    opacity: scrollProgress > 20 ? 1 : 0,
    pointerEvents: scrollProgress > 20 ? "auto" : "none",
    position: "fixed",
    right: "30px",
    bottom: "90px",
    height: "46px",
    width: "46px",
    cursor: "pointer",
    borderRadius: "50px",
    boxShadow: "rgb(151 139 139 / 99%) 0px 0px 0px ",
    zIndex: 99,
    transition: "all 200ms linear",
    background: "#ffffff80",
    transform: scrollProgress > 20 ? "translateY(0)" : "translateY(15px)",
    visibility: scrollProgress > 20 ? "visible" : "hidden",
  };

  const circleStyle = {
    stroke: circleColor,
    strokeWidth: 4,
    boxSizing: "border-box",
    transition: "all 200ms linear",
    strokeDasharray: "299.875",
    strokeDashoffset: dashOffset,
  };

  const iconStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) rotate(180deg)",
    stroke: iconColor,
  };

  return (
    <div
      className={`${className ? className : ""}`}
      style={visibilityStyle}
      onClick={handleBackToTop}
    >
      <svg
        className=""
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
        fill="none"
      >
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={circleStyle}
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        style={iconStyle}
      >
        <line x1="12" y1="5" x2="12" y2="19" stroke={iconColor}></line>
        <polyline points="19 12 12 19 5 12" stroke={iconColor}></polyline>
      </svg>
    </div>
  );
};

export default GoToTop;
