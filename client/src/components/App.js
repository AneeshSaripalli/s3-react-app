import axios from "axios";
import React, { useEffect, useState } from "react";
import hooray from "../assets/celebrate.png";

export const App = () => {
  const [text, setText] = useState("");
  useEffect(function () {
    axios
      .get("https://gwsnglh8l8.execute-api.us-east-1.amazonaws.com/dev/hello")
      .then(({ data }) => setText(data));
  }, []);
  return (
    <div className="app">
      <img src={hooray} alt="celebrate" />
      <h1>Welcome to my website from an AWS S3!</h1>
      <h2>{JSON.stringify(text)}</h2>
    </div>
  );
};
