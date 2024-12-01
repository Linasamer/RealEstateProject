interface Apartment {
  id: string;
  name: string;
  location: string;
  price: number;
}

const ApartmentCard = ({ apartment }: { apartment: Apartment }) => {
  return (
    <div className="card">
      <h2>{apartment.name}</h2>
      <p>{apartment.location}</p>
      <p><strong>${apartment.price}</strong></p>
    </div>
  );
};

export default ApartmentCard;
