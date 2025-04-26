import { Heading } from "../components/ui";
import { Timer } from "../components/other";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import { useLocalStorage, usePath } from "../hooks";
import { capitalize } from "../utils";


import {increment} from "../redux/slices/counterSlice";

const Test = () => {

  const { array, path } = usePath();

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [test, setTest] = useLocalStorage("nice");

  return (
    <>
      <Breadcrumbs array={array} path={path} />
      <Heading title='Test' />
      {/* <div className="flex flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
      </div>
      <Timer />
      <p>{capitalize("ssssssss")}</p>
      <p>{count}</p>

      <button onClick={() => dispatch(increment())}>Addddd</button> */}
    </>
  )
};

export default Test;