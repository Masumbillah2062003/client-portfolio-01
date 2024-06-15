import { Card, Input, Checkbox, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import AuthenticationVideo from "../../Component/AuthenticationVideo";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const Login = () => {
  const { logInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    logInUser(data.email, data.password)
      .then((userCredential) => {
        if (userCredential) {
          alert("your sign up successfull");
          navigate("/");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div className="flex justify-center items-center h-auto relative">
      <div className="">
        <AuthenticationVideo></AuthenticationVideo>
      </div>
      <div className="absolute border-white flex justify-center items-center h-auto p-5 border-2 rounded-md backdrop-blur-lg">
        <Card
          color="transparent"
          shadow={false}
          className="bg-[#ffffff4e] py-5 px-10"
        >
          <Typography variant="h2" color="white" className="text-center">
            Sign In
          </Typography>
          <Typography color="white" className="mt-1 font-normal text-center">
            Welcome to My website! Please login...
          </Typography>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="white" className="-mb-3">
                Your Email
              </Typography>
              <div className="relative">
                <Input
                  label="Email"
                  color="white"
                  type="email"
                  {...register("email", { required: true })}
                />{" "}
                {errors.email && (
                  <span className="text-yellow-700 absolute">
                    This field is required
                  </span>
                )}
              </div>
              <Typography variant="h6" color="white" className="-mb-3">
                Password
              </Typography>
              <div className="relative">
                <Input
                  label="Password"
                  color="white"
                  type="password"
                  {...register("password", { required: true })}
                />{" "}
                {errors.password && (
                  <span className="text-yellow-700 absolute">
                    This field is required
                  </span>
                )}
              </div>
            </div>
            <div className="mt-7">
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="white"
                    className="flex items-center font-normal"
                  >
                    I agree the
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-white-900"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
            </div>
            <button className="mt-4 w-full bg-pink-600 rounded-lg text-white py-2 font-bold text-xl border-2 border-white">
              Sign In
            </button>
            <Typography color="white" className="mt-4 text-center font-normal">
              <p className="text-sm">
                New member?{" "}
                <Link to="/signup" className="text-blue-700 underline">
                  Register
                </Link>{" "}
                here
              </p>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
