import { ChildA } from "./ChildA";
import { ChildB } from "./ChildB";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <ChildA />
      <ChildB />
    </div>
  );
}
