import React from 'react';
import food1 from '../../assets/images/food1.avif'
import food2 from '../../assets/images/food2.avif'
import food3 from '../../assets/images/food3.avif'
import food4 from '../../assets/bookfood/food4.avif'
import food5 from '../../assets/bookfood/food5.avif'
import food6 from '../../assets/bookfood/food6.avif'
import Service from './Service';
const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Vegan salad bowl',
            description: 'Editorial, Health & Wellness, Food & Drink',
            img: food1
        },
        {
            _id: 2,
            name: 'Pesto Pasta',
            description: 'Editorial, Food & Drink',
            img: food2
        },
        {
            _id: 3,
            name: 'Fish for Lunch',
            description: 'Editorial, Food & Drink',
            img: food3
        },
        {
            _id: 4,
            name: 'Fish for Lunch',
            description: 'Editorial, Food & Drink',
            img: food4
        },
        {
            _id: 5,
            name: 'Fish for Lunch',
            description: 'Editorial, Food & Drink',
            img: food5
        },
        {
            _id: 6,
            name: 'Fish for Lunch',
            description: 'Editorial, Food & Drink',
            img: food6
        },
    ];
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary  text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Foods We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service =><Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;