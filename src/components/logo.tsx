export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M23.5 3.5 17 13" />
      <path d="M8.5 10.5h19l-2.1 19.2a2.5 2.5 0 0 1-2.5 2.3H13.1a2.5 2.5 0 0 1-2.5-2.3Z" />
      <path d="M9.3 17.5h17.4" />
      <circle cx="14" cy="26" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="18.4" cy="27.4" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="22.6" cy="25.6" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}
