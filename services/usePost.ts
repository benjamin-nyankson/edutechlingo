import { useCallback, useState } from "react";

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

const usePost = <T, U>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const postData = useCallback(
    async (payload: U) => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`${BASE_URL}${endpoint}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error(
            `Failed to fetch data: ${response.status} ${response.statusText}`
          );
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("An error occurred"));
      } finally {
        setLoading(false);
      }
    },
    [endpoint]
  );

  return { data, loading, error, postData, setData };
};

export default usePost;
