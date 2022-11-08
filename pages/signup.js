import FormError from "@components/molecules/Forms/Error";
import Layout from "@components/molecules/Layout";
import withUnprotected from "@hooks/withUnprotected";
import { SignUp as SignUpToFirebase, getSignUpErrorMessage } from "config/firebase";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";


const SignUp = () => {
  const description =
    "Hey Everyone! I'm Saiful Nakeusa and I’m from Indonesia.I have been working as an Web Designer and Frontend Web Developer with more than 2 years of experience and still learning and exploring.";

  const [isLoading, setIsLoading] = useState(false);
  // const [alertMessage, setAlertMessage] = useState({ open: false, message: ''});
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = useRef({});
  password.current = watch("password");

  const onSubmit = async (data) => {
    setIsLoading(true);
    const { email, password } = data;

    try {
      await SignUpToFirebase(email, password);
    } catch (error) {
      const message = getSignUpErrorMessage(error.code);
      console.log(message);
    //   alert(message);
      setIsLoading(false);
    }
  };

  return (
    <Layout titlePage="Home" metaDescription={description}>
      <section className="h-screen">
        <div className="px-6 h-full text-white  ">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">Sign Up</p>
                </div>

                <div className="mb-6">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                    {...register("email", { required: true })}
                  />
                  <FormError error={errors.email} />
                </div>

                <div className="mb-6">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                    {...register("password", { required: true, minLength: 8 })}
                  />
                  <FormError error={errors.password} />
                </div>

                <div className="mb-6">
                  <input
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Konfirmasi Password"
                    {...register("confirmPassword", {
                      required: true,
                      validate: (value) => value === password.current,
                    })}
                  />
                  <FormError error={errors.confirmPassword} />
                </div>

                <div className="text-center lg:text-left">
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="inline-block px-7 py-3 disabled:bg-gray-500 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    {isLoading ? <span>Loading...</span> : <span>SignUp</span>}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default withUnprotected(SignUp);
