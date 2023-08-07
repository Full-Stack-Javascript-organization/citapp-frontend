import React from 'react'
import { FaTachometerAlt, FaTasks, FaRegUser, FaStickyNote, FaRegChartBar, FaRegCalendarAlt, FaChevronRight, FaChevronLeft, FaBolt } from "react-icons/fa"

export function Sidebar() {
    return (
        <div className='bg-[#4E73DF] px-[25px] h-screen'>
            <div className='px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]'>
                <h1 className='text-white text-[20px] leading-[24px] font-extrabold cursor-pointer'>Admin panel</h1>
            </div>
            <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3] cursor-pointer'>
                <FaTachometerAlt color='white' />
                <p className='text-[14px] leading-[20px] font-bold text-white'>Dashboard</p>
            </div>
            <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
                <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'> Config</p>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaTasks color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Services</p>
                    </div>
                    <FaChevronRight color='white' />
                </div>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaRegUser color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Users</p>
                    </div>
                    <FaChevronRight color='white' />
                </div>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaRegCalendarAlt color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Calendar</p>
                    </div>
                    <FaChevronRight color='white' />
                </div>
            </div>
            <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
                <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'> Reports</p>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaStickyNote color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Next services</p>
                    </div>
                    <FaChevronRight color='white' />
                </div>
                <div className='flex items-center gap-[10px] py-[15px]  cursor-pointer'>
                    <FaRegChartBar color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Monthly</p>
                </div>
                <div className='flex items-center gap-[10px] py-[15px] cursor-pointer'>
                    <FaRegCalendarAlt color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Yearly</p>
                </div>
            </div>
            <div className='pt-[15px]'>
                <div className='flex items-center justify-center'>
                    <div className='h-[40px] w-[40px] bg-[#3C5EC1] rounded-full flex items-center justify-center cursor-pointer'>
                        <FaChevronLeft color='white' />
                    </div>
                </div>
            </div>
        </div>
    )
}
