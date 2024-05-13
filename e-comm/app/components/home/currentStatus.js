export default function CurrentStatus() {
  return (
    <div>
     

      <div className="overflow-hidden  pr-10 lg:pr-10 xl:pr-0 bg-white">
        <div className="mx-auto grid  grid-cols-1  lg:mx-0 lg:max-w-none lg:grid-cols-5 ">
          <div className=" px-10 xl:pl-32 lg:my-20 mt-20 pr-0 grid gap-20 grid-cols-1 sm:grid-cols-2 col-span-3 ">
            <div className="">
              <div className="flex items-start">
                <img
                  src="/icons/dots.svg"
                  alt="dots"
                  width="30px"
                  className="mr-3 mt-3"
                />
                <div className="text-5xl font-bold">236</div>
              </div>

              <p className="font-bold mt-5 product-title text-xl">Latest Trends</p>
              <p className="mt-5 pl-1">
              Consectetur adipiscing elit, lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt.consectetur adipiscing elit. 
              </p>
            </div>
            <div>
              <div className="flex items-start">
                <img
                  src="/icons/dots.svg"
                  alt="dots"
                  width="30px"
                  className="mr-3 mt-3"
                />
                <div className="text-5xl font-bold">9346</div>
              </div>

              <p className="font-bold mt-5 product-title text-xl">Satisfied Customers</p>
              <p className="mt-5 pl-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
            </div>
          </div>

          <div className=" px-10 xl:px-32 lg:my-20 my-20 pr-10 col-span-2">
          <p className="text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-semibold text-gray-900 cover-1-title">
                Join Us & Shop The Latest Drop
              </p>
             

              <div className="flex flex-wrap justify-start mt-6 gap-5">
                <a
                  href="/all-products"
                  className=" block flex items-center max-w-40  mr-10 rounded-md bg-black px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                 Check It Out
                </a>

              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

