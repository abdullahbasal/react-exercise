import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingGif from "../../assets/icons/loading.gif";

export default function Laptops() {
  const navigate = useNavigate();
  const [data, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/search?q=laptop"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRows(data.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <img src={LoadingGif} alt="loading" />
      </div>
    );
  }
  return (
    <div className="flex flex-wrap justify-center gap-5 py-5">
      {data.map((item, i) => (
        <div
          key={i}
          className="relative  flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
        >
          <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
            <img className="object-cover" src={item.images[0]} alt="product" />
            <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
              {item.discountPercentage}
            </span>
          </div>
          <div className="mt-4 px-5 pb-5">
            <div>
              <h5 className="truncate text-xl tracking-tight text-slate-900">
                {item.title}
              </h5>
            </div>
            <div className="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-slate-900">
                  {item.price + " $"}
                </span>
              </p>
              <div className="flex items-center">
                <span className="mr-2 ml-3 rounded px-2.5 py-0.5 text-xs font-semibold">
                  {Array.from(
                    { length: Math.round(item.rating) },
                    () => "⭐"
                  ).join("")}
                </span>
              </div>
            </div>
            <button
              onClick={() =>
                navigate(`/product/${item.title}`, { state: item })
              }
              className="w-full gap-2 flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <svg
                style={{ color: "white" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-4 w-4"
              >
                <path
                  d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                  fill="white"
                ></path>
              </svg>
              İncele
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
