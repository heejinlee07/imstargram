import { useState, useEffect, useCallback } from 'react';

export default function useApi(apiEndpoint) {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState();
  const [headers, setHeaders] = useState();

  const invoke = useCallback(async () => {
    setLoading(true);
    try {
      const { data, headers } = await apiEndpoint();

      setData(data);
      setHeaders(headers);
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
    headers,
    isLoading,
    error,
    invoke,
  };
}
