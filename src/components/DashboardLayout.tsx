import React, { useState } from 'react'
import { LogoIconDashboard } from './svgs/LogoIconDashboard'
import SingleNavItem from './svgs/SingleNavItem'
import { SearchIcon } from './svgs/SearchIcon'
import { SettingsIcon } from './svgs/SettingsIcon'
import BelliIcon from './svgs/BelliIcon'
import UserAvatar from './svgs/UserAvatar'
import { useNavigate } from 'react-router-dom'

const DashboardLayout: React.FC<any> = ({ children }: any) => {

  const [showDropdown, setShowDropdown] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const handleDropdown = () => {
    console.log('first')
    setShowDropdown((prevState) => prevState ? false : true)
  }

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    navigate('/')
  }
  return (
    <>
      <section className='flex w-full flex-col items-center gap-[33px] bg-[#FFF]'>
        <header className='flex w-full flex-col items-center bg-[#6941C6]'>
          <div className='flex container m-auto h-[72px] py-0 justify-between items-center'>
            <div className='flex items-center gap-[50px]'>
              <div className='flex gap-[12px] items-center'>
                <LogoIconDashboard className='w-[39.085px] h-[34px] flex-shrink-0' />
                <p className='text-[#FFF] text-[20px] font-bold leading-[normal]'>Stack</p>
              </div>
              <nav className='flex items-center gap-[4px]'>
                <SingleNavItem activeBackground='6941C6' label='Home' link='/dashboard' />
                <SingleNavItem activeBackground='6941C6' label='Users' link='/dashboard/users' />
                <SingleNavItem activeBackground='6941C6' label='Projects' link='#' />
                <SingleNavItem activeBackground='6941C6' label='Tasks' link='#' />
                <SingleNavItem activeBackground='6941C6' label='Reporting' link='#' />
              </nav>
            </div>
            <div className='flex items-center gap-[16px]'>
              <div className='flex items-start gap-[4px]'>
                <div className='flex p-[10px] items-start gap-[105px] rounded-[6px] bg-[#6941C6]'>
                  <SearchIcon className='w-[20px] h-[20px]' />
                </div>
                <div className='flex p-[10px] items-start gap-[105px] rounded-[6px] bg-[#6941C6]'>
                  <SettingsIcon className='w-[20px] h-[20px]' />
                </div>
                <div className='flex p-[10px] items-start gap-[105px] rounded-[6px] bg-[#6941C6]'>
                  <BelliIcon className='w-[20px] h-[20px]' />
                </div>
              </div>
              <div className='flex flex-col items-start relative'>
                <button type='button' onClick={handleDropdown}>
                  <UserAvatar />
                </button>
                <button className={`bg-[#7F56D9] text-white py-2 px-4 block whitespace-no-wrap dropdown-menu absolute mt-[40px] rounded-md w-[100px] z-50 ${!showDropdown ? 'hidden' : ''}`} onClick={handleLogout}>Logout</button>
              </div>
            </div>
          </div>
        </header>
      </section>
      <>
        {children}
      </>
    </>
  )
}

export default DashboardLayout