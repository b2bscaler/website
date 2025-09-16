import * as React from 'react'

export function Logo(props) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 140 40" // Adjusted viewBox to include text
      {...props}
    >
      {/* Blue "C" shape */}
      <path
        d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20c0 5.18-1.958 9.852-5.181 13.44C30.06 29.814 25.403 26 20 26c-6.627 0-12 5.373-12 12 0 .937.114 1.854.324 2.74A19.92 19.92 0 0 0 20 40z"
        fill="#3B82F6" // A standard blue color
      />
      {/* "TaxPal" text element */}
      <text
        x="48"
        y="29"
        fontFamily="sans-serif"
        fontSize="22"
        fontWeight="600"
        fill="currentColor"
      >
        TaxPal
      </text>
    </svg>
  )
}
