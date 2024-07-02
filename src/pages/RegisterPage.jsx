import { Field, Input } from "@headlessui/react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto">
          <Field>
            <Input
              className="w-full border my-1 py-2 px-3 rounded-2xl"
              type="text"
              placeholder="Full Name"
            />
            <Input
              className="w-full border my-1 py-2 px-3 rounded-2xl"
              type="email"
              placeholder="your@email.com"
            />

            <Input
              className="w-full border my-1 py-2 px-3 rounded-2xl"
              type="password"
              placeholder="password"
            />
            <button className="primary">Login</button>

            <div className="py-2 text-center text-gray-500">
              Already have an account?{" "}
              <Link className="underline text-primary" to={"/login"}>
                Login now
              </Link>
            </div>
          </Field>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
