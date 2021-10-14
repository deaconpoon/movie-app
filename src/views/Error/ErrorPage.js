import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div aria-label="Go back to home page instruction">
      Sorry! We could not find what your are looking for. Go back to{" "}
      <Link
        aria-label="Go back to home page link"
        data-testId="error-home-link"
        to="/"
      >
        Home
      </Link>
    </div>
  );
};
export default ErrorPage;
