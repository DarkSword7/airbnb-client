import { useParams } from "react-router-dom";

const BookingPage = () => {
  const { id } = useParams();
  return <div>Single Booking: {id}</div>;
};

export default BookingPage;
