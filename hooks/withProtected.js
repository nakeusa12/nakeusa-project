import { useUser } from "context/user";
import { useRouter } from "next/router";

// Higher Order Component
const withProtected = (Pages) => {
  return (props) => {
    const router = useRouter();
    const user = useUser();
    const { uid } = user;

    console.log({ uid });


    if (!uid) {
      router.replace("/login");
      return <></>;
    }

    return <Pages {...props} />;
  };
};

export default withProtected;
