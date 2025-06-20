import { Link } from "react-router-dom";
import Header from "./Header";

function NotFound() {
  return (
    <>
      <Header/>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">
          Oops! The page you're looking for doesn't exist or couldn't be found.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go back to Home
        </Link>
      </div>
    </>
  );
}

export default NotFound;
