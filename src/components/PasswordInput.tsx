import React from 'react'

interface PasswordInputProps {
  password: string,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  isPasswordFieldEmpty: boolean,
  setPasswordFieldEmpty: React.Dispatch<React.SetStateAction<boolean>>,
  handlePasswordBlur: () => void
}

const PasswordInput: React.FC<PasswordInputProps> = ({ password, setPassword, isPasswordFieldEmpty, setPasswordFieldEmpty, handlePasswordBlur }) => {
  return (
    <div className='flex flex-col items-start gap-[6px] self-stretch mt-[20px]'>
      <label htmlFor="password" className='text-[#344054] [text-shadow:0px_0px_0px_#FEE4E2,_0px_1px_2px_rgba(16,_24,_40,_0.05)] text-[14px] font-medium leading-[20px]'>Password</label>
      <input type="password" name="password" placeholder='******' className={`flex px-[14px] py-[10px] items-center gap-[8px] self-stretch rounded-[8px] border-[1px] bg-[#FFF] ${isPasswordFieldEmpty ? 'border-[#FDA29B] [box-shadow:0px_0px_0px_4px_#FEE4E2,_0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]' : ''}`} value={password} onChange={(e) => { setPassword(e.target.value), setPasswordFieldEmpty(false) }} onBlur={handlePasswordBlur} />
      {isPasswordFieldEmpty && <p className='self-stretch text-[#F04438] [text-shadow:0px_0px_0px_#FEE4E2,_0px_1px_2px_rgba(16,_24,_40,_0.05)] text-[14px] font-normal leading-[20px]'>This field is required</p>}
    </div>
  )
}

export default PasswordInput