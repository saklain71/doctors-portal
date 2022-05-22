import React from 'react';

const Review = ({ img }) => {
    return (
        <div class="card sm:max-w-sm bg-base-100 shadow-xl pt-28">
            <p className='p-2'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint dolor ipsam maiores vel est repellat ducimus maxime quo beatae explicabo
            </p>

            <div className='flex pt-12'>
                <div class="avatar flex-1">
                    <div class="rounded-full">
                        <img src={img} />
                    </div>
                </div>
                <div class="card-body items-center text-center flex-1">
                    <h2 class="card-title">William Son</h2>
                    <p>california</p>
                </div>
            </div>

        </div>
    );
};

export default Review;