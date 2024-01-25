import Link from 'next/link';
import React from 'react';

const BlogLayout = ({ children }) => {
    return (
        <div>
            <nav>Blog page nave || recent|| update || si-fi</nav>
            <div>
                {children}
            </div>
            <div>
                <Link href={"blog/10"}>
                    <button className='bg-green-500 w-fit p-1 rounded my-4'>Click Here for Dynamic Rount</button></Link>
            </div>

        </div>
    );
};

export default BlogLayout;