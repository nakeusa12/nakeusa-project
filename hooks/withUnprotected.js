import { useUser } from "context/user";
import { useRouter } from "next/router";

// Higher Order Component
const withUnprotected = (Pages) => {
  return (props) => {
    const router = useRouter();
    const user = useUser();
    const { uid } = user;

    console.log({ uid });


    if (uid) {
      router.replace("/dashboard");
      return <></>;
    }

    return <Pages {...props} />;
  };
};

export default withUnprotected;
