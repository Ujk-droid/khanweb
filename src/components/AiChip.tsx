"use client";

import React from "react";

interface AiChipProps {
  animated?: boolean;
  size?: number;
  className?: string;
}

export const AiChip: React.FC<AiChipProps> = ({
  animated = true,
  size = 200,
  className = "",
}) => {
  const strokeColor = "#B78460"; // Rose Copper Gold
  const strokeWidth = 2;
  const padding = 20;
  const innerSize = size - padding * 2;

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="drop-shadow-lg"
      >
        {/* Outer square frame */}
        <rect
          x={padding}
          y={padding}
          width={innerSize}
          height={innerSize}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Circuit traces (90-degree lines) - Top Left */}
        <line
          x1={padding}
          y1={padding + 30}
          x2={padding - 25}
          y2={padding + 30}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <line
          x1={padding - 25}
          y1={padding + 30}
          x2={padding - 25}
          y2={padding}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />

        {/* Circuit traces - Top Right */}
        <line
          x1={padding + innerSize}
          y1={padding + 35}
          x2={padding + innerSize + 25}
          y2={padding + 35}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <line
          x1={padding + innerSize + 25}
          y1={padding + 35}
          x2={padding + innerSize + 25}
          y2={padding}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />

        {/* Circuit traces - Bottom Left */}
        <line
          x1={padding}
          y1={padding + innerSize - 30}
          x2={padding - 25}
          y2={padding + innerSize - 30}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <line
          x1={padding - 25}
          y1={padding + innerSize - 30}
          x2={padding - 25}
          y2={padding + innerSize}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />

        {/* Circuit traces - Bottom Right */}
        <line
          x1={padding + innerSize}
          y1={padding + innerSize - 35}
          x2={padding + innerSize + 25}
          y2={padding + innerSize - 35}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <line
          x1={padding + innerSize + 25}
          y1={padding + innerSize - 35}
          x2={padding + innerSize + 25}
          y2={padding + innerSize}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />

        {/* Inner connecting circuit paths */}
        <line
          x1={padding + 15}
          y1={padding + 15}
          x2={padding + 40}
          y2={padding + 15}
          stroke={strokeColor}
          strokeWidth={1}
          opacity="0.6"
          strokeLinecap="round"
        />
        <line
          x1={padding + 40}
          y1={padding + 15}
          x2={padding + 40}
          y2={padding + 40}
          stroke={strokeColor}
          strokeWidth={1}
          opacity="0.6"
          strokeLinecap="round"
        />

        {/* Central core circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={15}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          opacity="0.8"
        />

        {/* Central core dot with pulse */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={8}
          fill={strokeColor}
          opacity={animated ? "0.9" : "0.7"}
        >
          {animated && (
            <animate
              attributeName="r"
              from="6"
              to="12"
              dur="2s"
              repeatCount="indefinite"
            />
          )}
          {animated && (
            <animate
              attributeName="opacity"
              from="0.9"
              to="0.3"
              dur="2s"
              repeatCount="indefinite"
            />
          )}
        </circle>

        {/* Subtle glow effect for the core */}
        {animated && (
          <circle
            cx={size / 2}
            cy={size / 2}
            r={8}
            fill="none"
            stroke={strokeColor}
            strokeWidth="1"
            opacity="0.3"
          >
            <animate
              attributeName="r"
              from="8"
              to="20"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="0.6"
              to="0"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        )}
      </svg>
    </div>
  );
};

export default AiChip;
