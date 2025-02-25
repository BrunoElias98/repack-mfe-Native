import { useState, useEffect } from 'react';

const useQuery = (query: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate a query
    setTimeout(() => {
      // @ts-ignore
      setData({ result: `Result for query: ${query}` });
    }, 1000);
  }, [query]);

  return data;
};

export default useQuery;
