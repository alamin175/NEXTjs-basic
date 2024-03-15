import React from "react";

const page = ({ params, searchParams }) => {
  // console.log(params, searchParams);
  return (
    <div>
      <h1>this is id:{params.id}</h1>
    </div>
  );
};

export default page;
