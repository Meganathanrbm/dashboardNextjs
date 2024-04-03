"use client";

import React, { useEffect, useState } from "react";

import sigin from "../../../public/assets/icons/sigin.svg";
import logo from "../../../public/assets/icons/logo.svg";
import { FaRegEyeSlash } from "react-icons/fa";
import ForgetPassword from "./ForgetPassword";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Signin = () => {
  const [forgetPassword, setForgetPassword] = useState(false);
  const router = useRouter();

  const [userData, setUserData] = useState({ email: "", password: "" });
  const [isUserNotAuthenticated, setIsUserNotAuthenticated] = useState(false);

  function handleLogin() {
    router.push("/");
  }

  const checkIfUserIsLoggedIn = () => {
    console.log("check if user logged in");
  };

  useEffect(() => {
    // checkIfUserIsLoggedIn();
  }, []);

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="container-fluid min-vh-100 d-flex text-light "
      style={{ padding: "0" }}
    >
      <div className="container-fluid  w-100  min-vh-100  "></div>
      <div
        className="container-fluid  min-vh-100 "
        style={{
          background:
            "linear-gradient(45deg, rgba(235, 124, 73, 1), rgba(240, 79, 82, 1))",
        }}
      ></div>

      {forgetPassword ? (
        <ForgetPassword setForgetPassword={setForgetPassword} />
      ) : (
        <div
          className={`container bg-white position-absolute  top-50 start-50 translate-middle d-flex p-2 rounded min-vh-80 border `}
          style={{
            width: "900px",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,.5)",
          }}
        >
          <div className="container bg-primary w-50 d-flex flex-column justify-content-start align-items-start  p-5 gap-4 rounded">
            <Image src={logo} alt="" srcset="" />
            <div>
              <h1>Welcome Back</h1>
              <p>
                Login and see your performance and keep your learning curve like
                no one.
              </p>
            </div>
            <section className="w-100 d-flex flex-column justify-content-center align-items-center mb-2">
              <Image src={sigin} alt="logo" srcset="" className="w-50 mb-5" />
            </section>
          </div>

          <div className="conatiner w-50 d-flex flex-column justify-content-center align-items-center gap-3 text-black">
            <section className="d-flex flex-column justify-content-center align-items-center">
              <h1>Sign In</h1>
              <p>Let’s open your skill repository.</p>
            </section>

            <section
              className="d-flex flex-column justify-content-center align-items-stretch "
              style={{ width: "75%" }}
            >
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Email"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                />
              </div>
              {/* </Link> */}
              <div className="mb-3  input-group   ">
                <div
                  style={{ padding: "0 0.5rem" }}
                  className="form-control d-flex  justify-content-between  align-items-center "
                >
                  <input
                    type={showPassword ? "text" : "password"}
                    className=""
                    style={{ width: "160px" }}
                    id="formGroupExampleInput2"
                    placeholder="Password"
                    value={userData.password}
                    onChange={(e) =>
                      setUserData({ ...userData, password: e.target.value })
                    }
                  />

                  <button
                    onClick={() => setShowPassword((prev) => !prev)}
                    class="btn "
                    type="button"
                  >
                    <FaRegEyeSlash />
                  </button>
                </div>
              </div>
              {/* <Link to={"/onboarding"}> */}{" "}
              <button
                style={{ width: "100%" }}
                type="button"
                className="btn btn-primary"
                onClick={handleLogin}
              >
                Sign In
              </button>
              {/* </Link> */}
            </section>

            <div className="d-flex justify-content-between gap-5 ">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label className="form-check-label" for="flexCheckChecked">
                  Keep me signed in
                </label>
              </div>
              <label
                className="form-check-label"
                for="flexCheckChecked"
                onClick={(e) => setForgetPassword(true)}
              >
                Forgot Password ?
              </label>
            </div>

            <h6 style={{ fontSize: "12px" }}>
              Don’t have an account?{" "}
              <span style={{ fontWeight: "bold" }}>Contact Administrator</span>
            </h6>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signin;
