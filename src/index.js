import { createRoot } from "react-dom/client";
import MainView from "./components/main-view/main-view";

import "./index.scss";
import { createStore } from "redux";
import todos from "./reducers/index";
import { addTodo, toggleTodo } from "./actions";

const store = createStore(todos);

console.log("Initial State", store.getState());

store.dispatch(addTodo("Dispatch my first action"));
console.log("State after adding first todo", store.getState());

store.dispatch(addTodo("Practice writing code"));
console.log("State after adding second todo", store.getState());

store.dispatch(addTodo("Learn more about JavaScript"));
console.log("State after adding thrid todo", store.getState());

store.dispatch(toggleTodo(0));
console.log("State after toggling first todo", store.getState());

function App() {
  return <MainView />;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
