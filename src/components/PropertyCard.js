function PropertyCard({ image }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className="flex flex-col w-64 h-96 bg-contain bg-no-repeat items-center justify-center"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <a href={"/properties/1"} className="rounded-md bg-orange-b w-64 px-10 py-2 text-white">Learn More</a>
    </div>
  );
}

export default PropertyCard;
