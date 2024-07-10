import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CgMenuGridO } from "react-icons/cg";
import { IoIosArrowBack } from "react-icons/io";
import BookingWidget from "../BookingWidget";

const PlacePage = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then(({ data }) => {
      setPlace(data);
    });
  }, [id]);

  if (!place) {
    return <div>Loading...</div>;
  }

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
                    src={`http://localhost:3000/uploads/${photo}`}
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
    <div className="mt-4 bg-gray-100 -mx-8 px-8 pt-8">
      <h1 className="text-3xl">{place.title}</h1>
      <a
        href={`https://maps.google.com/?q=${place.address}`}
        target="_blank"
        className="flex my-3 gap-1 font-semibold underline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>

        {place.address}
      </a>
      <div className="relative">
        <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
          <div>
            {place.photos?.[0] && (
              <div>
                <img
                  onClick={() => setShowAllPhotos(true)}
                  src={`http://localhost:3000/uploads/${place.photos[0]}`}
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
                src={`http://localhost:3000/uploads/${place.photos[1]}`}
                alt={place.title}
                className="aspect-square object-cover cursor-pointer"
              />
            )}

            <div className="overflow-hidden">
              {place.photos?.[2] && (
                <img
                  onClick={() => setShowAllPhotos(true)}
                  src={`http://localhost:3000/uploads/${place.photos[2]}`}
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

      <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div>
          <div className="my-4">
            <h2 className="font-semibold text-2xl">Description</h2>
            {place.description}
          </div>
          Check-in: {place.checkIn} <br />
          Check-out: {place.checkOut} <br />
          Max number of guests: {place.maxGuests}
        </div>
        <div>
          <BookingWidget place={place} />
        </div>
      </div>
      {place.extraInfo.length > 0 && (
        <div className="bg-white -mx-8 px-8 py-8 border-t">
          <div>
            <h2 className="font-semibold text-2xl">Extra Info</h2>
            {/* <div className="mt-2">
          <iframe
            title="map"
            width="100%"
            height="300"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src={`https://maps.google.com/maps?q=${place.address}&output=embed`}
          />
        </div> */}
          </div>
          <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">
            {place.extraInfo}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlacePage;
