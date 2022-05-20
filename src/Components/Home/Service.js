import React from 'react';

const Service = ({ service }) => {
    return (
            <div class="card lg:max-w-lg bg-base-100 shadow-xl image-full">
                <figure><img src={service.img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{service.name}</h2>
                    <p>{service.description}</p>
                    
                </div>
            </div>
        
    );
};

export default Service;