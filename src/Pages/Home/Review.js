import React from 'react';

const Review = ({ img }) => {
    return (
        // <div className="card sm:max-w-sm bg-base-100 shadow-xl pt-28">
        //     <p className='p-2'>
        //         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint dolor ipsam maiores vel est repellat ducimus maxime quo beatae explicabo
        //     </p>

        //     <div className='flex pt-12'>
        //         <div className="avatar flex-1">
        //             <div className="w-20 first-line:rounded-full ring ring-primary ring-offset-base-100 mr-5">
        //                 <img src={img} />
        //             </div>
        //         </div>
        //         <div className="card-body items-center text-center flex-1">
        //             <h2 className="card-title">William Son</h2>
        //             <p>california</p>
        //         </div>
        //     </div>

        // </div>
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptates quo incidunt harum minus mollitia!</p>
            <div className="flex items-center">
                <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                        <img src={img} alt=""/>
                    </div>
                </div>
                <div>
                    <h4 className='text-xl'>William Son</h4>
                    <p>California</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Review;