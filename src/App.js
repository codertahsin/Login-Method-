import React from "react";
import { SignInWIthGoogle } from "./utils/firebase"
import Input from "./components/input";
import { FcGoogle } from 'react-icons/fc';

function App() {
  return ( 
    <div className="w-full h-screen flex items-center justify-center m-auto bg-gray-400">
      <div className="max-w-md w-full m-auto mt-5 p-5 bg-slate-900 border rounded">
        <h2 className="text-white text-xl text-left">Login</h2>
        <form className="pt-5">
          <h3 className="text-center font-bold text-white">Email</h3>
          <Input
            name="email"
            type="email"
          />
          <h3 className="text-center font-bold text-white">Password</h3>
          <Input
            name="password"
            type="password"
          />
          <button
            type="submit"
            className="bg-blue-500 px-4 py-2 rounded-full text-white w-[100%] hover:bg-blue-600 active:bg-blue-700"
            >
            Submit
          </button><br /><br />
          <h4 className="text-left text-gray-400">or sign with</h4>
          </form>
          {/* Social Icons */}
          <div className="mt-5">
            <button
        type="button"
        className="group flex items-center justify-center w-full p-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 bg-opacity-10 hover:bg-opacity-20"
        onClick={SignInWIthGoogle}
        >
          <FcGoogle size={30}/> 
          <span className="ml-3 text-indigo-700 font-semibold">Continue With Google</span> 
            </button>
          </div>
        <div className="mt-5">
          <img src={localStorage.getItem('profilePic')}/>
          <h2 className="text-center text-white font-thin text-xl">{localStorage.getItem('name')}</h2>
          <h2 className="text-center text-white font-thin text-xl">{localStorage.getItem('email')}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
