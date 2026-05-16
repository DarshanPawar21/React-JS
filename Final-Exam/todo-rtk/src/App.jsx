// import Todo from "./screen/todo";
import { Provider } from "react-redux";
import store from "./store/store";
import Todo from "./screen/todo";
const App = () => {
  return (<>
    <Provider store={store}>
      <Todo/>
    </Provider>
  </>)
}
export default App;