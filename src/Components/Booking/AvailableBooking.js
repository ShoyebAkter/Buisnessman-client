import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableBooking = ({date}) => {
    const [food, setFood] = useState(null);

    const formattedDate = format(date, 'PP');

    const[services,setServices]=useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=> setServices(data))
    },[])
    // const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://secret-dusk-46242.herokuapp.com/available?date=${formattedDate}`)
    //     .then(res => res.json()))

    // if(isLoading){
    //     return <Loading></Loading>
    // }
    return (
        <div className='my-10'>
            <h4 className='text-xl text-secondary text-center my-12'>Available booking on {formattedDate}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setFood={setFood}
                    ></Service>)
                }
            </div>
            {food && <BookingModal
                date={date}
                food={food}
                setFood={setFood}
                // refetch = {refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableBooking;