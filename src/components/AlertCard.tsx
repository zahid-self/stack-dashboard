import React from 'react';

interface AlertCardProps {
  alertMessage: string
}

const AlertCard: React.FC<AlertCardProps> = ({ alertMessage }) => {
  return (
    <div className="flex justify-between py-4 px-8 bg-[#ffe6d3]  text-[#ff892f] mt-4">
      <p className="font-sans">{alertMessage}</p>
      <button className="font-bold">&#10005;</button>
    </div>
  )
}

export default AlertCard