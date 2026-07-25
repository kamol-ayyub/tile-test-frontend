import type { SVGProps } from "react";

export type BrandIconProps = SVGProps<SVGSVGElement>;

export function CartIcon(props: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M3 4h2l2.4 11.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.76L20 8H6" />
      <circle cx="10" cy="20" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="17" cy="20" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function UserIcon(props: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="9.5" r="3" />
      <path d="M6.5 18.5c1.2-2.4 3.2-3.5 5.5-3.5s4.3 1.1 5.5 3.5" />
    </svg>
  );
}

export function PlusIcon(props: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function TrashIcon(props: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6.5 7l1 13h9l1-13" />
      <path d="M10 11v6M14 11v6" />
    </svg>
  );
}

export function VisaLogo(props: BrandIconProps) {
  return (
    <svg viewBox="0 0 46 16" role="img" aria-label="Visa" {...props}>
      <rect
        width="46"
        height="16"
        rx="2"
        fill="#FFFFFF"
        stroke="#1A1F71"
        strokeOpacity="0.3"
      />
      <text
        x="23"
        y="12.5"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="11"
        fontWeight="800"
        fontStyle="italic"
        fill="#1A1F71"
      >
        VISA
      </text>
    </svg>
  );
}

export function MastercardLogo(props: BrandIconProps) {
  return (
    <svg viewBox="0 0 30 18" role="img" aria-label="Mastercard" {...props}>
      <circle cx="11" cy="9" r="7.5" fill="#EB001B" />
      <circle cx="19" cy="9" r="7.5" fill="#F79E1B" fillOpacity="0.85" />
    </svg>
  );
}

export function PayPalLogo(props: BrandIconProps) {
  return (
    <svg viewBox="0 0 46 13" role="img" aria-label="PayPal" {...props}>
      <text
        x="0"
        y="10.5"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="11"
        fontWeight="800"
        fontStyle="italic"
      >
        <tspan fill="#003087">Pay</tspan>
        <tspan fill="#0079C1">Pal</tspan>
      </text>
    </svg>
  );
}

export function ApplePayLogo(props: BrandIconProps) {
  return (
    <svg viewBox="0 0 38 16" role="img" aria-label="Apple Pay" {...props}>
      <g transform="translate(0.5 0.8) scale(0.58)" fill="currentColor">
        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
      </g>
      <text
        x="15"
        y="12.5"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="11.5"
        fontWeight="700"
        fill="currentColor"
      >
        Pay
      </text>
    </svg>
  );
}

export function BankIcon(props: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.5 22.5 9h-21L12 2.5Z" />
      <rect x="4" y="10.5" width="2.4" height="7" />
      <rect x="10.8" y="10.5" width="2.4" height="7" />
      <rect x="17.6" y="10.5" width="2.4" height="7" />
      <rect x="2" y="18.5" width="20" height="2.5" />
    </svg>
  );
}
