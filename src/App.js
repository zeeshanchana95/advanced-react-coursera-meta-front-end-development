import { useState } from "react";
import "./App.css";


export default function App() {

  const [restaurantName, setRestaurantName] = useState("Little");
  
  function updateRestaurantName(){
    setRestaurantName("Little Lemon")
  };

  return (
    <div className="App">
      <h1>{restaurantName}</h1>
      <button onClick={updateRestaurantName}>
        Update Restaurant Name
      </button>
    </div>
  );
}
