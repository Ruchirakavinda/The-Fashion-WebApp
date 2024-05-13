"use client";
import { useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Admin() {
  const { push } = useRouter();
  const [base64Image, setBase64Image] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    // Trigger a click event on the hidden file input when the button is clicked
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target.result;
        setBase64Image(base64);
        setFormData({
          ...formData,
          image: base64,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    price: 0,
    discount: 0,
    color: "",
    quantity: 0,
    sku: "",
    cloth_type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
    const isAnyFieldEmpty = Object.values(formData).some(
      (value) => value === null || value === ""
    );

    if (isAnyFieldEmpty) {
      console.error("Empty field");
    } else {
      axios
        .post("http://localhost:5000/addProduct", formData)
        .then((response) => {
          console.log("Data posted successfully:", response);
          push("/");
        })
        .catch((error) => {
          console.error("Error posting data:", error);
          setErrorMessage("Faild to Add Details !");
        });
    }
    console.log(base64Image);
  };



  // Add Discount Banner

  const [base64BannerImage, setBase64BannerImage] = useState("");
  const [selectedBannerImage, setSelectedBannerImage] = useState(null);
  const [errorBannerMessage, setErrorBannerMessage] = useState("");
  const fileBannerInputRef = useRef(null);
  const handleBannerButtonClick = () => {
    // Trigger a click event on the hidden file input when the button is clicked
    fileBannerInputRef.current.click();
  };

  const handleBannerImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedBannerImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64BannerImage = event.target.result;
        setBase64BannerImage(base64BannerImage);
        setFormBannerData({
          ...formBannerData,
          image: base64BannerImage,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const [formBannerData, setFormBannerData] = useState({
    alter: "",
    image: "",
  });

  const handleBannerChange = (e) => {
    const { name, value } = e.target;
    setFormBannerData({
      ...formBannerData,
      [name]: value,
    });
  };

  const handleBannerSubmit = () => {
    console.log(formBannerData);
    const isAnyFieldEmpty = Object.values(formBannerData).some(
      (value) => value === null || value === ""
    );

    if (isAnyFieldEmpty) {
      console.error("Empty field");
    } else {
      axios
        .put("http://localhost:5000/updateBanner", formBannerData)
        .then((response) => {
          console.log("banner posted successfully:", response);
          push("/");
        })
        .catch((error) => {
          console.error("Error posting banner:", error);
          setErrorBannerMessage("Faild to Add Banner !");
        });
    }
    console.log(base64BannerImage);
  };

  return (
    <main>
      <div className="relative z-0 py-10 w-full mx-auto lg:max-w-7xl xs:px-20 sm:px-10 md:px-10 lg:px-5 px-5  mt-20">
        <div className="mx-auto grid  grid-cols-1 gap-x-10 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
          <form className="">
            <p className="product-title font-semibold mb-10 text-xl">
              Add Product
            </p>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="cloth-type"
                >
                  Cloth Type
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="cloth_type"
                  name="cloth_type"
                  type="text"
                  placeholder="Hoodie"
                  value={formData.cloth_type}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Varsity Hoodie"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mt-5 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="type"
                >
                  Gender Type
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="type"
                  name="type"
                  type="text"
                  placeholder="Unisex / Mens / Womens"
                  value={formData.type}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full mt-5 md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="color"
                >
                  Color
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="color"
                  name="color"
                  type="text"
                  placeholder="Red"
                  value={formData.color}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="price"
                  name="price"
                  type="text"
                  placeholder="50.5$"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="discount"
                >
                  discount
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="discount"
                  name="discount"
                  type="text"
                  placeholder="30%"
                  value={formData.discount}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="sku"
                >
                  SKU
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="sku"
                  name="sku"
                  type="text"
                  placeholder="A90210"
                  value={formData.sku}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mt-5 w-full flex justify-start gap-5">
              <div className="w-1/3">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 bg-gray-500 w-[100%] h-[36px] text-[#ffffff]"
                  onClick={handleButtonClick}
                >
                  Upload Image
                </button>
              </div>
              <div className="pb-3 ">
                {base64Image ? (
                  <div className="w-20">
                    <img src={base64Image} alt="Uploaded" />
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleImageChange}
              />
            </div>

            <div className="mt-10 ">
              <div
                href="#"
                className=" w-full uppercase mr-10 rounded-md bg-black px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-700 transition duration-200 ease-in-out cursor-pointer"
                onClick={handleSubmit}
              >
                Submit
              </div>
            </div>
            <p className="text-red-500 mt-5">{errorMessage}</p>
          </form>

          <form>
            <p className="product-title font-semibold mb-10 text-xl">
              Add Discount Banner
            </p>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full  px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="alter"
                >
                 Image Alter Text
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="alter"
                  name="alter"
                  type="text"
                  placeholder="Banner"
                  value={formBannerData.alter}
                  onChange={handleBannerChange}
                />
              </div>
            </div>

            <div className="mt-5 w-full flex justify-start gap-5">
              <div className="w-1/3">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 bg-gray-500 w-[100%] h-[36px] text-[#ffffff]"
                  onClick={handleBannerButtonClick}
                >
                  Upload Image
                </button>
              </div>
              <div className="pb-3 ">
                {base64BannerImage ? (
                  <div className="w-20">
                    <img src={base64BannerImage} alt="Uploaded" />
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                ref={fileBannerInputRef}
                onChange={handleBannerImageChange}
              />
            </div>

            <div className="mt-10 ">
              <div
                href="#"
                className=" w-full uppercase mr-10 rounded-md bg-black px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-700 transition duration-200 ease-in-out cursor-pointer"
                onClick={handleBannerSubmit}
              >
                Submit
              </div>
            </div>
            <p className="text-red-500 mt-5">{errorBannerMessage}</p>
          </form>
        </div>
      </div>
    </main>
  );
}
