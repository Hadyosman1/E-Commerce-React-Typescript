import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { getCategories } from "@store/categoriesSlice/categoriesSlice";
import { useEffect } from "react";

const useCategories = () => {
  const { records, loading, error } = useAppSelector(
    (state) => state.categories
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const promise = !records.length ? dispatch(getCategories()) : null;

    return () => {
      promise?.abort?.();
    };
  }, [dispatch, records.length]);

  return { loading, error, records };
};

export default useCategories;
