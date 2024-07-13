const PlaceImg = ({ place, index = 0, className = null }) => {
  if (!place.photos?.length) {
    return <div className="aspect-square bg-gray-200"></div>;
  }
  if (!className) {
    className = "object-cover h-full w-full";
  }
  return (
    <img
      src={`http://localhost:3000/uploads/${place.photos[index]}`}
      alt={place.title}
      className={className}
    />
  );
};

export default PlaceImg;
