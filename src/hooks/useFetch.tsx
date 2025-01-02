import { CardsProps } from "@/components/Card";
import { useEffect, useState } from "react";

type Response = {
  data: CardsProps[];
  error: string | undefined;
  loading: boolean;
};
export const useFetch = (url: string): Response => {
  const [data, setData] = useState<CardsProps[]>([]);
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  const getAPIData = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch(url);
      const json = await apiResponse.json();
      setData(json);
    } catch (error) {
      setError(error as string);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return { data, error, loading };
};
