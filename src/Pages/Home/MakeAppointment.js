import React from 'react';
import doctor from '../../assets/images/doctor-small.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background:`url(${appointment})`
        }} 
        className='flex justify-center items-center p-1'>
            <div className='flex-1'>
                <img className='mt-[-100px] hidden lg:block sm:block' classnam src={doctor} alt="" />
            </div>
            <div className=' sm:flex-1 px-2'>
                <h3 className='text-xl text-primary'>Appoinment</h3>
                <h2 className='text-3xl text-white font-bold'>Make an Appintment</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum laborum, voluptate optio nobis, excepturi omnis cum accusamus beatae totam nam sit facilis accusantium vitae! At necessitatibus quo veritatis officia nam? Quas facilis minima facere inventore aut magni aperiam. Blanditiis, nobis.</p>
                <PrimaryButton>Get Started</PrimaryButton>
 
            </div>
        </section>
    );
};

export default MakeAppointment;