import type { SVGProps } from "react";

export type IllustrationProps = SVGProps<SVGSVGElement>;

const TEMPLE_COLUMN_X = [16, 34, 52, 70] as const;

export function TempleIllustration(props: IllustrationProps) {
  return (
    <svg viewBox="0 0 92 72" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 24 46 6l40 18H6Z"
        fill="#D4A82C"
        stroke="#1A2A4A"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle
        cx="46"
        cy="17"
        r="3"
        fill="#B86545"
        stroke="#1A2A4A"
        strokeWidth="1.5"
      />
      <rect
        x="10"
        y="26"
        width="72"
        height="7"
        fill="#B8933D"
        stroke="#1A2A4A"
        strokeWidth="2"
      />
      {TEMPLE_COLUMN_X.map((x) => (
        <rect
          key={x}
          x={x}
          y="35"
          width="6"
          height="24"
          fill="#F5E8D0"
          stroke="#1A2A4A"
          strokeWidth="2"
        />
      ))}
      <rect
        x="8"
        y="59"
        width="76"
        height="5"
        fill="#5E8C7B"
        stroke="#1A2A4A"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="64"
        width="84"
        height="5"
        fill="#B8933D"
        stroke="#1A2A4A"
        strokeWidth="2"
      />
    </svg>
  );
}

export function KilnIllustration(props: IllustrationProps) {
  return (
    <svg viewBox="0 0 76 88" fill="none" aria-hidden="true" {...props}>
      <path
        d="M33 12V4h10v8"
        fill="#B86545"
        stroke="#1A2A4A"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 84V42c0-18 11-30 26-30s26 12 26 30v42H12Z"
        fill="#C77A3D"
        stroke="#1A2A4A"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 34h52M13 52h12M51 52h12"
        stroke="#1A2A4A"
        strokeWidth="1.5"
        opacity="0.55"
      />
      <path
        d="M27 84V60c0-7 5-12 11-12s11 5 11 12v24H27Z"
        fill="#1A2A4A"
      />
      <path
        d="M38 56c4 5 7 8.5 7 13a7 7 0 1 1-14 0c0-4.5 3-8 7-13Z"
        fill="#D4A82C"
        stroke="#F5E8D0"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M38 64c2.2 2.8 3.8 4.8 3.8 7.2a3.8 3.8 0 1 1-7.6 0c0-2.4 1.6-4.4 3.8-7.2Z" fill="#B86545" />
    </svg>
  );
}
