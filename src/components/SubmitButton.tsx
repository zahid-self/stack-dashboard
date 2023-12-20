import React from 'react'

interface SubmitButtonProps {
  label: string,
  isLoading: boolean
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ label, isLoading }) => {
  return (
    <button disabled={isLoading} className='flex px-[18px] py-[10px] justify-center items-center gap-[8px] flex-[1_0_0] rounded-[8px] border-[1px] border-[#6941C6] bg-[#6941C6] [box-shadow:0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-[#FFF] text-[16px] font-semibold leading-[24px]'> {isLoading ? 'Loading' : label}</button>
  )
}

export default SubmitButton