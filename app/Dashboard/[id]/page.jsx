import React from "react";

const Page = ({ params }) => {
  console.log(params);
  return <div>{params.id}</div>;
};

export default Page;
