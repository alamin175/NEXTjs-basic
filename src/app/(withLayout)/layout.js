import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <h1>Header</h1>
      <Link href="/">
        <button className="btn">Home</button>
      </Link>
      {children}
      <h1>FOoter</h1>
    </div>
  );
};

export default layout;
