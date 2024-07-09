import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PlacePage = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then(({ data }) => {
      setPlace(data);
    });
  }, [id]);
  return (
    <div className="mt-4 bg-gray-100 -mx-8 px-8 py-8">
      {place && (
        <>
          <h1 className="text-2xl">{place.title}</h1>
          <h2>{place.address}</h2>
        </>
      )}
    </div>
  );
};

export default PlacePage;
