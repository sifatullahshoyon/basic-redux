import { decrement, increment } from "./redux/features/counter/counterSlice";
import { RootState } from "./redux/store";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import Navbar from "./components/layout/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  // const dispatch = useDispatch();
  const dispatch = useAppDispatch();

  // const { count } = useSelector((state: RootState) => state.counter);
  const { count } = useAppSelector((state: RootState) => state.counter);

  // console.log(counter);

  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <>
      {/* <h1>Counter With Redux</h1>
      <div className="flex gap-5">
        <Button onClick={() => handleIncrement(1)}>Increment</Button>
        <Button onClick={() => handleIncrement(5)}>Increment by 5</Button>
        <Button>{count}</Button>
        <Button onClick={handleDecrement}>Decrement</Button>
      </div> */}
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
