import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  POSTS_SET_LOADING,
  POSTS_HAS_ERROR,
  POSTS_SET_DATA,
} from '../modules/';

export default function useApi(apiEndpoint) {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState();

  const dispatch = useDispatch();

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
