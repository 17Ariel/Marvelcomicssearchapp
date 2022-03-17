import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setdata] = useState([]);
  const [isPending, setPending] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const api = await fetch(url);
      const res = await api.json();
      setdata(res.data.results);
      setPending(false);
    }
    fetchData();
  }, [url]);
  return { data, isPending, setdata, setPending };
};

export default useFetch;
