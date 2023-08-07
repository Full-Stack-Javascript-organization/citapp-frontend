import React from 'react'
import { FaRegCalendarMinus, FaEllipsisV } from "react-icons/fa"
import { Progress } from 'antd';
import error from "../../assets/img/error.png"




const datas = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];




export function Main() {



    return (
        <div className='px-[25px] pt-[25px] bg-[#F8F9FC] pb-[40px]'>
            <div className='flex items-center justify-between'>
                <h1 className='text-[28px] leading-[34px] font-normal text-[#5a5c69] cursor-pointer'>DashboardTest</h1>

                {/*<button className='bg-[#2E59D9] h-[32px] rounded-[3px] text-white flex items-center justify-center px-[8px]'>Generate Report</button>*/}
            </div>
            <div className='grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]'>
                <div className=' h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>SERVICES (CURRENT MONTH)</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>10</h1>
                    </div>
                    <FaRegCalendarMinus fontSize={28} color="" />

                </div>
                <div className=' h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#1CC88A] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#1cc88a] text-[11px] leading-[17px] font-bold'>
                            SERVICES (CURRENT YEAR)</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>50</h1>
                    </div>
                    <FaRegCalendarMinus fontSize={28} />
                </div>
                <div className=' h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#36B9CC] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#1cc88a] text-[11px] leading-[17px] font-bold'>SERVICES (TODAY) </h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>1</h1>
                    </div>
                    <FaRegCalendarMinus fontSize={28} />
                </div>
                <div className=' h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#F6C23E] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#1cc88a] text-[11px] leading-[17px] font-bold'>PENDING REQUESTS</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>2</h1>
                    </div>
                    <FaRegCalendarMinus fontSize={28} />
                </div>

            </div>
            <div className='flex mt-[22px] w-full gap-[30px]'>
                <div className='basis-[55%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
                    <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
                        <h2 className='text-[#4e73df] text-[16px] leading-[19px] font-bold'>Services Overview</h2>
                        <FaEllipsisV color="gray" className='cursor-pointer' />
                    </div>
                    <div className='px-[25px] space-y-[15px] py-[15px]'>
                        <div>
                            <h2>Service 1</h2>
                            <Progress percent={30} strokeColor="#E74A3B" />
                        </div>
                        <div>
                            <h2>Services 2</h2>
                            <Progress percent={20} status="active" strokeColor="#F6C23E" />
                        </div>
                        <div>
                            <h2>Services 3</h2>
                            <Progress percent={20} status="active" strokeColor="#4E73DF" />
                        </div>
                        <div>
                            <h2>Services 4</h2>
                            <Progress percent={10} strokeColor="#36B9CC" />
                        </div>
                        <div>
                            <h2>Services 5</h2>
                            <Progress percent={20} status="active" strokeColor="#1CC88A" />
                        </div>
                    </div>


                </div>
                <div className='basis-[45%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
                    <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
                        <h2 className='text-[#4e73df] text-[16px] leading-[19px] font-bold'> Resources</h2>
                        <FaEllipsisV color="gray" className='cursor-pointer' />
                    </div>
                    <div className='pl-[35px] flex items-center justify-center h-[100%]'>
                        <div>
                            <img src={error} alt="" className='transform scale-[135%]' />
                            <p className='mt-[15px] text-semibold text-gray-500'>No data available</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}