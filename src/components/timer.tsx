// import { Component, ReactElement } from "react";

// const LIMIT = 60;
// type State = {
//   timeLeft: number;
// };

// class Timer extends Component<unknown, State> {
//   timerId: NodeJS.Timer | null = null;

//   constructor(props: unknown) {
//     super(props);
//     this.state = { timeLeft: LIMIT };
//   }

//   componentDidMount = (): void => {
//     this.timerId = setInterval(this.tick, 1000);
//   };
//   componentDidUpdate = (): void => {
//     const { timeLeft } = this.state;
//     if (timeLeft === 0) this.reset();
//   };
//   componentWillUnmount = (): void => {
//     if (this.timerId) clearInterval(this.timerId);
//   };
//   tick = (): void => {
//     this.setState((prevState) => ({ timeLeft: prevState.timeLeft - 1 }));
//   };
//   reset = (): void => this.setState({ timeLeft: LIMIT });

//   render = (): ReactElement => {
//     const { timeLeft } = this.state;
//     return (
//       <div>
//         <p>time</p>
//         <p>{timeLeft}</p>
//         <button onClick={this.reset}>redo</button>
//       </div>
//     );
//   };
// }

// export default Timer;
import { FC, useState } from "react";

const Timer: FC = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);
  const reset = () => setCount(0);

  return (
    <div>
      <p>count</p>
      <p>{count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};
export default Timer;
