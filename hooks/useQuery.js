import { database } from "config/firebase";
import { get, ref, orderByKey, query, orderByValue } from "firebase/database";
import { useCallback, useEffect, useRef, useState } from "react";

const getOrder = (type) => {
  switch (type) {
    case "value":
      return orderByValue();
    case "key":
    default:
      return orderByKey();
  }
};

const useQuery = ({ path, initialLoad = true, type = "key", queries = [] }) => {
  const [isLoading, setIsLoading] = useState(initialLoad);
  const snapshot = useRef(null);
  const error = useRef(null);
  const empty = useRef(false);

  const queryValue = useCallback(async () => {
    try {
      const dbRef = ref(database, path);
      const dbQuery = query(dbRef, getOrder(type), ...queries); //dbref = default, queries= filter dari client
      const dbGet = await get(dbQuery);
      const dbValue = dbGet.val();
      const dbExist = dbGet.exists(); // .exists = boolean

      if (!dbExist) {
        isEmpty.current = true;
      }

      snapshot.current = dbValue;
    } catch (getError) {
      error.current = getError.message;
    }
    setIsLoading(false);
  }, [path, queries]);

  const queryLater = async (path, value) => {
    snapshot.current = null;
    error.current = null;
    empty.current = false;
    setIsLoading(true);
  };

  useEffect(() => {
    if (isLoading) {
      queryValue();
    }
  }, [isLoading, queryValue]);

  return {
    isLoading,
    snapshot: snapshot.current,
    error: error.current,
    empty: empty.current,
    queryLater,
  };
};

export default useQuery;
