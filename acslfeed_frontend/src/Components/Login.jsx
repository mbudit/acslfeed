import { GoogleLogin, googleLogout } from "@react-oauth/google";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import { CreateOrGetUser } from "..";
import { useNavigate } from "react-router-dom";
import { client } from "../client";
import jwt_decode from "jwt-decode";

const Login = () => {
  const Navigate = useNavigate();
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" alt="logo" />
          </div>
          <div className="shadow-2xl">
            <GoogleLogin
              render={(renderProps) => (
                <button
                  type="button"
                  className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className="mr-4" />
                  Sign in with Google
                </button>
              )}
              onSuccess={(response) => {
                const decoded = jwt_decode(response.credential);
                const { name, picture, sub } = decoded;
                const user = {
                  _id: sub,
                  _type: "user",
                  userName: name,
                  image: picture,
                };
                client.createIfNotExists(user).then(() => {
                  Navigate("/", { replace: true });
                });
                console.log(decoded);
              }}
              onFailure={() => console.log("Error")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;