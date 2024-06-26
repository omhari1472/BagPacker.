import React from "react";

export default function LogIn() {
  return (
    <div>
      <div className="parentContainer flex flex-row h-screen w-full">
        <div className="LeftContainer w-1/2 bg-primary">
          <img
            src="./images/login.png"
            alt="login"
            className="w-full h-full object-fit justify-center"
          ></img>
        </div>
        <div className="RightContainer flex flex-col justify-center items-center w-1/2 h-screen">
            <h1 className="text-2xl font-bold py-4">Login account</h1>
          <form className="flex flex-col items-start w-2/3">
            
            <label style={{margin:'0.5rem'}} >Email address</label>
            <input
              className="border-2 h-8 rounded-md w-full px-4 py-2 focus:outline-none border-custom-primary hover:bg-gray-100 hover:border-custom-secondary hover:border-3 "
              type="text"
              placeholder="Enter your email"
            />
            <br />
            <label style={{margin:'0.5rem'}} >Password</label>
            <input
              className="border-2 h-8 rounded-md w-full px-4 py-2 focus:outline-none border-custom-primary hover:bg-gray-100 hover:border-custom-secondary hover:border-3 "
              type="password"
              placeholder="Enter your password"
            />
            <br />
            <button
              className="m-auto w-full rounded-xl bg-primary px-4 py-2 rounded hover:bg-transparent hover:border-custom-secondary hover:border-3"
              type="submit"
            >
              LogIn
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
