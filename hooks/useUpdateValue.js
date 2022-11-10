import { database } from "config/firebase";
import { update, ref, child } from "firebase/database";
import { useRef, useState } from "react";

// push = menambah data baru
// set = replace data, menghapus yg sudah ada lalu diganti dengan yg baru

const useUpdateValue = () => {
  const [isLoading, setIsLoading] = useState(false);
  const error = useRef(null);
  const success = useRef(null);

  const updateDoc = async (path, value) => {
    setIsLoading(true);
    try {
      const rootReference = ref(database);
      const dbPath = child(rootReference, path);
      await update(dbPath, value);
      success.current = true;
    } catch (pushError) {
      error.current = pushError.message;
    }
    setIsLoading(false);
  };

  const updateField = async (updates) => {
    setIsLoading(true);
    try {
      const rootReference = ref(database);
      await update(rootReference, updates);
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
    updateDoc,
    updateField    
  };
};

export default useUpdateValue;
