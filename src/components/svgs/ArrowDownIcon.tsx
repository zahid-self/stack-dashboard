import React from 'react'

interface ArrowDownIconProps {
  className: string
}

const ArrowDownIcon: React.FC<ArrowDownIconProps> = ({ className = '' }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 3.33337V12.6667M8 12.6667L12.6667 8.00004M8 12.6667L3.33333 8.00004" stroke="#667085" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default ArrowDownIcon