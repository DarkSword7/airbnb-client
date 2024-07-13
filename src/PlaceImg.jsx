const PlaceImg = ({ place, index = 0, className = null }) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  if (!place.photos?.length) {
    return <div className="aspect-square bg-gray-200"></div>;
  }
  if (!className) {
    className = "object-cover h-full w-full";
  }
  return (
    <img
      src={`${baseUrl}/uploads/${place.photos[index]}`}
      alt={place.title}
      className={className}
    />
  );
};

export default PlaceImg;
