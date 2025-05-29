import React from "react";

const CurvedText = ({ text }: { text: string }) => {
  return (
    <div
      style={{
        width: "280px",
        height: "140px",
        margin: "0 auto",
        position: "relative",
        overflow: "visible",
        fontFamily: "'Poppins', sans-serif",
        fontWeight: "700",
        fontSize: "2.5rem",
        background:
          "linear-gradient(90deg, #D1D1D1, #B0B0B0, #464545)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textAlign: "center",
        borderBottomLeftRadius: "150px",
        borderBottomRightRadius: "150px",
        writingMode: "horizontal-tb",
        transform: "translateY(20px)",
      }}
    >
      {text}
    </div>
  );
};

export default CurvedText;
