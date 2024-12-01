import React from 'react';
import ApartmentCard from './ApartmentCard';

interface Apartment {
  id: string;
  name: string;
  location: string;
  price: number;
  description: string;
}

interface ApartmentListProps {
  apartments: Apartment[];
}

const ApartmentList: React.FC<ApartmentListProps> = ({ apartments }) => {
  return (
    <div className="apartment-list">
    {apartments.map((apartment) => (
      <ApartmentCard key={apartment.id} apartment={apartment} />
    ))}
  </div>  
  );
};

export default ApartmentList;
