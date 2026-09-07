/** Individuelles Monogramm — zwei Stämme mit versetzter Querachse ("H"). */
export function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      role="img"
      aria-label="Logo Hagen"
    >
      <rect
        x="0.75"
        y="0.75"
        width="30.5"
        height="30.5"
        rx="8.5"
        stroke="currentColor"
        strokeOpacity="0.18"
      />
      <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <path d="M10 9v14" />
        <path d="M22 9v14" />
      </g>
      <path
        d="M10 17.5 22 14.5"
        stroke="var(--accent-color)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
