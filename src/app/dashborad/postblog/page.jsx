import React from 'react';

const PostBlog = () => {
    return (
        <div>
            <section>
                <form className='flex-col   p-4 space-y-4 w-1/2 mx-auto' >
                    <div className='flex flex-col space-y-2 '>
                        <label htmlFor='name' >Your Name:</label>
                        <input className='input input-info ' type="text" name="name" id="" />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label htmlFor="date">Date:</label>
                        <input className='input input-info ' type="number" name='date' />
                    </div>
                    <div className='flex flex-col space-y-2 '>
                        <label htmlFor="blog">Add your Blog here..</label>
                        <textarea className=' textarea textarea-info  ' cols='30' rows='6' name='blog'> </textarea>
                    </div>
                    <input className='btn btn-success' type="submit" />
                </form>
            </section>
        </div>
    );
};

export default PostBlog;