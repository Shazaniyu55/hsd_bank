import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import NavBar from "@/components/navbar";
import Footer from "@/components/dashboard/footers/footer";


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
    <NavBar imageSrc="/bank.png"/>
    <div className="md:flex justify-center items-center mt-20"  style={{
                backgroundImage: 'url(/woman.jpg)', // Replace with your image path
                backgroundSize: 'cover', // This makes the image cover the entire div
                backgroundPosition: 'center', // Center the image
                backgroundRepeat: 'no-repeat',
                 // Prevents the image from repeating
              }}>
      <div className="md:mt-20 p-4 m-4  bg-white" >

        <p className="text-2xl font-regular">Log On</p>
        
        <form className="md:flex flex-col gap-4 mt-10 p-8" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="username"
            className="md:w-full px-4 py-2 text-base border-2 border-blue-800 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
            id="username"
            value={username} onChange={(e) => setUserName(e.target.value)} 
          />



          
         <div className="relative  container ">
   

     <input
      type={isPasswordVisible ? "text" : "password"}
      placeholder="Password"
      className="md:w-full px-4 py-2 text-base border-2 border-blue-800 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
      value={password} onChange={(e) => setPassword(e.target.value)} 
    />

    <div
      className="absolute inset-y-0 right-8 flex items-center px-4 text-gray-600"
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
            className="bg-red-700 hover:bg-blue-700 w-40 text-white font-bold py-2 px-4 rounded"
          >
            Next
          </button>
        </form>
      </div>

      {/* second div */}

  
    </div>

    <Footer/>
  </>
  );
}

export default Login;
