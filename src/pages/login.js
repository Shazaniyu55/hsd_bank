import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';


function Login() {
  const router = useRouter();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function togglePasswordVisibility() {
      setIsPasswordVisible((prevState) => !prevState);
    }

    const handleLogin = (e) => {
      e.preventDefault();
      // Check if email and password match the default credentials
      if (username === 'niyu' && password === 'niyu') {
        // Navigate to dashboard page
        router.push('admin/dashboard');
      } else {
        alert('Invalid email or password');
      }
    };

  return (
    <>
      

      <div className="lg:grid lg:grid-cols-2 p-10 mt-20">
        <div className="mt-20 p-4 m-4">
          <h1 className="text-4xl text-blue-800 font-bold text-center">
            Enter your username and password
          </h1>
          <form className="flex flex-col gap-4 mt-10 p-8" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="username"
              className="w-full px-4 py-2 text-base border-2 border-blue-800 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
              id="username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />

            
           <div className="relative  container ">
      <input
        type={isPasswordVisible ? "text" : "password"}
        placeholder="Password"
        className="w-full px-4 py-2 text-base border-2 border-blue-800 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div
        className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
        onClick={togglePasswordVisibility}
      >
        {isPasswordVisible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#346BF2"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#F6F6F6"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#346BF2 "
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#F6F6F6"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        )}
      </div>
    </div>

    <div className='flex gap-2 '>
        <Link href={'/signup'}>
          <span className='text-blue-700 underline underline-offset-1'>Forgot your password?</span>
        </Link>
      </div>

            <button
            type="submit"
              className="bg-blue-700 hover:bg-blue-700 w-40 text-white font-bold py-2 px-4 rounded"
            >
              Next
            </button>
          </form>
        </div>

        {/* second div */}

        <div className="md:container bg-blue-100 mt-20 p-8">
          <h1 className="text-blue-700 font-bold">Do you need support?</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">

              {/* first grid */}
              
            <div className="text-blue-700">
              <p>Phone</p>
              <p>From abroad</p>
              <p>Mon - Fri</p>
              <p>Sat - Sun</p>
            </div>

            {/* second grid */}
            <div className="text-blue-700">
              <p>0844 840 140</p>
              <p>+41 44 293 95 95</p>
              <p>08:00 - 22:00</p>
              <p>09:00 - 18:00</p>
            </div>

          </div>


          <h1 className="mt-8 text-blue-700 font-bold">Not using our eBanking yet?</h1>
        </div>
      </div>
    </>
  );
}

export default Login;
