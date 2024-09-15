import { useState } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import ChatLogo from "../../assets/chatImage.jpg";
import { useForm } from "react-hook-form";

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoginPage, setIsLoginPage] = useState<boolean>(false);

  return (
    <div className="flex justify-center w-full h-full items-center ">
      <div className="flex justify-between items-center">
        <div className=" flex justify-between gap-5 items-center shadow-2xl rounded-md h-[70vh] w-[65vw] md:mt-12">
          <form
            onSubmit={handleSubmit((data) => console.log(data))}
            className="w-1/2"
          >
            <h1 className="font-bold text-4xl text-center font-sans mb-2">
              Welcome
            </h1>
            <div className="px-10">
              <h2 className="text-sm p-2 text-start text-textLight font-sans mb-6">
                Bringing you closer with real-time chat, file sharing, and group
                conversations in one place
              </h2>
              <div className="mb-4">
                <Input
                  type="text"
                  className="rounded-full p-5 mb-1"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                <p className="text-xs text-errorColor text-left m-0 px-4">
                  {" "}
                  {errors.email && <p>Please enter valid Email address</p>}
                </p>
              </div>
              <div className="mb-10">
                <Input
                  type="password"
                  className="rounded-full p-5 mb-1"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                <p className="text-xs text-left text-errorColor m-0 px-4">
                  {" "}
                  {errors.password && <p>Please enter valid password</p>}
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-brandColor hover:bg-hoverBrandColor text-white mb-4 rounded-xl"
              >
                Login
              </Button>
              <p className="text-sm text-textLight font-semibold">
                Don't have an account ?{" "}
                <span className="underline text-blue-500">Register</span> here
              </p>
            </div>
          </form>
          <div className="w-1/2">
            <img
              src={ChatLogo}
              alt="login image"
              className="w-[28rem] h-[25rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
