import { CSSProperties } from "react";
import "../../styles/loader.css";

const getCircleClass = (index: number) => {
  return {
    position: "absolute",
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    backgroundColor: "rgba(231, 245, 224, 1)",
    zIndex: -1,
    animation: `firstPulse 4s ${index + `s`} infinite`
  } as CSSProperties;
};

export default function Loader() {
  return (
    <div className="container">
      <div className="smallDot"></div>
      {[...Array(4)].map((item, index) => {
        return <div key={index} style={getCircleClass(index)}></div>;
      })}
    </div>
  );
}
