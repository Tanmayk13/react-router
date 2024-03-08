import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData()
//   useEffect(() => {
//     fetch("https://api.github.com/users/hiteshchoudhary")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);

  return (
    <div className="text-center m-4 bg-gray-600 p-4 text-3xl text-white">
      Github Followers : {data.followers}
      <img className="flex justify-center items-center pt-12" src={data.avatar_url}></img>
    </div>
  );
};

export default Github;

export const githubInfoLoader = async() =>{
    const response = await fetch("https://api.github.com/users/hiteshchoudhary")
    return response.json()
}
