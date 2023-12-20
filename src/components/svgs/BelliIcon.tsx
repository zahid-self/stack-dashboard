import React from 'react';
interface BelliIconProps {
  className: string
}

const BelliIcon: React.FC<BelliIconProps> = ({ className = '' }: BelliIconProps) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M11.4417 17.5C11.2952 17.7525 11.0849 17.9622 10.8319 18.1079C10.5788 18.2536 10.292 18.3303 10 18.3303C9.70802 18.3303 9.42116 18.2536 9.16814 18.1079C8.91513 17.9622 8.70484 17.7525 8.55833 17.5M15 6.66663C15 5.34054 14.4732 4.06877 13.5355 3.13109C12.5979 2.19341 11.3261 1.66663 10 1.66663C8.67392 1.66663 7.40215 2.19341 6.46447 3.13109C5.52678 4.06877 5 5.34054 5 6.66663C5 12.5 2.5 14.1666 2.5 14.1666H17.5C17.5 14.1666 15 12.5 15 6.66663Z" stroke="#D6BBFB" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default BelliIcon