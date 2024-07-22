import React from "react";

const Error: React.FC<{
  type: 401 | 403 | 404;
}> = ({ type }) => {

  const getContent = () => {
    switch (type) {
      case 401:
        return "Unauthorized!";
      case 403:
        return "Forbidden";
      case 404:
        return "Page Not Found";
      default:
        return "Page Not Found";
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
      }}>
    { getContent() }
    </div>
  );
};

export default Error;
