import { useState, useEffect, useCallback } from 'react';

export default function useApi(apiEndpoint) {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState();

  const invoke = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await apiEndpoint();

      setData(data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e);
    }
  }, [apiEndpoint]);

  useEffect(() => {
    invoke();
  }, [invoke]);

  return {
    data,
    isLoading,
    error,
    invoke,
  };
}
