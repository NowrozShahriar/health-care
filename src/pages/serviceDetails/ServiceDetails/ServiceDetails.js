import React from 'react';
import { useParams } from 'react-router';
import useFakedata from '../../../hooks/useFakedata';
import ServiceContent from '../ServiceContent/ServiceContent';

function ServiceDetails() {
    const { serviceId } = useParams();
    const services = useFakedata();

    return (
        <div className="serviceDetails">
            {
                services.map(service => (service.id === serviceId) && <ServiceContent key={service.id} service={service}/>)
            }
        </div>
    );
};

export default ServiceDetails;