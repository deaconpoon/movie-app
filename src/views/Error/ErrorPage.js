import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      Sorry! We could not find what your are looking for. Go back to{" "}
      <Link to="/">Home</Link>
    </div>
  );
};
export default ErrorPage;
