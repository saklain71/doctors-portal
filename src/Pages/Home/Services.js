import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png';
import cravity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import baby from "../../assets/images/treatment.png"


const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Floride Treatment",
            description: "",
            img: fluoride
        },
        {
            _id: 2,
            name: "Cravity Feeling",
            description: "",
            img: cravity
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: "",
            img: whitening
        }
    ]

    return (
        <div className='my-28 '>
            <div className='text-center '>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h3>Services With Provides</h3>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {services.map(service => <Service
                    key={service._id}
                    service={service}
                ></Service>)}

            </div>
            <div>
                <div class="hero min-h-screen ">
                    <div class="hero-content flex-col lg:flex-row">
                        <img src={baby} class=" max-w-sm rounded-lg shadow-2xl" />
                        <div className='py-12 mx-20'>
                            <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                            <p className='py-12'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;