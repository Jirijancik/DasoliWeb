import React, { useEffect, useState } from "react";
import { CounterWrapper } from "./counter.styles";

const Counter: React.FC<any> = (props) => {
  // label of counter
  // number to increment to
  // duration of count in seconds
  const { label, number, duration } = props.data;

  // number displayed by component
  const [count, setCount] = useState("0");

  useEffect(() => {
    if (props.isVisible) {
      let start = 0;
      // first three numbers from props
      const end = parseInt(number.substring(0, 3));
      // if zero, return
      if (start === end) return;

      // find duration per increment
      let totalMilSecDur = parseInt(duration);
      let incrementTime = (totalMilSecDur / end) * 1000;

      // timer increments start counter
      // then updates count
      // ends if start reaches end
      let timer = setInterval(() => {
        start += 1;
        setCount(String(start) + number.substring(3));
        if (start === end) clearInterval(timer);
      }, incrementTime);
    }
    // dependency array
  }, [number, duration, props.isVisible]);

  return (
    <CounterWrapper>
      <h3
        style={{
          display: "inline-block",
          fontSize: "var(--H3-SIZE)",
          fontWeight: "bold",
        }}
      >
        {label}
      </h3>
      <div style={{ display: "inline-block", fontSize: "var(--H3-SIZE)" }}>
        {count}
      </div>
    </CounterWrapper>
  );
};

export default Counter;
