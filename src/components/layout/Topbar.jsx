import React from 'react';
import { Switch } from '@mantine/core';
import {BiHelpCircle} from 'react-icons/bi';
import { AiFillFlag } from 'react-icons/ai';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Topbar = () => {
    return (
        <div className='flex pt-1 pb-1 top-header'>

            <div className='pl-20 pt-1'>
                <AiFillFlag />
            </div>

            <div className='pl-20'>
                <div className='relative inline-block group'>
                    <button className=' rounded inline-flex items-center'>
                        <span className='text-sm' >English</span>
                        <RiArrowDropDownLine />
                    </button>
                    <ul className='absolute z-10 right-0 mt-2 bg-white rounded-md shadow-lg hidden group-hover:block'>
                        <li className='px-4 py-2 hover:bg-gray-100'>Option</li>
                        <li className='px-4 py-2 hover:bg-gray-100'>Option</li>
                        <li className='px-4 py-2 hover:bg-gray-100'>Option</li>
                    </ul>
                </div>
            </div>

            <div className='pl-10'>
                <div className='relative inline-block group'>
                    <button className=' rounded inline-flex items-center'>
                        <span className='text-sm' >USD</span>
                        <RiArrowDropDownLine />
                    </button>
                    <ul className='absolute z-10 right-0 mt-2 bg-white rounded-md shadow-lg hidden group-hover:block'>
                        <li className='px-4 py-2 hover:bg-gray-100'>Option</li>
                        <li className='px-4 py-2 hover:bg-gray-100'>Option</li>
                        <li className='px-4 py-2 hover:bg-gray-100'>Option</li>
                    </ul>
                </div>
            </div>
            <div className='ml-auto pr-20 flex'>
                <div className='flex'>
                    <p className='text-sm' >Change Theme</p>
                    <Switch className='pl-2' onLabel="ON" offLabel="OFF" />
                </div>
                <div className='pl-8 flex'>
                    <p className='text-sm' >help</p>
                    <div className='pt-1 pl-1'>
                        <BiHelpCircle />
                    </div>
                </div>
            </div>
        </div>
        

    );
};

export default Topbar;