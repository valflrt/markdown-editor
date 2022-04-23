import React from "react";
import { Link } from "react-router-dom";

const Main = () => (
  <>
    <h1>Heya !</h1>
    <p>This is a test markdown editor</p>
    <Link to={"/editor"}>Go to the editor</Link>
  </>
);

export default Main;
