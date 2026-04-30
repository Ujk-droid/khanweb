"use client";

import React from "react";
import TiltWrapper from "@/components/TiltWrapper";

// ─────────────────────────────────────────────────────────────
//  AiChip — Rose Copper Gold Integrated Circuit SVG
//
//  Variants:
//    "hero"   — large, animated, used as background accent
//    "badge"  — small, static, used as card corner badge
//    "divider"— horizontal circuit-trace divider between sections
// ─────────────────────────────────────────────────────────────

interface AiChipProps {
  variant?: "hero" | "badge" | "divider";
  className?: string;
  size?: number;
  animated?: boolean;
}

// ── Shared copper palette ────────────────────────────────────
const C  = "#B78460";   // Rose Copper Gold
const CH = "#E5C0A0";   // Champagne highlight
const CB = "#8A5A3C";   // Dark Bronze shadow
const DIM = "rgba(183,132,96,0.18)";  // dim trace

// ── Hero chip — 200×200 viewBox, full IC with traces ─────────
export function HeroChip({ className = "", animated = true }: { className?: string; animated?: boolean }) {
  return (
    <TiltWrapper className={className}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
      >
        <defs>
          {/* Metallic copper gradient for chip body */}
          <linearGradient id="chipBody" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"   stopColor="#1A1410" />
            <stop offset="50%"  stopColor="#141210" />
            <stop offset="100%" stopColor="#0F0D0B" />
          </linearGradient>

          {/* Copper trace gradient */}
          <linearGradient id="traceGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor={CB}  stopOpacity="0" />
            <stop offset="40%"  stopColor={C}   stopOpacity="1" />
            <stop offset="60%"  stopColor={CH}  stopOpacity="1" />
            <stop offset="100%" stopColor={CB}  stopOpacity="0" />
          </linearGradient>

          {/* Vertical trace gradient */}
          <linearGradient id="traceGradV" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor={CB}  stopOpacity="0" />
            <stop offset="40%"  stopColor={C}   stopOpacity="1" />
            <stop offset="60%"  stopColor={CH}  stopOpacity="1" />
            <stop offset="100%" stopColor={CB}  stopOpacity="0" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="chipGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Pulse glow filter */}
          <filter id="pulseGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Travelling light animation along a path */}
          <radialGradient id="dotGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor={CH} stopOpacity="1" />
            <stop offset="100%" stopColor={C} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ── Outer circuit board traces (left side) ─────────── */}
        {/* Left pins */}
        {[30, 50, 70, 90, 110, 130, 150, 170].map((y, i) => (
          <g key={`lpin-${i}`}>
            <line x1="0" y1={y} x2="55" y2={y} stroke={DIM} strokeWidth="1" />
            <line x1="0" y1={y} x2="55" y2={y} stroke={`url(#traceGrad)`} strokeWidth="0.8" opacity="0.6" />
            {/* Pin pad */}
            <rect x="0" y={y - 3} width="8" height="6" rx="1" fill={CB} opacity="0.7" />
            {/* 90° corner trace for alternating pins */}
            {i % 2 === 0 && (
              <path d={`M 20 ${y} L 20 ${y + 10} L 40 ${y + 10}`} stroke={DIM} strokeWidth="0.7" fill="none" />
            )}
          </g>
        ))}

        {/* Right pins */}
        {[30, 50, 70, 90, 110, 130, 150, 170].map((y, i) => (
          <g key={`rpin-${i}`}>
            <line x1="145" y1={y} x2="200" y2={y} stroke={DIM} strokeWidth="1" />
            <line x1="145" y1={y} x2="200" y2={y} stroke={`url(#traceGrad)`} strokeWidth="0.8" opacity="0.6" />
            <rect x="192" y={y - 3} width="8" height="6" rx="1" fill={CB} opacity="0.7" />
            {i % 2 === 1 && (
              <path d={`M 180 ${y} L 180 ${y - 10} L 160 ${y - 10}`} stroke={DIM} strokeWidth="0.7" fill="none" />
            )}
          </g>
        ))}

        {/* Top pins */}
        {[40, 60, 80, 100, 120, 140, 160].map((x, i) => (
          <g key={`tpin-${i}`}>
            <line x1={x} y1="0" x2={x} y2="55" stroke={DIM} strokeWidth="1" />
            <line x1={x} y1="0" x2={x} y2="55" stroke={`url(#traceGradV)`} strokeWidth="0.8" opacity="0.6" />
            <rect x={x - 3} y="0" width="6" height="8" rx="1" fill={CB} opacity="0.7" />
          </g>
        ))}

        {/* Bottom pins */}
        {[40, 60, 80, 100, 120, 140, 160].map((x, i) => (
          <g key={`bpin-${i}`}>
            <line x1={x} y1="145" x2={x} y2="200" stroke={DIM} strokeWidth="1" />
            <line x1={x} y1="145" x2={x} y2="200" stroke={`url(#traceGradV)`} strokeWidth="0.8" opacity="0.6" />
            <rect x={x - 3} y="192" width="6" height="8" rx="1" fill={CB} opacity="0.7" />
          </g>
        ))}

        {/* ── Chip body ───────────────────────────────────────── */}
        <rect x="55" y="55" width="90" height="90" rx="6" fill="url(#chipBody)" />

        {/* Chip body border — copper metallic */}
        <rect
          x="55" y="55" width="90" height="90" rx="6"
          fill="none"
          stroke={C}
          strokeWidth="1.2"
          opacity="0.7"
        />

        {/* Inner chip border */}
        <rect
          x="62" y="62" width="76" height="76" rx="4"
          fill="none"
          stroke={CB}
          strokeWidth="0.6"
          opacity="0.4"
        />

        {/* ── Internal die grid ───────────────────────────────── */}
        {/* Horizontal internal traces */}
        {[75, 88, 100, 112, 125].map((y, i) => (
          <line key={`ih-${i}`} x1="62" y1={y} x2="138" y2={y} stroke={DIM} strokeWidth="0.5" />
        ))}
        {/* Vertical internal traces */}
        {[75, 88, 100, 112, 125].map((x, i) => (
          <line key={`iv-${i}`} x1={x} y1="62" x2={x} y2="138" stroke={DIM} strokeWidth="0.5" />
        ))}

        {/* ── Core processor block ────────────────────────────── */}
        <rect x="78" y="78" width="44" height="44" rx="3" fill="#0D0B09" />
        <rect
          x="78" y="78" width="44" height="44" rx="3"
          fill="none" stroke={C} strokeWidth="0.8" opacity="0.5"
        />

        {/* CPU text */}
        <text
          x="100" y="97"
          textAnchor="middle"
          fontSize="7"
          fontFamily="Outfit, monospace"
          fontWeight="600"
          fill={CH}
          letterSpacing="1"
          opacity="0.9"
        >
          AI
        </text>
        <text
          x="100" y="108"
          textAnchor="middle"
          fontSize="5"
          fontFamily="Outfit, monospace"
          fontWeight="400"
          fill={C}
          letterSpacing="0.5"
          opacity="0.7"
        >
          CHIP
        </text>

        {/* Corner notch (IC orientation marker) */}
        <circle cx="62" cy="62" r="3" fill="#0D0B09" stroke={C} strokeWidth="0.6" opacity="0.6" />

        {/* ── Animated travelling light pulses ────────────────── */}
        {animated && (
          <>
            {/* Pulse on left trace row 3 */}
            <circle r="2.5" fill="url(#dotGlow)" filter="url(#pulseGlow)">
              <animateMotion dur="2.4s" repeatCount="indefinite" begin="0s">
                <mpath href="#traceL3" />
              </animateMotion>
            </circle>

            {/* Pulse on right trace row 5 */}
            <circle r="2" fill="url(#dotGlow)" filter="url(#pulseGlow)">
              <animateMotion dur="2.8s" repeatCount="indefinite" begin="0.6s">
                <mpath href="#traceR5" />
              </animateMotion>
            </circle>

            {/* Pulse on top trace col 3 */}
            <circle r="2" fill="url(#dotGlow)" filter="url(#pulseGlow)">
              <animateMotion dur="3.2s" repeatCount="indefinite" begin="1.2s">
                <mpath href="#traceT3" />
              </animateMotion>
            </circle>

            {/* Pulsing core glow */}
            <rect x="78" y="78" width="44" height="44" rx="3" fill="none" stroke={C} strokeWidth="1.5" opacity="0">
              <animate attributeName="opacity" values="0;0.4;0" dur="2s" repeatCount="indefinite" />
              <animate attributeName="stroke-width" values="1.5;3;1.5" dur="2s" repeatCount="indefinite" />
            </rect>
          </>
        )}

        {/* Hidden paths for animateMotion */}
        <path id="traceL3" d="M 0 70 L 55 70" visibility="hidden" />
        <path id="traceR5" d="M 200 110 L 145 110" visibility="hidden" />
        <path id="traceT3" d="M 80 0 L 80 55" visibility="hidden" />
      </svg>
    </TiltWrapper>
  );
}

