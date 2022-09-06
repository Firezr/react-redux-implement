import React from "react";
// import { useSelector, useDispatch, connect } from "react-redux";
import { useSelector, useDispatch, connect } from "../react-redux";
import { decrement, increment } from "../store";

function Counter(props) {
  // const count = useSelector((state) => state.value);
  // const dispatch = useDispatch();

  const { count, increment, decrement } = props;
  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => {
          // dispatch(increment())
          increment();
        }}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => {
          // dispatch(decrement())
          decrement();
        }}
      >
        Decrement
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.value,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
