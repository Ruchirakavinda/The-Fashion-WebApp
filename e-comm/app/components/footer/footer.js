function Footer() {
  return (
    <div>
      <div className="flex items-center justify-center relative">
      <img
            src="/images/footer.jpg"
            alt="cover"
            className="h-full  w-full object-cover sm:object-cover lg:object-cover xl:object-cover xs:object-cover"
          />
          <h1 className="absolute z-10 font-bold text-white product-title xl:text-6xl lg:text-6xl md:text-4xl sm:text-2xl">
            THE FASHOIN COMPANY
          </h1>
          </div>
     
      <div className="overflow-hidden bg-black ">
        <div className="mx-auto grid  grid-cols-1  lg:mx-0 lg:max-w-none lg:grid-cols-4 sm:grid-cols-2 px-10 xl:px-32">
          <div className=" px-0  py-10">
           <h1 className="product-title font-bold text-3xl text-white">The Fashion</h1>
           <p className="text-sm text-gray-200 mt-1">Company</p>
          </div>
          <div className=" px-0  lg:px-10 py-10">
            <p className="text-md  text-gray-500 ">Melbourne</p>
            <p className="text-md my-5 text-white ">
              Level 1, Unit 9 / 677 Springvale Road, Mulgrave VIC 3170
            </p>
            <p className="text-md  text-gray-500 py-2">Colombo</p>
            <p className="text-md mt-5 text-white ">
              Level 4, 46/38, Navam Mawatha, Colombo 02, 00200
            </p>
          </div>
          <div className=" px-0  lg:px-10 lg:py-10 py-0">
            <p className="text-md  text-gray-500 ">Work inquiries</p>
            <p className="text-md my-5 text-white ">
              Interested in working with us?{" "}
              <a href="mailto: hello@empite.com ">hello@thefashion.com</a>
            </p>
          </div>
          <div className=" pl-0  lg:pl-10 lg:py-10 sm:py-3">
            <p className="text-md  text-gray-500 ">Stay in touch</p>
           
              <div className="relative mt-6 rounded-md shadow-sm bg-black">
                <input
                  type="email"
                  className="block w-full bg-gray-800 rounded-md  py-1.5 pl-3 pr-20 text-white  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Your email address"
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button className="text-white text-sm font-semibold py-2 px-4">Subscribe</button>
                </div>
              </div>
            
          </div>
        </div>
        <div className="px-10 xl:px-32 xl:pt-0 py-10 pb-10">
          <p className="text-md text-gray-300 ">© 2020, The Fashion Pty Ltd</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
