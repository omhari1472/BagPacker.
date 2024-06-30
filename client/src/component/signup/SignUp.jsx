import React, { useState } from "react";
export default function SignUp() {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setData({ ...data, [name]: value });
  };

  return (
    <div>
      <div className="parentContainer flex flex-row w-full h-screen">
        <div className="LeftContainer flex flex-col justify-center items-center w-2/5">
          <h1 className="text-2xl font-bold py-4">Create an Account</h1>
          <form className="flex flex-col items-start w-4/5">
            <label style={{ margin: "0.5rem" }}>First Name</label>
            <input
              className="border-2 h-8 rounded-md w-full px-4 py-2 focus:outline-none border-custom-primary hover:bg-gray-100 hover:border-custom-secondary hover:border-3 "
              type="text"
              name="fname"
              id="fname"
              value={data.fname}
              onChange={handleInputs}
              placeholder="Enter your first name"
            />
            <br />
            <label style={{ margin: "0.5rem" }}>Last Name</label>
            <input
              className="border-2 h-8 rounded-md w-full px-4 py-2 focus:outline-none border-custom-primary hover:bg-gray-100 hover:border-custom-secondary hover:border-3 "
              type="text"
              name="lname"
              id="lname"
              value={data.lname}
              onChange={handleInputs}
              placeholder="Enter your last name"
            />
            <br />
            <label style={{ margin: "0.5rem" }}>Email address</label>
            <input
              className="border-2 h-8 rounded-md w-full px-4 py-2 focus:outline-none border-custom-primary hover:bg-gray-100 hover:border-custom-secondary hover:border-3 "
              type="email"
              name="email"
              id="email"
              value={data.email}
              onChange={handleInputs}
              placeholder="Enter your email"
            />
            <br />
            <label style={{ margin: "0.5rem" }}>Password</label>
            <input
              className="border-2 h-8 rounded-md w-full px-4 py-2 focus:outline-none border-custom-primary hover:bg-gray-100 hover:border-custom-secondary hover:border-3 "
              type="password"
              name="password"
              id="password"
              value={data.password}
              onChange={handleInputs}
              placeholder="Enter your password"
            />
            <br />
            <label style={{ margin: "0.5rem" }}>Confirm Password:</label>
            <input
              className="border-2 h-8 rounded-md w-full px-4 py-2 focus:outline-none border-custom-primary hover:bg-gray-100 hover:border-custom-secondary hover:border-3 "
              type="password"
              name="cpassword"
              id="cpassword"
              value={data.cpassword}
              onChange={handleInputs}
              placeholder="Confirm your password"
            />
            <br />
            <button
              className="m-auto w-full bg-primary px-4 py-2 border-2 border-primary rounded-xl hover:bg-transparent hover:border-custom-primary hover:border-3 "
              type="submit"
              onClick={(e) => {
                e.preventDefault(); // Prevent the form from submitting
                console.log(data); // Log the setData to the console
              }}
            >
              <p className="text-custom-primary font-bold">Register</p>
            </button>
          </form>
        </div>
        <div className="RightContainer w-3/5 bg-primary h-screen overflow-hidden">
          <img
            src="./images/backtrans.png"
            alt="login"
            className="w-full flex-1 justify-center h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
