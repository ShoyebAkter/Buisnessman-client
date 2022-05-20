import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import rest from '../../assets/images/rest.avif'

const BookingBanner = ({date,setDate}) => {
    return (
        <div>
            <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row mx-6">
                <img src={rest} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />                    
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default BookingBanner;