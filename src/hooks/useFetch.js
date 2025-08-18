import { useEffect, useState } from "react";

export function useFetch(url) {
  const [isLoading, setLoaded] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  async function fetchData() {
    fetch(url)
      .then((res) => {
        if (res && res.ok) {
          return res.json();
        }
      })
      .then((data) => setData(data))
      .then(() => setLoaded(false))
      .catch((err) => (setError(true), setLoaded(true)));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = async (params) => {
    const { _limit } = params.params;
    for (let attempt = 0; attempt < _limit; attempt++) {
      try {
        const result = await fetchData();
        return result;
      } catch (error) {
        console.log(error);
      }
    }
  };

  return { isLoading, data, error, refetch };
}
