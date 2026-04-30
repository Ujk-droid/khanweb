"use client";

import { useRef, useEffect, useState } from "react";
import DottedMap from "dotted-map";

interface MapDot {
  lat: number;
  lng: number;
  label?: string;
}

interface MapConnection {
  from: MapDot;
  to: MapDot;
}

interface WorldMapProps {
  dots?: MapDot[];
  connections?: MapConnection[];
  className?: string;
}

// Default: TechExa Vision office (Karachi) + key client/partner cities
const DEFAULT_DOTS: MapDot[] = [
  { lat: 24.86,  lng: 67.01,  label: "Karachi" },      // HQ
  { lat: 51.51,  lng: -0.13,  label: "London" },
  { lat: 40.71,  lng: -74.01, label: "New York" },
  { lat: 25.20,  lng: 55.27,  label: "Dubai" },
  { lat: 1.35,   lng: 103.82, label: "Singapore" },
  { lat: 28.61,  lng: 77.21,  label: "Delhi" },
];

const DEFAULT_CONNECTIONS: MapConnection[] = [
  { from: DEFAULT_DOTS[0], to: DEFAULT_DOTS[1] }, // Karachi → London
  { from: DEFAULT_DOTS[0], to: DEFAULT_DOTS[2] }, // Karachi → New York
  { from: DEFAULT_DOTS[0], to: DEFAULT_DOTS[3] }, // Karachi → Dubai
  { from: DEFAULT_DOTS[0], to: DEFAULT_DOTS[4] }, // Karachi → Singapore
  { from: DEFAULT_DOTS[0], to: DEFAULT_DOTS[5] }, // Karachi → Delhi
];

// Convert lat/lng to SVG x/y coordinates (equirectangular projection)
function latLngToSvg(lat: number, lng: number, width: number, height: number) {
  const x = ((lng + 180) / 360) * width;
  const y = ((90 - lat) / 180) * height;
  return { x, y };
}

// Curved path between two points
function getCurvedPath(
  x1: number, y1: number,
  x2: number, y2: number,
): string {
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  // Control point lifted above the midpoint for a nice arc
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const lift = Math.min(dist * 0.35, 80);
  const cpX = midX;
  const cpY = midY - lift;
  return `M ${x1} ${y1} Q ${cpX} ${cpY} ${x2} ${y2}`;
}

export default function WorldMap({
  dots = DEFAULT_DOTS,
  connections = DEFAULT_CONNECTIONS,
  className = "",
}: WorldMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [mapSvg, setMapSvg] = useState<string>("");

  const W = 800;
  const H = 400;

  useEffect(() => {
    // Generate dotted world map SVG
    const map = new DottedMap({ height: 60, grid: "diagonal" });
    const svg = map.getSVG({
      radius: 0.22,
      color: "rgba(183, 132, 96, 0.18)",
      shape: "circle",
      backgroundColor: "transparent",
    });
    setMapSvg(svg);
  }, []);

  return (
    <div
      className={`relative w-full overflow-hidden rounded-3xl ${className}`}
      style={{
        background: "rgba(20, 20, 20, 0.65)",
        border: "1px solid rgba(183, 132, 96, 0.12)",
        backdropFilter: "blur(16px)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.04), inset 0 -1px 0 rgba(0,0,0,0.3), 0 8px 32px rgba(0,0,0,0.4)",
      }}
    >
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        style={{ display: "block" }}
      >
        {/* Dotted map background */}
        {mapSvg && (
          <image
            href={`data:image/svg+xml;base64,${btoa(mapSvg)}`}
            x="0" y="0"
            width={W} height={H}
            preserveAspectRatio="xMidYMid slice"
          />
        )}

        {/* Connection arcs */}
        {connections.map((conn, i) => {
          const from = latLngToSvg(conn.from.lat, conn.from.lng, W, H);
          const to   = latLngToSvg(conn.to.lat,   conn.to.lng,   W, H);
          const path = getCurvedPath(from.x, from.y, to.x, to.y);
          const pathLen = 600; // approximate
          return (
            <g key={i}>
              {/* Static faint arc */}
              <path
                d={path}
                fill="none"
                stroke="rgba(183, 132, 96, 0.15)"
                strokeWidth="0.8"
              />
              {/* Animated travelling beam */}
              <path
                d={path}
                fill="none"
                stroke="rgba(229, 192, 160, 0.7)"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeDasharray={`${pathLen * 0.12} ${pathLen}`}
                strokeDashoffset="0"
                style={{
                  animation: `map-beam ${2.8 + i * 0.4}s ease-in-out ${i * 0.5}s infinite`,
                }}
              />
            </g>
          );
        })}

        {/* City dots */}
        {dots.map((dot, i) => {
          const { x, y } = latLngToSvg(dot.lat, dot.lng, W, H);
          const isHQ = i === 0;
          return (
            <g key={i}>
              {/* Outer pulse ring */}
              <circle
                cx={x} cy={y}
                r={isHQ ? 8 : 5}
                fill="none"
                stroke={isHQ ? "rgba(229, 192, 160, 0.25)" : "rgba(183, 132, 96, 0.18)"}
                strokeWidth="1"
              >
                <animate
                  attributeName="r"
                  values={isHQ ? "8;14;8" : "5;9;5"}
                  dur={isHQ ? "2s" : "2.5s"}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.6;0;0.6"
                  dur={isHQ ? "2s" : "2.5s"}
                  repeatCount="indefinite"
                />
              </circle>

              {/* Core dot */}
              <circle
                cx={x} cy={y}
                r={isHQ ? 4 : 2.5}
                fill={isHQ ? "#E5C0A0" : "#B78460"}
                style={{ filter: isHQ ? "drop-shadow(0 0 4px rgba(229,192,160,0.8))" : "drop-shadow(0 0 3px rgba(183,132,96,0.6))" }}
              />

              {/* Label */}
              {dot.label && (
                <text
                  x={x}
                  y={y - (isHQ ? 10 : 8)}
                  textAnchor="middle"
                  fontSize={isHQ ? "8" : "6.5"}
                  fontFamily="Outfit, system-ui, sans-serif"
                  fontWeight={isHQ ? "600" : "400"}
                  fill={isHQ ? "#E5C0A0" : "rgba(183, 132, 96, 0.8)"}
                  style={{ letterSpacing: "0.05em" }}
                >
                  {dot.label}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {/* Bottom label */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center">
        <span
          className="text-xs tracking-widest uppercase px-3 py-1 rounded-full"
          style={{
            color: "rgba(183, 132, 96, 0.6)",
            background: "rgba(11, 11, 12, 0.5)",
            border: "1px solid rgba(183, 132, 96, 0.10)",
          }}
        >
          Global Reach · Karachi HQ
        </span>
      </div>
    </div>
  );
}
