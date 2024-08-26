import { LoginSignUpFormWrapper } from '../../../components';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { SignInSchema, SignInSchemaType } from '../../../schema/login.schema';

const Login = () => {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemaType>({ resolver: zodResolver(SignInSchema) });

  const onSubmit: SubmitHandler<SignInSchemaType> = async(data) => {
    const newData = {
      ...data,
      expiresInMins:1
    }
    await login(newData);
  }

  return (
    <LoginSignUpFormWrapper title="Sign in to your account">
      <form onSubmit={handleSubmit(onSubmit)}  className="grid gap-8 login-form">
        <div className="grid gap-6">
          <div>
            <label htmlFor="username" className="text-sm">
              Username
            </label>
            <input
              className="bg-[#f9fafb] text-gray-900 sm:text-sm rounded block w-full px-3 py-2 border !border-gray-200 border-solid"
              type="text"
              placeholder="username"
              {...register("username")}
            />
            {errors.username && <span role='alert'>{errors.username.message}</span>}
          </div>
          <div>
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <input
              className="bg-[#f9fafb] text-gray-900 sm:text-sm rounded block w-full px-3 py-2 border !border-gray-200 border-solid"
              placeholder="password"
              type="password"
              {...register("password")}
            />
            {errors.password && <span role='alert'>{errors.password.message}</span>}
          </div>
      
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4  border border-gray-700 opacity-60  bg-gray-50 checked:opacity-100"
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="remember"
                  className="text-primary-500 dark:text-primary-600"
                >
                  Remember me
                </label>
              </div>
            </div>
            <Link
              to="/forgot-password"
              className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Forgot password?
            </Link>
          </div>

        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800"
        >
          Sign In
        </button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet?{' '}
          <Link
            to="/register"
            className="font-medium text-blue-600 hover:underline dark:text-primary-500"
          >
            Sign up
          </Link>
        </p>

      </form>
    </LoginSignUpFormWrapper>
  );
};

export default Login;

