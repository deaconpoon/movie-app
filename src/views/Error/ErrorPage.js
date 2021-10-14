import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      Sorry! We could not find what your are looking for. Go back to{" "}
      <Link data-testId="error-home-link" to="/">
        Home
      </Link>
    </div>
  );
};
export default ErrorPage;
