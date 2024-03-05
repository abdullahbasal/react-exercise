import { useState, useEffect } from "react";
import LoadingGif from "../../assets/icons/loading.gif";
import Card from "../../components/card/Card";

export default function Phones() {
  const [data, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/search?q=phone"
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
        <Card item={item} key={i} />
      ))}
    </div>
  );
}
