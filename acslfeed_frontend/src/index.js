import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { client } from "./client";

// export const CreateOrGetUser = async (response, addUser) => {
//   const decoded = jwt_decode(response.credential);
//   const { name, picture, sub } = decoded;
//   const user = {
//     _id: sub,
//     _type: "user",
//     userName: name,
//     image: picture,
//   };

//   // client.createIfNotExists(user).then(() => {
//   //   Navigate("/", { replace: true });
//   // });

//   console.log(decoded);
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <GoogleOAuthProvider clientId="852837635091-snkvuetdd6d381otk6e2kdaud4ko36g7.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
