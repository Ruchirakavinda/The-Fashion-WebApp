"use client";
import { useEffect, useState } from "react";


export default function GetStarted() {
  const [banner, setBanner] = useState("");

  useEffect(() => {
    fetch('http://localhost:5000/getBanner')
      .then((res) => res.json())
      .then((data) => setBanner(data))
      .catch((error) => console.error('Error:', error));

      console.log(banner);
  }, []); 
  return (
    <div className="mt-20">
      <div className="overflow-hidden bg-gray-100 ">
        <div className="mx-auto grid  grid-cols-1 gap-x-0 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
          <img
            src={banner.image}
            alt={banner.alter}
            className="h-full  w-full object-cover sm:object-cover lg:object-cover xl:object-cover xs:object-cover"
          />
          <div className="xl:my-20 lg:my-10 lg:mt-10 mb-20">
            <div className="mr-10 xl:mr-40 xl:ml-20 ml-10">
              <p className="text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-semibold text-gray-900 cover-1-title">
                We Picked Every Item With Care
              </p>
              <p className="mt-6 text-md leading-8 text-gray-900 max-w-xs">
                With unique ideas and the passionate staff behind.
              </p>

              <div className="flex flex-wrap justify-start mt-6 gap-5">
                <a
                  href="/all-products"
                  className=" block flex items-center max-w-40  mr-10 rounded-md bg-black px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                 Check It Out
                </a>
                <a href="#" className="flex items-center">
                  <img
                    src="/icons/playbtnOutline.svg"
                    alt="playbtnOutline"
                    className="mr-3"
                    width="40px"
                  />
                  <p className="text-lg leading-8 text-black max-w-xs">
                    Take a Tour
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

