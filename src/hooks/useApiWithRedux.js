import { useMemo, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

export default function useApiWithRedux(type, apiEndpoint) {
  const dispatch = useDispatch();

  const actions = useMemo(
    () => ({
      LOADING: `${type}_LOADING`,
      SUCCESS: `${type}_SUCCESS`,
      FAILURE: `${type}_FAILURE`,
    }),
    [type]
  );

  const invoke = useCallback(async () => {
    dispatch({ type: actions.LOADING });
    try {
      const { data } = await apiEndpoint();
      dispatch({ type: actions.SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: actions.FAILURE, error });
    }
  }, [dispatch, apiEndpoint, actions]);

  useEffect(() => {
    invoke();
  }, [invoke]);

  return {
    invoke,
  };
}
