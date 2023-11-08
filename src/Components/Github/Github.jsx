// import { useEffect, useState } from 'react';

import { useLoaderData } from 'react-router-dom';

export default function Github() {
  const data = useLoaderData();

  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch('https://github.com/usama-rahman')
  //       .then(response => response.json())
  //       .then(data => {
  //         // console.log(data);
  //         setData(data);
  //       });
  //   });

  return (
    <div className="bg-gray-600 text-white text-3xl p-4 text-center">
      Github followers:{data.followers}
    </div>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch('https://github.com/usama-rahman');
  return respons.json();
};
