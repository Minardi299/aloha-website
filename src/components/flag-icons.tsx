export function USFlagIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 20" aria-hidden="true" className={className}>
      <rect width="30" height="20" fill="#B22234" />
      <path
        d="M0 2.31h30M0 5.38h30M0 8.46h30M0 11.54h30M0 14.62h30M0 17.69h30"
        stroke="#fff"
        strokeWidth="1.54"
      />
      <rect width="12" height="10.77" fill="#3C3B6E" />
      <g fill="#fff">
        {[1.5, 4.5, 7.5, 10.5].flatMap((x) =>
          [1.35, 4.04, 6.73, 9.42].map((y) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="0.65" />
          ))
        )}
        {[3, 6, 9].flatMap((x) =>
          [2.69, 5.38, 8.08].map((y) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="0.65" />
          ))
        )}
      </g>
    </svg>
  )
}

export function VNFlagIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 20" aria-hidden="true" className={className}>
      <rect width="30" height="20" fill="#DA251D" />
      <polygon
        fill="#FFFF00"
        points="15,4 16.35,8.15 20.71,8.15 17.18,10.71 18.53,14.85 15,12.29 11.47,14.85 12.82,10.71 9.29,8.15 13.65,8.15"
      />
    </svg>
  )
}
