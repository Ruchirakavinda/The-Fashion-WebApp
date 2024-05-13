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


export default function Product({params}) {
    const id = params.id;

    const [product, setProduct] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/getProducts/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error:', error));
  }, [id]);

    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5000/getProducts')
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error('Error:', error));
  
        console.log(products);
    }, []); 

  const [selectedColor, setSelectedColor] = useState("blue");

  const handleClickColor = (color) => {
    setSelectedColor(color);
  };

  const [selectedSize, setSelectedSize] = useState("S");

  const handleClickSize = (size) => {
    setSelectedSize(size);
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


  return (
    <div className="mt-20">
      <div className="relative z-0 py-10 w-full mx-auto lg:max-w-7xl xs:px-20 sm:px-10 md:px-10 lg:px-5 px-5  mt-10">
      {product != "" ?
        <div className="mx-auto grid  grid-cols-1 gap-x-0 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
          <div className="xl:px-20 lg:px-20 md:px-10 sm:px-10">
            <img
              src={product.image}
              alt="cover"
              className="h-auto w-full mx-auto object-cover sm:object-cover rounded-xl lg:object-cover xl:object-cover xs:object-cover"
            />
          </div>

          <div className="my-0">
            <div className="xl:px-10  lg:px-10 md:px-10  sm:px-10  px-15">
              <div className="flex ">
                <div className=" block rounded-3xl bg-green-600 px-3 my-3 py-1 text-center text-xs text-white">
                  In Stock
                </div>
              </div>
              <p className="text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-semibold text-gray-900 cover-1-title capitalize ">
                {(product.name+" - "+product.type).toLowerCase()}
              </p>
              <p className="mt-5 text-2xl leading-8 text-gray-900 font-semibold max-w-xs flex items-center capitalize ">
                <span> {"$ "+product.price} </span>
                <span className="text-orange-600 text-sm ml-5">{product.discount+" % OFF"}</span>
              </p>
              <p className="mt-3 text-md leading-8 text-gray-900 max-w-xs capitalize ">
                {"or 3 installments of $ "+((product.price)/3).toFixed(0)+" by PayMe"}
              </p>

              <p className="mt-3 text-sm leading-8 text-gray-900 font-semibold max-w-xs capitalize ">
                Color
              </p>
              <div className="flex mt-2">
                <div
                  onClick={() => handleClickColor("black")}
                  className={`rounded-3xl ${
                    selectedColor === "black"
                      ? "outline outline-2"
                      : "outline outline-0"
                  } transition duration-200 bg-black ease-in-out mr-2 w-5 h-5 text-center text-sm font-semibold  shadow-sm hover:bg-gray-900 hover:text-white  cursor-pointer`}
                ></div>
                <div
                  onClick={() => handleClickColor("gray")}
                  className={`rounded-3xl ${
                    selectedColor === "gray"
                      ? "outline outline-2"
                      : "outline outline-0"
                  } transition duration-200 bg-gray-500 ease-in-out mr-2 w-5 h-5 text-center text-sm font-semibold  shadow-sm hover:bg-gray-900 hover:text-white  cursor-pointer`}
                ></div>
                <div
                  onClick={() => handleClickColor("green")}
                  className={`rounded-3xl ${
                    selectedColor === "green"
                      ? "outline outline-2"
                      : "outline outline-0"
                  } transition duration-200 bg-green-500 ease-in-out mr-2 w-5 h-5 text-center text-sm font-semibold  shadow-sm hover:bg-gray-900 hover:text-white  cursor-pointer`}
                ></div>
                <div
                  onClick={() => handleClickColor("yellow")}
                  className={`rounded-3xl ${
                    selectedColor === "yellow"
                      ? "outline outline-2"
                      : "outline outline-0"
                  } transition duration-200 bg-yellow-500 ease-in-out mr-2 w-5 h-5 text-center text-sm font-semibold  shadow-sm hover:bg-gray-900 hover:text-white  cursor-pointer`}
                ></div>
                <div
                  onClick={() => handleClickColor("blue")}
                  className={`rounded-3xl ${
                    selectedColor === "blue"
                      ? "outline outline-2"
                      : "outline outline-0"
                  } transition duration-200 bg-blue-500 ease-in-out mr-2 w-5 h-5 text-center text-sm font-semibold  shadow-sm hover:bg-gray-900 hover:text-white  cursor-pointer`}
                ></div>
                <div
                  onClick={() => handleClickColor("red")}
                  className={`rounded-3xl ${
                    selectedColor === "red"
                      ? "outline outline-2"
                      : "outline outline-0"
                  } transition duration-200 bg-red-500 ease-in-out mr-2 w-5 h-5 text-center text-sm font-semibold  shadow-sm hover:bg-gray-900 hover:text-white  cursor-pointer`}
                ></div>
              </div>

              <p className="mt-3 text-sm leading-8 text-gray-900 font-semibold max-w-xs">
                Size
              </p>
              <div className="flex flex-wrap gap-5 mt-2">
                <div
                  onClick={() => handleClickSize("S")}
                  className={`rounded-3xl ${
                    selectedSize === "S"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } transition duration-200 text-black  ease-in-out  px-5 py-1 text-center text-sm  shadow-sm hover:bg-gray-900 hover:text-white outline outline-1 cursor-pointer`}
                >
                  S
                </div>

                <div
                  onClick={() => handleClickSize("M")}
                  className={`rounded-3xl ${
                    selectedSize === "M"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } transition duration-200 text-black  ease-in-out px-5 py-1 text-center text-sm  shadow-sm hover:bg-gray-900 hover:text-white outline outline-1 cursor-pointer`}
                >
                  M
                </div>

                <div
                  onClick={() => handleClickSize("L")}
                  className={`rounded-3xl ${
                    selectedSize === "L"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } transition duration-200 text-black  ease-in-out px-5 py-1 text-center text-sm  shadow-sm hover:bg-gray-900 hover:text-white outline outline-1 cursor-pointer`}
                >
                  L
                </div>

                <div
                  onClick={() => handleClickSize("XL")}
                  className={`rounded-3xl ${
                    selectedSize === "XL"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } transition duration-200 text-black  ease-in-out  px-5 py-1 text-center text-sm  shadow-sm hover:bg-gray-900 hover:text-white outline outline-1 cursor-pointer`}
                >
                  XL
                </div>

                <div
                  onClick={() => handleClickSize("XXL")}
                  className={`rounded-3xl ${
                    selectedSize === "XXL"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } transition duration-200 text-black  ease-in-out  px-5 py-1 text-center text-sm  shadow-sm hover:bg-gray-900 hover:text-white outline outline-1 cursor-pointer`}
                >
                  XXL
                </div>
              </div>

              <div class="my-4">
                <div>
                  <label class="block  text-gray-700 text-sm font-semibold mb-4">
                    Quantity
                  </label>
                  <input
                    class="outline outline-1  block w-20 bg-white text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-1 focus:bg-white focus:border-gray-500"
                    type="number"
                    placeholder="1"
                  />
                </div>
               
              </div>
              <div className="mt-6 ">
                  <div className=" w-full  mr-10 rounded-md bg-white outline outline-1 px-6 py-3 text-center text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-white transition duration-200 ease-in-out cursor-pointer uppercase">
                    Add to Cart
                  </div>
                </div>
              <div className="mt-4 ">
                <div
                  href="#"
                  className=" w-full uppercase mr-10 rounded-md bg-black px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-700 transition duration-200 ease-in-out cursor-pointer"
                >
                  Buy It Now
                </div>
          
              </div>
            </div>
          </div>
        </div>:<p className="text-1xl  mb-0 mt-10  text-gray-500 cover-1-title text-center w-full">Opps... Please Wait !</p>}
        
      

      
<div className="mt-10">


      <hr />
        <div className=" flex justify-between items-center mt-5">
          <p className=" text-2xl sm:text-2xl md:text-2xl ml-4 lg:text-2xl xl:text-2xl font-semibold text-gray-900 cover-1-title  w-full">
            You Also Might Like ...
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
    </div>
  );
}