// ── Badge chip — 32×32, minimal IC corner badge ──────────────
export function ChipBadge({ className = "" }: { className?: string }) {
  return (
    <TiltWrapper className={className}>
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="badgeBody" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"  stopColor="#1E1612" />
            <stop offset="100%" stopColor="#0F0D0B" />
          </linearGradient>
          <filter id="badgeGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Chip body */}
        <rect x="8" y="8" width="16" height="16" rx="2.5" fill="url(#badgeBody)" />
        <rect x="8" y="8" width="16" height="16" rx="2.5" fill="none" stroke={C} strokeWidth="0.8" opacity="0.8" />

        {/* Inner border */}
        <rect x="10.5" y="10.5" width="11" height="11" rx="1.5" fill="none" stroke={CB} strokeWidth="0.5" opacity="0.5" />

        {/* Left pins */}
        {[12, 16, 20].map((y) => (
          <g key={y}>
            <line x1="4" y1={y} x2="8" y2={y} stroke={C} strokeWidth="0.8" opacity="0.7" />
            <rect x="3" y={y - 1} width="2.5" height="2" rx="0.4" fill={CB} opacity="0.8" />
          </g>
        ))}

        {/* Right pins */}
        {[12, 16, 20].map((y) => (
          <g key={y}>
            <line x1="24" y1={y} x2="28" y2={y} stroke={C} strokeWidth="0.8" opacity="0.7" />
            <rect x="26.5" y={y - 1} width="2.5" height="2" rx="0.4" fill={CB} opacity="0.8" />
          </g>
        ))}

        {/* Top pins */}
        {[13, 19].map((x) => (
          <g key={x}>
            <line x1={x} y1="4" x2={x} y2="8" stroke={C} strokeWidth="0.8" opacity="0.7" />
            <rect x={x - 1} y="3" width="2" height="2.5" rx="0.4" fill={CB} opacity="0.8" />
          </g>
        ))}

        {/* Bottom pins */}
        {[13, 19].map((x) => (
          <g key={x}>
            <line x1={x} y1="24" x2={x} y2="28" stroke={C} strokeWidth="0.8" opacity="0.7" />
            <rect x={x - 1} y="26.5" width="2" height="2.5" rx="0.4" fill={CB} opacity="0.8" />
          </g>
        ))}

        {/* Internal grid */}
        <line x1="10.5" y1="16" x2="21.5" y2="16" stroke={DIM} strokeWidth="0.5" />
        <line x1="16" y1="10.5" x2="16" y2="21.5" stroke={DIM} strokeWidth="0.5" />

        {/* Core dot */}
        <circle cx="16" cy="16" r="2.5" fill="#0D0B09" stroke={C} strokeWidth="0.6" opacity="0.9" />
        <circle cx="16" cy="16" r="1" fill={CH} opacity="0.8" filter="url(#badgeGlow)" />

        {/* Orientation notch */}
        <circle cx="10" cy="10" r="1" fill="#0D0B09" stroke={C} strokeWidth="0.5" opacity="0.6" />
      </svg>
    </TiltWrapper>
  );
}

