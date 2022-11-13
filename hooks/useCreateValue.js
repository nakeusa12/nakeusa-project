import { database } from "config/firebase";
import { push, set, ref, child } from "firebase/database";
import { useRef, useState } from "react";
import useKey from "./useKey";

// push = menambah data baru
// set = replace data, menghapus yg sudah ada lalu diganti dengan yg baru

const useCreateValue = () => {
  const [isLoading, setIsLoading] = useState(false);
  const data = useRef(null);
  const error = useRef(null);
  const success = useRef(null);
  const key = useKey()

  const pushValue = async (path, value) => {
    setIsLoading(true);
    try {
      const rootReference = ref(database);
      const dbPath = child(rootReference, path);
      const dbPush = await push(dbPath, value);
      data.current = { key: dbPush.key, value}
      success.current = true;
      window.location.reload(false)
    } catch (pushError) {
      error.current = pushError.message;
    }
    setIsLoading(false);
  };

  const setValueWithKey = async (path, value) => {
    setIsLoading(true);
    try {
      const rootReference = ref(database);
      const dbKey = key.generate(path)
      const dbPath = child(rootReference, `${path}/${dbKey}`);
      await set(dbPath, value);
      success.current = true;
    } catch (pushError) {
      error.current = pushError.message;
    }
    setIsLoading(false);
  };

  return {
    isLoading,
    data: data.current,
    error: error.current,
    success: success.current,
    pushValue,
    setValueWithKey,
  };
};

export default useCreateValue;
