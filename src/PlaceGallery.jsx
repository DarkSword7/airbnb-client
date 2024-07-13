import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";

const PlaceGallery = ({ place }) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  if (showAllPhotos) {
    return (
      <div className="absolute inset-0 bg-black text-white min-h-screen">
        <div className="bg-black p-8 grid gap-4">
          <div>
            <h2 className="text-3xl mr-44">{place.title}</h2>
            <button
              onClick={() => setShowAllPhotos(false)}
              className="fixed flex right-12 top-8 items-center gap-1 py-2 px-4 bg-white text-black rounded-2xl shadow shadow-black/30"
            >
              <IoIosArrowBack size={16} />
              Back
            </button>
          </div>
          {place?.photos?.length > 0 &&
            place.photos.map((photo) => {
              return (
                <div>
                  <img
                    src={`${baseUrl}/uploads/${photo}`}
                    alt={place.title}
                    className="w-full"
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
        <div>
          {place.photos?.[0] && (
            <div>
              <img
                onClick={() => setShowAllPhotos(true)}
                src={`${baseUrl}/uploads/${place.photos[0]}`}
                alt={place.title}
                className="aspect-square object-cover cursor-pointer"
              />
            </div>
          )}
        </div>
        <div className="grid">
          {place.photos?.[1] && (
            <img
              onClick={() => setShowAllPhotos(true)}
              src={`${baseUrl}/uploads/${place.photos[1]}`}
              alt={place.title}
              className="aspect-square object-cover cursor-pointer"
            />
          )}

          <div className="overflow-hidden">
            {place.photos?.[2] && (
              <img
                onClick={() => setShowAllPhotos(true)}
                src={`${baseUrl}/uploads/${place.photos[2]}`}
                alt={place.title}
                className="aspect-square object-cover cursor-pointer relative top-2"
              />
            )}
          </div>
        </div>
      </div>
      <button
        onClick={() => setShowAllPhotos(true)}
        className="flex gap-1 items-center absolute bottom-2 right-2 py-1 px-2 border-2 border-black bg-white rounded-xl shadow-md shadow-gray-500"
      >
        <CgMenuGridO size={18} />
        Show all photos
      </button>
    </div>
  );
};

export default PlaceGallery;
