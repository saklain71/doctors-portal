import React from 'react';
import Review from './Review';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import qute from '../../assets/icons/quote.svg';

const Reviews = () => {
    return (
        <div className='py-12 my-24'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-xl font-bold text-primary'>Testimonial</h3>
                    <h4 className='text-3xl'>What Our Patients Say</h4>
                </div>
                <div>
                    <img src={qute} className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-5'>
                <Review img={people1}></Review>
                <Review img={people2}></Review>
                <Review img={people3}></Review>
            </div>
        </div>
    );
};

export default Reviews;