// ── Circuit divider — horizontal 90° trace line ──────────────
export function CircuitDivider({
  className = "",
  width = 600,
}: {
  className?: string;
  width?: number;
}) {
  const h = 24;
  const mid = width / 2;

  return (
    <svg
      viewBox={`0 0 ${width} ${h}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="divGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor={C} stopOpacity="0" />
          <stop offset="30%"  stopColor={C} stopOpacity="0.5" />
          <stop offset="50%"  stopColor={CH} stopOpacity="0.8" />
          <stop offset="70%"  stopColor={C} stopOpacity="0.5" />
          <stop offset="100%" stopColor={C} stopOpacity="0" />
        </linearGradient>
        <filter id="divGlow">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Main horizontal trace */}
      <line x1="0" y1={h / 2} x2={width} y2={h / 2} stroke="url(#divGrad)" strokeWidth="0.8" />

      {/* Left 90° branch */}
      <path
        d={`M ${mid - 120} ${h / 2} L ${mid - 80} ${h / 2} L ${mid - 80} ${4} L ${mid - 40} ${4}`}
        stroke={C} strokeWidth="0.7" opacity="0.35" fill="none"
      />

      {/* Right 90° branch */}
      <path
        d={`M ${mid + 120} ${h / 2} L ${mid + 80} ${h / 2} L ${mid + 80} ${h - 4} L ${mid + 40} ${h - 4}`}
        stroke={C} strokeWidth="0.7" opacity="0.35" fill="none"
      />

      {/* Center chip node */}
      <rect x={mid - 10} y={h / 2 - 5} width="20" height="10" rx="2"
        fill="#141210" stroke={C} strokeWidth="0.8" opacity="0.8" />
      <line x1={mid - 6} y1={h / 2} x2={mid + 6} y2={h / 2} stroke={CH} strokeWidth="0.6" opacity="0.7" />
      <circle cx={mid} cy={h / 2} r="1.5" fill={CH} opacity="0.9" filter="url(#divGlow)" />

      {/* Left node dots */}
      {[mid - 160, mid - 200, mid - 240].map((x, i) => (
        <circle key={i} cx={x} cy={h / 2} r="1.2" fill={C} opacity={0.5 - i * 0.12} />
      ))}

      {/* Right node dots */}
      {[mid + 160, mid + 200, mid + 240].map((x, i) => (
        <circle key={i} cx={x} cy={h / 2} r="1.2" fill={C} opacity={0.5 - i * 0.12} />
      ))}

      {/* Travelling pulse */}
      <circle r="2" fill={CH} opacity="0.9" filter="url(#divGlow)">
        <animateMotion dur="3s" repeatCount="indefinite">
          <mpath href="#divPath" />
        </animateMotion>
      </circle>
      <path id="divPath" d={`M 0 ${h / 2} L ${width} ${h / 2}`} visibility="hidden" />
    </svg>
  );
}

// ── Default export — convenience wrapper ─────────────────────
export default function AiChip({ variant = "badge", className = "", size, animated = true }: AiChipProps) {
  if (variant === "hero")    return <HeroChip    className={className} animated={animated} />;
  if (variant === "divider") return <CircuitDivider className={className} width={size ?? 600} />;
  return <ChipBadge className={className} />;
}
