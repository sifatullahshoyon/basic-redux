import { decrement, increment } from "./redux/features/counter/counterSlice";
import { RootState } from "./redux/store";
import { useAppDispatch, useAppSelector } from "./redux/hook";

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
      <h1>Counter With Redux</h1>
      <div>
        <button onClick={() => handleIncrement(1)}>Increment</button>
        <button onClick={() => handleIncrement(5)}>Increment by 5</button>
        <button>{count}</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </>
  );
}

export default App;
