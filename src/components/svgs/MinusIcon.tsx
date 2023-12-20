import React from 'react';

interface MinusIconProps {
  className: string
}

const MinusIcon: React.FC<MinusIconProps> = ({ className = '' }: MinusIconProps) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2.91667 7H11.0833" stroke="#7F56D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default MinusIcon