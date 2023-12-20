import React from 'react';

interface EmailInputProps {
  email: string,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  handleBlur: () => void,
  isInputFieldEmpty: boolean,
  setInputFieldEmpty: React.Dispatch<React.SetStateAction<boolean>>
}

const EmailInput: React.FC<EmailInputProps> = ({ email, setEmail, handleBlur, isInputFieldEmpty, setInputFieldEmpty }) => {
  return (
    <div className='flex flex-col items-start gap-[6px] self-stretch'>
      <label htmlFor="email" className='text-[#344054] [text-shadow:0px_0px_0px_#FEE4E2,_0px_1px_2px_rgba(16,_24,_40,_0.05)] text-[14px] font-medium leading-[20px]'>Email</label>
      <input type="text" name="email" placeholder='Enter Email' className={`flex px-[14px] py-[10px] items-center gap-[8px] self-stretch rounded-[8px] border-[1px] bg-[#FFF] ${isInputFieldEmpty ? 'border-[#FDA29B] [box-shadow:0px_0px_0px_4px_#FEE4E2,_0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]' : ''}`} value={email} onChange={(e) => { setEmail(e.target.value), setInputFieldEmpty(false) }} onBlur={handleBlur} />
      {isInputFieldEmpty && <p className='self-stretch text-[#F04438] [text-shadow:0px_0px_0px_#FEE4E2,_0px_1px_2px_rgba(16,_24,_40,_0.05)] text-[14px] font-normal leading-[20px]'>This field is required</p>}
    </div>
  )
}

export default EmailInput