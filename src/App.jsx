import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./redux/CounterSlice";
import Navbar from "./components/Navbar";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <>
      <Navbar />
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
}

export default App;
