import React, { useState } from 'react';
import { Link, redirect, useNavigate } from "react-router-dom";
import SubmitButton from '../components/SubmitButton';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import AuthSubHeader from '../components/AuthSubHeader';
import { useSignUpMutation } from '../features/api/apiSlice';
import AlertCard from '../components/AlertCard';


const Signup: React.FunctionComponent = () => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isInputFieldEmpty, setInputFieldEmpty] = useState<boolean>(false);
  const [isPasswordFieldEmpty, setPasswordFieldEmpty] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [signUp, { isError, isLoading }] = useSignUpMutation();

  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result: any = await signUp({ email, password });
      if (!isError && result.data) {
        navigate('/dashboard')
        localStorage.setItem('userToken', JSON.stringify(result.data.token))
      }
      if (result.error) {
        setError(result.error.data.error)
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  }

  const handleBlur = () => {
    if (email === '') {
      setInputFieldEmpty(true)
    }
  }

  const handlePasswordBlur = () => {
    if (password === '') {
      setPasswordFieldEmpty(true)
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[444px] h-[600px] flex-shrink-0 rounded-[16px] border-[1px] border-solid border-[#EEE] bg-[#FFF] [box-shadow:0px_8px_8px_-4px_rgba(16,_24,_40,_0.03),_0px_20px_24px_-4px_rgba(16,_24,_40,_0.08)] px-[62px] pt-[54px] pb-[59px]">
        <AuthSubHeader subHeader='Sign up to continue with Stack' />
        {isError && <AlertCard alertMessage={error} />}
        <div className='mt-[52px]'>
          <form onSubmit={handleSignUp}>
            <EmailInput email={email} setEmail={setEmail} handleBlur={handleBlur} isInputFieldEmpty={isInputFieldEmpty} setInputFieldEmpty={setInputFieldEmpty} />
            <PasswordInput password={password} setPassword={setPassword} isPasswordFieldEmpty={isPasswordFieldEmpty} setPasswordFieldEmpty={setPasswordFieldEmpty} handlePasswordBlur={handlePasswordBlur} />
            <div className='w-[320px] h-[4px] flex-shrink-0 mt-[19px] mb-[17px] flex justify-around'>
              <div className='w-[44px] h-[4px] flex-shrink-0 rounded-[2px] bg-[#F04438]'></div>
              <div className='w-[44px] h-[4px] flex-shrink-0 rounded-[2px] bg-[#F04438]'></div>
              <div className='w-[44px] h-[4px] flex-shrink-0 rounded-[2px] bg-[#F3F3F3]'></div>
              <div className='w-[44px] h-[4px] flex-shrink-0 rounded-[2px] bg-[#F3F3F3]'></div>
              <div className='w-[44px] h-[4px] flex-shrink-0 rounded-[2px] bg-[#F3F3F3]'></div>
              <div className='w-[44px] h-[4px] flex-shrink-0 rounded-[2px] bg-[#F3F3F3]'></div>
            </div>
            <div className='flex w-[320px] h-[44px] items-start flex-shrink-0 mb-[27px]'>
              <SubmitButton isLoading={isLoading} label='Sign Up' />
            </div>
          </form>
          <Link to={'/'} className='text-[#B0B7C3] text-[16px] font-medium leading-[normal]'>Don’t have an account? <span className='text-[#377DFF] text-[16px] font-medium leading-[normal]'>Sign In</span></Link>
        </div>
      </div>
    </div>
  )
}

export default Signup