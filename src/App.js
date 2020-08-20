import React from "react";
import SinglePrimeCheck from "./components/SinglePrimeCheck";
import DisplayPrimes from "./components/DisplayPrimes";
import PrimeFrequency from "./components/PrimeFrequency";
import PrimeLoneliness from "./components/PrimeLoneliness";
import MyPrimeInput from "./components/MyPrimeInput";
// import { Switch, Route } from "react-router-dom";

function App() {
   const onSubmit = () => {
      console.log("I'm submitting");
   };

   return (
      <div className="App">
         <header className="App-header">
            <h1>Prime Number Mayhem</h1>
         </header>
         <main>
            <MyPrimeInput onSubmit={onSubmit} />
            <SinglePrimeCheck />
            <DisplayPrimes />
            <PrimeFrequency />
            <PrimeLoneliness />
         </main>
      </div>
   );
}

export default App;
