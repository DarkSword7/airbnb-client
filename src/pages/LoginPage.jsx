import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { UserContext } from "../UserContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(null);
  const { setUser } = useContext(UserContext);

  async function loginUser(e) {
    e.preventDefault();

    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      setUser(data);
      setRedirect("/");
      toast.success("Logged in successfully");
    } catch (error) {
      toast.error("Failed to login, try again later");
    }
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={loginUser}>
          <input
            value={email}
            autoComplete="on"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border my-1 py-2 px-3 rounded-2xl"
            type="email"
            placeholder="your@email.com"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border my-1 py-2 px-3 rounded-2xl"
            type="password"
            placeholder="password"
          />
          <button className="primary">Login</button>

          <div className="py-2 text-center text-gray-500">
            Don&apos;t have an account?{" "}
            <Link className="underline text-primary" to={"/register"}>
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
