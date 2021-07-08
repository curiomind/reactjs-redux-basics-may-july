import React from "react";
import { styles } from "./styles";
import ChildOne from "./ChildOne";
import ChildClass from "./ChildClass";
import HOC from "./hoc";

//  const styles = {
//    color: "white",
//    fontSize: "18px",
//    backgroundColor: "blue",
//  };

function App() {
  //   return <p style={{
  //   color: "white",
  //   fontSize: "18px",
  //   backgroundColor: "blue",
  // }}>Harman</p>;
  const newComp = HOC(<ChildClass />);
  return (
    <React.Fragment>
      {newComp}
      {/* <p style={styles}>Harman</p>
      <ChildOne />
      <button className="btn btn-primary">Click Me</button> */}
    </React.Fragment>
  );
}

export default App;
