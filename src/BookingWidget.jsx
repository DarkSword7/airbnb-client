import { useContext, useEffect, useState } from "react";
import { differenceInDays } from "date-fns";
import axios from "axios";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";
import { UserContext } from "./UserContext";

const BookingWidget = ({ place }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numGuests, setNumGuests] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [redirect, setRedirect] = useState("");
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);

  let numberOfNights = 0;
  if (checkIn && checkOut) {
    numberOfNights = differenceInDays(new Date(checkOut), new Date(checkIn));
  }

  const bookThisPlace = async () => {
    const response = await axios.post("/bookings", {
      place: place._id,
      checkIn,
      checkOut,
      numGuests,
      name,
      phone,
      price: numberOfNights * place.price,
    });

    const bookingId = response.data._id;
    setRedirect(`/account/bookings/${bookingId}`);
    toast.success("Booking successful");
  };

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="bg-white shadow p-4 rounded-2xl">
      <div className="text-2xl text-center">
        Price: ${place.price} / per night
      </div>
      <div className="border rounded-2xl mt-4">
        <div className="flex">
          <div className="py-3 px-4">
            <label>Check-in</label>
            <input
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              type="date"
            />
          </div>
          <div className="py-3 px-4 border-l">
            <label>Check-out</label>
            <input
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              type="date"
            />
          </div>
        </div>
        <div className="py-3 px-4 border-t">
          <label>Number of guests:</label>
          <input
            value={numGuests}
            onChange={(e) => setNumGuests(e.target.value)}
            type="number"
          />
        </div>
        {numberOfNights > 0 && (
          <>
            <div className="py-3 px-4 border-t">
              <label>Your full name:</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
              />
              <label>Phone number:</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
              />
            </div>
          </>
        )}
      </div>
      <button onClick={bookThisPlace} className="primary mt-4">
        Book this place{" "}
        {numberOfNights > 0 && (
          <span>
            for ${place.price * numberOfNights} ({numberOfNights} nights)
          </span>
        )}
      </button>
    </div>
  );
};

export default BookingWidget;
