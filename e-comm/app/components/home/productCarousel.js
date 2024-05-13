"use client";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Card3 = ({ heading, type, image, price, color,sku }) => {
  return (
    <a href={`/all-products/${sku}`} >
    <div className="rounded-lg my-10 mx-5  ">
      <div className="overflow-hidden rounded-xl h-96">
        <img
          className="w-full object-cover  cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-full"
          src={image}
          alt={heading}
        />
      </div>
      

      <div>
      <h3 className="pt-5 text-xl text-gray-900 capitalize xl:h-16 lg:h-16 md:h-16 sm:h-16 block product-title">
        {(heading + " - " + type).toLowerCase().substring(0, 40)+" ..."}
      </h3>
      <p className="text-md my-5 leading-8 text-gray-900 max-w-xs flex justify-between items-center capitalize ">
        <span className="text-sm">{price + " $"}</span>
        <span className="text-xs">{color.toLowerCase()}</span>
      </p>
      </div>
      <div className="">
        <a
          href="#"
          className="product-title video-box-1  flex items-center justify-center rounded-md  bg-gray-100 px-3 py-2 text-center text-md  font-semibold text-gray-900 shadow-sm hover:bg-gray-300  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition duration-200 ease-in-out "
        >
          Add
          <img src="/icons/cart.svg" className="ml-2" alt="cart" width="15px" />
        </a>
      </div>
  
    </div>
    </a>
  );
};

export default function ProductCarousel() {

  const [products, setProducts] = useState([]);
  const limitedProducts = products.slice(0, 6);
  useEffect(() => {
    fetch('http://localhost:5000/getProducts')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error:', error));

      console.log(products);
  }, []); 

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1224 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
    },
    bigtablet: {
      breakpoint: { max: 1224, min: 764 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 724, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

 
  return (
    <div className="relative z-0 py-10 w-full">
      <p className="text-2xl md:text-3xl mb-0 mt-5 lg:text-3xl xl:text-3xl font-semibold text-gray-900 cover-1-title text-center w-full">
        The Fashion's New Drop
      </p>
      <div className="max-w-md mx-auto mt-5 px-5">
        <div className="relative flex items-center w-full h-12 rounded-md focus-within:shadow-lg  shadow-md bg-white overflow-hidden pr-2">
          <input
            className="peer h-full w-full outline-none text-sm text-gray-700 pl-5"
            type="text"
            id="search"
            placeholder="Search Trends.."
          />
          <a
            href="#"
            className="grid place-items-center h-full w-12 text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </a>
        </div>
      </div>
      {products.length === 0 ? <p className="text-1xl  mb-0 mt-10  text-gray-500 cover-1-title text-center w-full">Opps... Please Wait !</p>:<Carousel responsive={responsive}>
        {limitedProducts.map((item, index) => (
          
          <Card3
            key={index}
            heading={item.name}
            type={item.type}
            color={item.color}
            image={item.image}
            price={item.price}
            sku={item.sku}
          />
          
        ))}
      </Carousel>}
      
    </div>
  );
}
