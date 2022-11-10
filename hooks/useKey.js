import { database } from "config/firebase";
import { child, push, ref } from "firebase/database";

const useKey = () => {
  const generate = (path) => {
    const rootReference = ref(database);
    const dbRef = child(rootReference, path);
    const dbKey = push(dbRef).key;
    return dbKey;
  };
  return { generate };
};

export default useKey;
