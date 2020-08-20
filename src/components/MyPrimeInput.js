import React from "react";

function MyPrimeInput(props) {
   return (
      <form>
         <label>My Prime</label>
         <input type="text"></input>
         <button type="submit" onSubmit={props.onSubmit}>
            Submit
         </button>
      </form>
   );
}

export default MyPrimeInput;
