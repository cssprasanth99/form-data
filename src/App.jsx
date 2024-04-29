import { useReducer, useState } from "react";
import "./App.css";

const formReducer = (state, action) => {
  switch (action.type) {
    case "NAME":
      return { ...state, name: action.payload };
    case "AGE":
      return { ...state, age: action.payload };
    case "RESET":
      return { name: "", age: "" };
    default:
      throw Error("Dont Know");
  }
};

function App() {
  const [data, dispatch] = useReducer(formReducer, {
    name: "",
    age: "",
  });

  const [flag, setFlag] = useState(false);

  function handleSubmit() {
    setFlag(true);
  }

  return (
    <div>
      <label>Name</label>
      <input
        type="text"
        value={data.name}
        onChange={(e) => dispatch({ type: "NAME", payload: e.target.value })}
      />
      <label>Age</label>
      <input
        type="text"
        value={data.age}
        onChange={(e) => dispatch({ type: "AGE", payload: e.target.value })}
      />
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <button onClick={handleSubmit}>Submit</button>

      {flag ? (
        <div>
          <h1>Name:{data.name}</h1>
          <h2>Age:{data.age}</h2>
        </div>
      ) : (
        <div>Details not found </div>
      )}
    </div>
  );
}

export default App;
