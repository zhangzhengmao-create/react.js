import React from "react";

const Greeting = () => {
  const message = "Hello";
  const date = new Date();

  //YYYY-mm-DD
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // in react, the month should plus 1
  const day = date.getDate();

  return (
    <div>
      <h1>{message}</h1>
      <h2>Today is : {`${year}-${month}-${day}`}</h2>
      {/** here 'data' is an object, so we need to invoke its getDate() method */}
    </div>
  );
};

export default Greeting;
