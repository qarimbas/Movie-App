import React from "react";
import classes from "./MyComponent.module.css";

function MyComponent() {
  return (
    <div className={classes.mycomponent}>
      <h2>myComponent</h2>
      <br />
      <p class="text-gray-500 font-medium"> TailwindCSS inside component </p>
      <button className="bg-red-500 hover:bg-red-700 ...">Hover me</button>
    </div>
  );
}

export default MyComponent;
