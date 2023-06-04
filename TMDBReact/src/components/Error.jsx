
const Error = () => {
  return (
    <div className="error-page">
      <h1 className="error-title">Oops, something went wrong!</h1>
      <p className="error-message">It seems that our monkey developers are playing around with the code.</p>
      <img className="error-image" src="https://www.example.com/error-monkey.gif" alt="Error Monkey" />
      <p className="error-hint">To fix the issue, please try refreshing the page or contact our support team.</p>
    </div>
  );
};

export default Error;
