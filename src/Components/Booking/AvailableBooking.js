import React, { useState } from 'react';

const AvailableBooking = () => {
    const [food, setFood] = useState(null);

    // const formattedDate = format(date, 'PP');
    // const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://secret-dusk-46242.herokuapp.com/available?date=${formattedDate}`)
    //     .then(res => res.json()))

    // if(isLoading){
    //     return <Loading></Loading>
    // }
    return (
        <div>
            <h2>boking</h2>
        </div>
    );
};

export default AvailableBooking;