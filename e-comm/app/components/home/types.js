

export default function Types() {


  return (
    <div>
      <div className="overflow-hidden bg-white ">
        <div className="mx-auto grid  grid-cols-1  lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
          <div className="img-box-1">
            <div className=" px-10 xl:px-32 lg:my-20 my-20 pr-10">
              <p className="text-lg leading-8 text-gray-300 font-semibold mb-5">
                Womens' Fashoin
              </p>
              <p className="text-4xl xl:text-5xl font-semibold text-white cover-2-title max-w-md leading-5 min-h-[10rem]">
              Embrace Your Unique Style.
              </p>
              <a
                href="/all-products"
                className=" block flex items-center justify-between j w-[11rem] mr-10 mt-5 rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <p> Shop Women</p>
                <img
                  src="/icons/right.svg"
                  alt="next"
                  className="ml-3"
                  width="20px"
                />
              </a>
            </div>
          </div>
          <div className="img-box-2">
            <div className=" px-10 xl:px-32 lg:my-20 my-20 pr-10">
              <p className="text-lg leading-8 text-gray-300 font-semibold mb-5">
                Mens' Fashion
              </p>
              <p className="text-4xl xl:text-5xl font-semibold text-white cover-2-title max-w-md leading-2 min-h-[10rem]">
              Discover Timeless Style And Quality
              </p>
              <a
                href="/all-products"
                className=" block flex items-center justify-between j w-[11rem] mr-10 mt-5 rounded-md bg-black px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <p> Shop Men</p>
                <img
                  src="/icons/right.svg"
                  alt="next"
                  className="ml-3"
                  width="20px"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

    <div>

    </div>
    </div>

  );
}


