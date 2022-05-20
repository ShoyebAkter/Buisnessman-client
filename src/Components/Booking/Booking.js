import React, { useState } from 'react';
import BookingBanner from './BookingBanner';
import AvailableBooking from './AvailableBooking';
import Footer from '../Home/Footer';

const Booking = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <BookingBanner date={date} setDate={setDate}></BookingBanner>
            <AvailableBooking date={date}></AvailableBooking>
            <Footer></Footer>
        </div>
    );
};

export default Booking;