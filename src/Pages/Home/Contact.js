import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import appointment from '../../assets/images/appointment.png'; 

const Contact = () => {
    return (
        // <div>
        //     <h6 className='text-xl text-primary text-center'>Contact Us</h6>
        //     <h3 className='text-center text-3xl'>Stay Connected With Us</h3>

        //     <div className="hero min-h-screen ">
        //         <div className="hero-content flex-col lg:flex-row-reverse">

        //             {/* <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100"> */}
        //                 {/* <div className="card-body"> */}
        //                     <div className="form-control will-change-auto">
        //                         <label className="label">
        //                             <span className="label-text">Email</span>
        //                         </label>
        //                         <input type="text" placeholder="email" className="input input-bordered" />
        //                     </div>
        //                     <div className="form-control will-change-auto">
        //                         <label className="label">
        //                             <span className="label-text">Password</span>
        //                         </label>
        //                         <input type="text" placeholder="password" className="input input-bordered" />

        //                     </div>
        //                     <div className="form-control mt-6 ">
        //                         <button className="btn btn-primary">Submit</button>
        //                     </div>
        //                 {/* </div> */}
        //             {/* </div> */}
        //         </div>
        //     </div>


        <div style={{
            background: `url(${appointment})`
        }} className='bg-primary px-10 py-14 '>
            
            <div className='text-center pb-14 text-white'>
                <p className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary'>
                    Contact Us
                </p>
                <h1 className='text-4xl'>Stay connected with us</h1>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-5'>
                <input
                    type='text'
                    placeholder='Email Address'
                    className='input w-full max-w-md'
                />
                <input
                    type='text'
                    placeholder='Subject'
                    className='input w-full max-w-md'
                />
                <textarea
                    className='textarea w-full max-w-md'
                    placeholder='Your message'
                    rows={6}
                ></textarea>
               <PrimaryButton>Contact Us</PrimaryButton>
            </div>
        </div>
    );
};

export default Contact;