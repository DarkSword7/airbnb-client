import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function registerUser(e) {
    e.preventDefault();
    axios.get("/");
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border my-1 py-2 px-3 rounded-2xl"
            type="text"
            placeholder="Full Name"
          />
          <input
            value={email}
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
          <button className="primary">Register</button>

          <div className="py-2 text-center text-gray-500">
            Already have an account?{" "}
            <Link className="underline text-primary" to={"/login"}>
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
