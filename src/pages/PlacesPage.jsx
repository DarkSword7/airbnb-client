import { Link } from "react-router-dom";
import AccountNav from "../AccountNav";

const PlacesPage = () => {
  return (
    <>
      <AccountNav />
      <div className="text-center">
        list of all added places
        <br />
        <Link
          to="/account/places/new"
          className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full mt-4"
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add a new accommodation
        </Link>
      </div>
    </>
  );
};

export default PlacesPage;
