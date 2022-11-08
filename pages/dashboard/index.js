import Layout from "@components/molecules/Layout";
import withProtected from "@hooks/withProtected";
import { SignOut } from "config/firebase";
import { useUser } from "context/user";

const Dashboard = () => {
  const user = useUser();
  const { email, uid } = user;

  return (
    <Layout>
      <div className="w-full text-right p-10">
        <button className="border border-black py-2 px-4" onClick={SignOut}>
          Sign Out
        </button>
      </div>
      <div className="p-10">
        <p>Email: {email}</p> <br /> <p>UID: {uid}</p>
      </div>
    </Layout>
  );
};

export default withProtected(Dashboard);
