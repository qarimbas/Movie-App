import React from "react";

function NotFoundPage() {
  return (
    <div>
      <center>
        <h1 className="px-20 py-20 text-blue-500 text-8xl font-bold">
          404 Not Found!
        </h1>
        <button>
          <p
            className="px-20 py-20 text-blue-500 text-3xl font-bold hover:text-blue-400 "
            onClick={(event) => (window.location.href = "/")}
          >
            Return to Home Page
          </p>
        </button>
      </center>
    </div>
  );
}

export default NotFoundPage;
