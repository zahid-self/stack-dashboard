import React from 'react';

interface Props {
  activeBackground: string,
  label: string,
  link: string
}

const SingleNavItem: React.FC<Props> = ({ activeBackground = '', label, link }: Props) => {
  return (
    <div className={`flex px-[12px] py-[8px] items-center gap-[105px] rounded-[6px] bg-[#${activeBackground}] hover:bg-[#7F56D9]`}>
      <div className='flex items-center gap-[12px]'>
        <a href={link} className='text-[#F4EBFF] font-[Inter] text-[16px] not-italic font-medium leading-[24px]'>{label}</a>
      </div>
    </div>
  )
}

export default SingleNavItem