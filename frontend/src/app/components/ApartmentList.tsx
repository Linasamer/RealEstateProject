import Link from 'next/link';

const ApartmentList = ({ apartments }: { apartments: any[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {apartments.map((apartment) => (
        <div key={apartment.id} className="border p-4 rounded-md shadow-sm">
          <h2 className="text-xl font-bold">{apartment.name}</h2>
          <p>{apartment.location}</p>
          <p>${apartment.price}</p>
          <Link href={`/${apartment.id}`} className="text-blue-500 underline">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ApartmentList;
