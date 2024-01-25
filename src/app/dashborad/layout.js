import Link from 'next/link';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div className='lg:flex-row flex-col-reverse md:flex rounded border-spacing-0 '>
            <div className=' bg-slate-400 md:w-1/4 list-none p-3 flex flex-col  gap-4'>
                <li className='  bg-sky-900 p-4 rounded text-lg font-bold hover:bg-sky-700'>Profile</li>
                <li className='bg-sky-900 p-4 rounded text-lg font-bold hover:bg-sky-700'>Setting</li>
                <Link href={"/dashborad/postblog"}> <li className='bg-sky-900 p-4 rounded text-lg font-bold hover:bg-sky-700'>Add Blog Post</li></Link>
                <li className='bg-sky-900 p-4 rounded text-lg font-bold hover:bg-sky-700'>Next Page</li>
            </div>
            <div className='flex-grow p-4 bg-orange-600'>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;