/**
 *  接收store，渲染children
 */
import { useState, useEffect } from "react";
import ReactReduxContext from "./ReactReduxContext";

export default function Provider({ store, children }) {
  const [storeContext, setStoreContext] = useState(store);

  // 监听store，store更新时，触发组件render
  useEffect(() => {
    const unSubscribe = store.subscribe(() => {
      setStoreContext({ ...store });
    });
    return () => unSubscribe();
  }, []);

  return (
    <ReactReduxContext.Provider value={{ store: storeContext }}>
      {children}
    </ReactReduxContext.Provider>
  );
}
