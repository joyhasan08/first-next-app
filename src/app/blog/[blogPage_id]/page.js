"use clinet"

import React from 'react';

const BlogPages = ({ params, searchParams }) => {
    const { blogPage_id } = params;
    console.log(params);
    console.log(searchParams);

    return (
        <div className='flex gap-4'>
            <div className='mt-4 bg-sky-600 rounded p-2 space-y-4  '>
                <h1 className='text-xl font-semibold bg-slate-800 w-fit p-1 rounded'>Dynamic BLog page NO: {blogPage_id}</h1>
                <p className='w-1/2 ' >Deserunt ipsum elit officia amet ullamco ut laboris qui cillum aliqua ad proident. Nisi laborum laborum pariatur est. Commodo reprehenderit dolor proident nostrud.</p>
                <button className='bg-green-600 px-4 py-2 my-2 rounded'> Click Here </button>
            </div>
            <div className='mt-4 bg-sky-600 rounded p-2 space-y-4 '>
                <h1 className='text-xl font-semibold bg-slate-800 w-fit p-1 rounded'>Dynamic BLog page NO: {blogPage_id}</h1>
                <p className='w-1/2 ' >Deserunt ipsum elit officia amet ullamco ut laboris qui cillum aliqua ad proident. Nisi laborum laborum pariatur est. Commodo reprehenderit dolor proident nostrud.</p>
                <button className='bg-green-600 px-4 py-2 my-2 rounded'> Click Here </button>
            </div>
        </div>
    );
};

export default BlogPages;