import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'

const Home: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto">
        <div className="flex w-full p-[24px] mt-10 flex-col gap-[24px] self-stretch rounded-[6px] border-[2px] border-[solid] border-[#F0F1F2] bg-[#FFF]">
          <div className="flex gap-[16px] items-center">
            <h2 className="text-[20px] not-italic font-semibold leading-[30px] tracking-[-0.2px]">
              Summary of dashboard
            </h2>
          </div>
          <div className="flex items-start gap-[4px] flex-[1_0_0] self-stretch">
            <div className="flex px-[24px] py-[32px] flex-col justify-center items-start gap-[32px] flex-[1_0_0] self-stretch rounded-[6px] bg-[#EF4444] relative">
              <p className="text-white self-stretch text-[48px] not-italic font-normal leading-[54px] tracking-[-0.48px]">
                3
              </p>
              <p className="text-white self-stretch text-[16px] not-italic font-normal leading-[26px]">
                Users
              </p>
            </div>
            <div className="flex px-[24px] py-[32px] flex-col justify-center items-start gap-[32px] flex-[1_0_0] self-stretch rounded-[6px] bg-[#F18E19] relative">
              <p className="text-white self-stretch text-[48px] not-italic font-normal leading-[54px] tracking-[-0.48px]">
                2
              </p>
              <p className="text-white self-stretch text-[16px] not-italic font-normal leading-[26px]">
                Projects
              </p>
            </div>
            <div className="flex px-[24px] py-[32px] flex-col justify-center items-start gap-[32px] flex-[1_0_0] self-stretch rounded-[6px] bg-[#157BFF] relative">
              <p className="text-white self-stretch text-[48px] not-italic font-normal leading-[54px] tracking-[-0.48px]">
                3
              </p>
              <p className="text-white self-stretch text-[16px] not-italic font-normal leading-[26px]">
                Tasks
              </p>
            </div>
            <div className="flex px-[24px] py-[32px] flex-col justify-center items-start gap-[32px] flex-[1_0_0] self-stretch rounded-[6px] bg-[#59C3C8] relative">

              <p className="text-white self-stretch text-[48px] not-italic font-normal leading-[54px] tracking-[-0.48px]">
                2
              </p>
              <p className="text-white self-stretch text-[16px] not-italic font-normal leading-[26px]">
                Reporting
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Home