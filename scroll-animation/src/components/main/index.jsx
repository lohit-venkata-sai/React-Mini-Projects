import React, { useEffect, useState } from "react";

const Main = ({ url = "https://dummyjson.com/quotes/?limit=100" }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const info = await response.json();
      console.log(info);
      setData(info);
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const fun1 = async () => {
      await fetchData();
    };
    fun1();
  }, []);
  return (
    <div className="flex flex-col gap-2 items-center">
      {loading && <span>loading pls wait </span>}
      {error && error.length > 0 && <span>{error}</span>}
      {data && data?.quotes && data.quotes?.length > 0
        ? data.quotes.map((item, ind) => (
            <span key={item.id}>{item.quote}</span>
          ))
        : null}
    </div>
  );
};

export default Main;
