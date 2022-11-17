import { getDatabase, ref, get, child } from "firebase/database";
import firebaseApp from "config/firebase";
import { useEffect, useRef, useState } from "react";

const useGetValue = (path) => {
  const [isLoading, setIsLoading] = useState(true);
  const snapshot = useRef(null);
  const error = useRef(null);
  const isEmpty = useRef(null);

  const getValue = async () => {
    try {
      const database = getDatabase(firebaseApp);
      const rootReference = ref(database); //rootReference setara route "/"
      const dbGet = await get(child(rootReference, path));
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
  };

  // const getValueLater = () => setIsLoading(true);

  useEffect(() => {
    // if (isLoading) {
      getValue();
    // }
  }, []);

  return {
    isLoading,
    // getValueLater,
    snapshot: snapshot.current,
    error: error.current,
    isEmpty: isEmpty.current,
  };
};

export default useGetValue;
