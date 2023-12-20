import React from 'react';
interface PlusIconProps {
  className: string
}

const PlusIcon: React.FC<PlusIconProps> = ({ className = '' }: PlusIconProps) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M9.99996 4.16663V15.8333M4.16663 9.99996H15.8333" stroke="white" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default PlusIcon