import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Alert } from "../../components/Alert";
import citappLogo from "../../assets/img/citapp_logo_1000x1000.png";

export function Register() {
  const { signup } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-fill" src={citappLogo} alt="" />
      </div>

      <div className="bg-neutral-200 flex flex-col justify-center">
      {error && <Alert message={error} />}
        <form 
        onSubmit={handleSubmit}
        className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8">
          <h2 className="text-4xl text-white font-bold text-center">SIGN IN</h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Username</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="email"
              name="email"
              id="email"
              placeholder="email@company.ca"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Password</label>
            <input
              className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
              name="password"
              id="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          
          <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
            REGISTER
          </button> 
          <div className="flex justify-between text-gray-400 py-2">       
              Already have an Account?
              <Link to="/login" className="text-blue-700 hover:text-blue-900">
              Sign In
              </Link>
          </div>
          </form>
          
        </div>
    </div>
  );
}
