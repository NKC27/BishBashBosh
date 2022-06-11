import React from "react";
import "./Splash.scss";

function Splash() {
  return (
    <div className="splash">
      <img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt=""
      />
      <div className="info">
        <span className="desc">
          Bish that bashin' bosher and make some food!
        </span>
      </div>
    </div>
  );
}

export default Splash;