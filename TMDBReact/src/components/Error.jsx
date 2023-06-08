// //////////////////////////////////////////////////////////// //
// This component represents the error page of the application. //
// //////////////////////////////////////////////////////////// //

const Error = () => {
  return (
    <div className="error-page">
      {" "}
      {/* Create a div with the class "error-page" to contain the error content. */}
      <h1 className="error-title">Oops, something went wrong!</h1>{" "}
      {/* Render a heading with the class "error-title" to display the error title. */}
      <p className="error-message">
        It seems that our monkey developers are playing around with the code.
      </p>{" "}
      {/* Render a paragraph with the class "error-message" to display the error message. */}
      <img
        className="error-image"
        src="./src/assets/images/laugh.gif"
        alt="Funny Error Message"
      />
      <p className="error-hint">
        To fix the issue, please try refreshing the page or contact our support
        team.
      </p>
    </div>
  );
};

export default Error;
