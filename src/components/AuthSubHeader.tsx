import React from 'react'
import { LogoIcon } from './svgs/LogoIcon'

interface AuthSubHeadernProps {
  subHeader: string
}

const AuthSubHeader: React.FC<AuthSubHeadernProps> = ({ subHeader }) => {
  return (
    <>
      <div className="flex gap-2 w-[159.065px] h-[45.816px] flex-shrink-0">
        <div className='w-[50.581px] h-[44px] flex-shrink-0'>
          <LogoIcon className="" />
        </div>
        <div className='w-[98.065px] h-[36.816px] flex-shrink-0'>
          <h2 className='text-[#4E5D78] text-[28px] not-italic font-bold leading-[normal]'>Stack</h2>
        </div>
      </div>
      <p className='text-[#404040] font-semibold leading-[24px] mt-[22px]'>{subHeader}</p>
    </>
  )
}

export default AuthSubHeader