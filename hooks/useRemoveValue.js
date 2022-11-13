import { database } from "config/firebase";
import { remove, ref, child } from "firebase/database";
import { useRef, useState } from "react";

// push = menambah data baru
// set = replace data, menghapus yg sudah ada lalu diganti dengan yg baru

const useRemoveValue = (path) => {
  const [isLoading, setIsLoading] = useState(false);
  const error = useRef(null);
  const success = useRef(null);

  const withRemove = async () => {
    setIsLoading(true);
    try {
      const rootReference = ref(database);
      const dbPath = child(rootReference, path);
      await remove(dbPath);
      success.current = true;
    } catch (pushError) {
      error.current = pushError.message;
    }
    setIsLoading(false);
  };

  return {
    isLoading,
    error: error.current,
    success: success.current,
    withRemove, 
  };
};

export default useRemoveValue;
