import { services } from '../data';
import Title from './Title';
import Service from './Service';
import { useState } from 'react';

const Services = () => {
  const [servicesData, setServicesData] = useState(services);

  // const handleDeleteItem = (itemId) => {
  //   const servicesData = setServicesData.filter((item) => item.id !== itemId);
  //   setItems(updatedItems);
  // };

  const handleRemoveService = (serviceId) => {
    setServicesData(servicesData.filter((service) => service.id !== serviceId));
  };

  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />

      <div className="section-center services-center">
        {servicesData.map((service) => {
          return (
            <Service
              {...service}
              key={service.id}
              onRemove={handleRemoveService}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Services;
