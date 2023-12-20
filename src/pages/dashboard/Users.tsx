import React, { useState } from 'react'
import UploadIcon from '../../components/svgs/UploadIcon'
import PlusIcon from '../../components/svgs/PlusIcon'
import MinusIcon from '../../components/svgs/MinusIcon'
import ArrowDownIcon from '../../components/svgs/ArrowDownIcon'
import CheckIcon from '../../components/svgs/CheckIcon'
import UserAvatar from '../../components/svgs/UserAvatar'
import TrashIcon from '../../components/svgs/TrashIcon'
import EditIcon from '../../components/svgs/EditIcon'
import DashboardLayout from '../../components/DashboardLayout'
import { useGetUsersQuery } from '../../features/api/apiSlice'

const Users: React.FC = () => {

  const [page, setPage] = useState<number>(1);
  const { data, isError, isLoading, isSuccess } = useGetUsersQuery(page);

  if (isLoading && !isError) {
    return 'Loading...'
  } else if (isError && !isSuccess) {
    return 'There is some error'
  } else if (!isError && !isLoading && isSuccess) {
    return (
      <DashboardLayout>
        <div className='container mx-auto w-full flex justify-between mt-10'>
          <p className='flex-[1_0_0] text-[#101828] text-[24px] not-italic font-medium leading-[38px]'>Users</p>
          <div className='flex items-center gap-[12px]'>
            <div className='flex items-start rounded-[8px] gap-[12px]'>
              <div className='flex px-[16px] py-[10px] justify-center items-center gap-[8px] rounded-[8px] border-[1px] border-[#D0D5DD] bg-[#FFF] [box-shadow:0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]'>
                <UploadIcon className='' />
                <p className='text-[#344054] text-[14px] font-semibold leading-[20px]'>Upload</p>
              </div>
              <div className='flex items-start rounded-[8px]'>
                <div className='flex px-[16px] py-[10px] justify-center items-center gap-[8px] rounded-[8px] border-[1px] border-[#7F56D9] bg-[#7F56D9] [box-shadow:0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]'>
                  <PlusIcon className='' />
                  <p className='text-[#FFF] text-[14px] font-semibold leading-[20px]'>Add User</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-5">
          <div className='flex flex-col items-start self-stretch rounded-[8px] border-[1px] border-solid border-[#EAECF0] bg-[#FFF] [box-shadow:0px_1px_2px_0px_rgba(16,_24,_40,_0.06),_0px_1px_3px_0px_rgba(16,_24,_40,_0.10)]'>
            <div className='flex flex-col items-start self-stretch'>
              {/* Table Header */}
              <div className='w-full flex items-start justify-between bg-[#F9FAFB]'>
                <div className='flex h-[44px] px-[24px] py-[12px] items-center gap-[12px] self-stretch border-b-[1px_solid_#EAECF0] '>
                  <div className='flex justify-center items-center'>
                    <div className='flex w-[20px] h-[20px] p-[3px] justify-center items-center rounded-[6px] border-[1px] border-[solid] border-[#7F56D9] bg-[#F9F5FF]'>
                      <div className='w-[14px] h-[14px] flex-shrink-0'>
                        <MinusIcon className='' />
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center gap-[4px]'>
                    <p className='text-[#667085] font-[Inter] text-[12px] not-italic font-medium leading-[18px]'>User Info</p>
                    <ArrowDownIcon className='' />
                  </div>
                </div>
                <div className='flex h-[44px] px-[24px] py-[12px] items-center gap-[12px] self-stretch border-b-[1px_solid_#EAECF0] bg-[#F9FAFB]'>
                  <div className='flex items-center gap-[4px]'>
                    <p className='text-[#667085] font-[Inter] text-[12px] not-italic font-medium leading-[18px]'>About</p>
                  </div>
                </div>
                <div className='flex h-[44px] px-[24px] py-[12px] items-center gap-[12px] self-stretch border-b-[1px_solid_#EAECF0] bg-[#F9FAFB]'>
                  <div className='flex items-center gap-[4px]'>
                    <p className='text-[#667085] font-[Inter] text-[12px] not-italic font-medium leading-[18px]'>Status</p>
                  </div>
                </div>
                <div className='flex h-[44px] px-[24px] py-[12px] items-center gap-[12px] self-stretch border-b-[1px_solid_#EAECF0] bg-[#F9FAFB]'>
                  <div className='flex items-center gap-[4px]'>
                    <p className='text-[#667085] font-[Inter] text-[12px] not-italic font-medium leading-[18px]'></p>
                  </div>
                </div>
              </div>
              {/* Table Colum*/}
              {
                data.data && data.data.map((user: any) => (
                  <div className='w-full flex justify-between' key={user.id}>
                    <div className='flex w-[340px] h-[72px] px-[24px] py-[16px] items-center gap-[12px] self-stretch border-b-[1px_solid_#EAECF0]'>
                      <div className='flex justify-center items-center'>
                        <div className='flex w-[20px] h-[20px] p-[3px] justify-center items-center rounded-[6px] border-[1px] border-[solid] border-[#7F56D9] bg-[#F9F5FF]'>
                          <CheckIcon />
                        </div>
                      </div>
                      <div className='flex w-[40px] h-[40px] flex-col justify-center items-center rounded-[200px]'>
                        <UserAvatar />
                      </div>
                      <div className='flex flex-col items-start'>
                        <p className='text-[#101828] font-[Inter] text-[14px] not-italic font-medium leading-[20px]'>{user.first_name} {user.last_name}</p>
                        <p className='text-[#667085] font-[Inter] text-[14px] not-italic font-normal leading-[20px]'>{user.email}</p>
                      </div>
                    </div>
                    <div className='flex h-[72px] px-[24px] py-[16px] items-center text-left gap-[12px] self-stretch border-b-[1px_solid_#EAECF0]'>
                      <div className='flex flex-col items-start'>
                        <p className='text-[#101828] font-[Inter] text-[14px] not-italic font-medium leading-[20px]'>Some dummy Content</p>
                        <p className='text-[#667085] font-[Inter] text-[14px] not-italic font-normal leading-[20px]'>Brings all your news into one place</p>
                      </div>
                    </div>
                    <div className='flex h-[72px] px-[24px] py-[16px] items-center gap-[12px] self-stretch border-b-[1px_solid_#EAECF0]'>
                      <div className='flex items-start mix-blend-multiply'>
                        <div className='flex px-[8px] py-[2px] justify-center items-center rounded-[16px] bg-[#ECFDF3]'>
                          <p className='text-[#027A48] text-[12px] font-medium leading-[18px]'>Random Sticker Label</p>
                        </div>
                      </div>
                    </div>
                    <div className='flex h-[72px] px-[24px] py-[16px] items-center gap-[4px] self-stretch border-b-[1px_solid_#EAECF0]'>
                      <div className='flex items-start mix-blend-multiply'>
                        <div className='flex items-start rounded-[8px]'>
                          <div className='flex p-[10px] justify-center items-center gap-[8px] rounded-[8px]'>
                            <TrashIcon />
                          </div>
                          <div className='flex p-[10px] justify-center items-center gap-[8px] rounded-[8px]'>
                            <EditIcon />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>

            {/* Pagination */}
            <div className='flex pl-[24px] pr-[24px] py-[12px] justify-between items-center self-stretch border-t-[1px_solid_#EAECF0]'>
              <div className='flex items-center rounded-[8px]'>
                <div className='flex px-[14px] py-[8px] justify-center items-center gap-[8px] rounded-[8px] border-[1px] border-[solid] border-[#D0D5DD] bg-[#FFF] [box-shadow:0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]'>
                  <button
                    className='text-[#344054] text-[14px] font-medium leading-[20px]'
                    onClick={() => setPage((prevPage) => prevPage - 1)}
                    disabled={page === 1}
                  >Previous</button>
                </div>
              </div>
              <p className='text-[#344054] text-[14px] font-medium leading-[20px]'>{`Page ${page} / ${data.total_pages}`}</p>
              <div className='flex items-center rounded-[8px]'>
                <div className='flex px-[14px] py-[8px] justify-center items-center gap-[8px] rounded-[8px] border-[1px] border-[solid] border-[#D0D5DD] bg-[#FFF] [box-shadow:0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]'>
                  <button
                    className='text-[#344054] text-[14px] font-medium leading-[20px]'
                    onClick={() => setPage((prevPage) => prevPage + 1)}
                    disabled={page === data.total_pages}
                  >Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    )
  }
}

export default Users