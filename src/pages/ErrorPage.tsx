import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error: any = useRouteError();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1)
  };

  return (
    <div
      id="error-page"
      className="h-100 d-flex flex-column justify-content-center align-items-center bg-gradient"
    >
      <div className="border p-1 rounded">
        <h1 className="border-bottom pb-1">Oops!</h1>

        <p>Sorry, an unexpected error has occurred.</p>
        <code>
          <p>
            status: <i>{error.status}</i>
          </p>
          <p>
            message: <i>{error.statusText || error.message}</i>
          </p>
        </code>
        <button
          type="button"
          className="btn btn-link"
          onClick={() => handleBackClick()}
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
