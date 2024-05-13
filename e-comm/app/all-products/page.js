"use client";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Card3 = ({ heading, type, image, price, color,sku }) => {
  return (
    <a href={`/all-products/${sku}`}>
    <div className="rounded-lg my-10 mx-5 shadow-sm">
      <div className="overflow-hidden rounded-xl h-80">
        <img
          className="w-full object-cover cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-full"
          src={image}
          alt={heading}
        />
      </div>
      <h3 className="pt-5 text-xl text-gray-900 capitalize xl:h-16 lg:h-16 md:h-16 sm:h-16 block product-title">
        {(heading + " - " + type).toLowerCase().substring(0, 40)+" ..."}
      </h3>
      <p className="text-md my-5 leading-8 text-gray-900 max-w-xs flex justify-between items-center capitalize ">
        <span className="text-sm">{price + " $"}</span>
        <span className="text-xs">{color.toLowerCase()}</span>
      </p>
      <div>
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

export default function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/getProducts')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error:', error));

      console.log(products);
  }, []); 
  const categories = {
    types: [
      {
        name: "All Trends",
      },
      {
        name: "In stock",
      },
      {
        name: "Out of stock",
      },
      {
        name: "Unisex",
      },
      {
        name: "Mens",
      },
      {
        name: "Womens",
      },
      {
        name: "Accessories",
      },
      {
        name: "Footwear",
      },
    ],
  };


  const responsiveTypes = {
    desktop: {
      breakpoint: { max: 3000, min: 1224 },
      items: 7.5,
      slidesToSlide: 1, // optional, default to 1.
    },
    bigtablet: {
      breakpoint: { max: 1224, min: 764 },
      items: 5.5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 724, min: 564 },
      items: 3.5,
      slidesToSlide: 1, // optional, default to 1.
    },
    smalltablet: {
      breakpoint: { max: 564, min: 364 },
      items: 2.5,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 364, min: 0 },
      items: 1.5,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

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

  const [selected, setSelected] = useState(0);

  const handleClick = (index) => {
    setSelected(index);
  };
  return (
    <div className="relative z-0 py-10 w-full mx-auto lg:max-w-7xl xs:px-20 sm:px-10 md:px-10 lg:px-5 px-5  mt-10">
      <p className="text-3xl md:text-4xl mb-5 mt-5 lg:text-4xl xl:text-4xl font-semibold text-gray-900 cover-1-title text-center w-full">
        The Fashion's All Trends
      </p>
      <div className="max-w-md mx-auto my-10">
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

      {/* <label className="flex items-center">
  <input type="checkbox" className="accent-gray-500 h-4 w-4 mr-2 " /> Customized
</label> */}

      <div>
        <hr />

        <Carousel arrows={false} responsive={responsiveTypes}>
          {categories.types.map((name, index) => (
            <div
              onClick={() => handleClick(index)}
              className={`rounded-3xl ${
                selected === index
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-900"
              } transition duration-200 ease-in-out px-4 my-5 m-3 py-1 text-center text-sm font-semibold  shadow-sm hover:bg-gray-900 hover:text-white outline outline-1 cursor-pointer`}
            >
              {name.name}
            </div>
          ))}
        </Carousel>

        <hr />
        <div className=" flex justify-between items-center mt-5">
          <p className=" text-2xl sm:text-2xl md:text-2xl ml-4 lg:text-2xl xl:text-2xl font-semibold text-gray-900 cover-1-title  w-full">
            Unisex Trends
          </p>
          <a
            href="#"
            className=" cover-1-title text-md hover:text-gray-500 w-24"
          >
            Show all
          </a>
        </div>
        {products.length === 0 ? <p className="text-1xl  mb-0 mt-10  text-gray-500 cover-1-title text-center w-full">Opps... Please Wait !</p>:<Carousel responsive={responsive}>
        {products.map((item, index) => (
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

      <div>
        <hr />
        <div className=" flex justify-between items-center mt-5">
          <p className=" text-2xl sm:text-2xl md:text-2xl ml-4 lg:text-2xl xl:text-2xl font-semibold text-gray-900 cover-1-title  w-full">
            Mens Trends
          </p>
          <a
            href="#"
            className=" cover-1-title text-md hover:text-gray-500 w-24"
          >
            Show all
          </a>
        </div>
        {products.length === 0 ? <p className="text-1xl  mb-0 mt-10  text-gray-500 cover-1-title text-center w-full">Opps... Please Wait !</p>:<Carousel responsive={responsive}>
        {products.map((item, index) => (
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

      <div>
        <hr />
        <div className=" flex justify-between items-center mt-5">
          <p className=" text-2xl sm:text-2xl md:text-2xl ml-4 lg:text-2xl xl:text-2xl font-semibold text-gray-900 cover-1-title  w-full">
            Womens Trends
          </p>
          <a
            href="#"
            className=" cover-1-title text-md hover:text-gray-500 w-24"
          >
            Show all
          </a>
        </div>
        {products.length === 0 ? <p className="text-1xl  mb-0 mt-10  text-gray-500 cover-1-title text-center w-full">Opps... Please Wait !</p>:<Carousel responsive={responsive}>
        {products.map((item, index) => (
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
    </div>
  );
}
