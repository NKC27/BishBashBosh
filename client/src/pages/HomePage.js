import React from "react";
import MenuBar from "../components/MenuBar";
import Splash from "../components/Splash";
import GetRecipe from "../components/GetRecipe";

const HomePage = () => {
  return (
    <div>
      <MenuBar />
      <Splash />
      <GetRecipe />

    </div>
  );
};

export default HomePage;