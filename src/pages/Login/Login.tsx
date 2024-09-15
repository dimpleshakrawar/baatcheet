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
            <h1 className="font-bold text-4xl text-center font-sans">
              Welcome
            </h1>
            <div className="p-10">
              <h2 className="font-medium text-sm p-2 text-start text-textLight font-sans mb-6">
                Bringing you closer with real-time chat, file sharing, and group
                conversations in one place
              </h2>
              <Input
                type="text"
                className="rounded-full mb-4 p-5"
                placeholder="Email"
                {...(register("email"), { required: true })}
              />
              {errors.email && <p>Please enter valid Email address</p>}
              <Input
                type="password"
                className="mb-10 rounded-full p-5"
                placeholder="Password"
                {...(register("password"), { required: true })}
              />
              {errors.password && <p>Please enter valid password</p>}

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
