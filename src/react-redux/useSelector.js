/**
 *  接收filter函数，返回过滤后的state
 */
import { useContext } from "react";
import ReactReduxContext from "./ReactReduxContext";

export default function useSelector(filter) {
  const { store } = useContext(ReactReduxContext);
  return filter(store.getState());
}
