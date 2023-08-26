import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import StarRating from "./StarRating";

//we are making this component to test external state as defined below to get selected rating
// function Test() {
//   const [movieRating, setmovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating maxRating={6} color="blue" onsetRating={setmovieRating} />
//       <p>You have rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["terrible", "not good", "okay", "good", "amazing"]}
      defaultRating={4}
    />
    <StarRating maxRating={5} color="red" />
    <Test /> */}
  </React.StrictMode>
);
