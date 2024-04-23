import "./App.css";
import AppRouter from "../router/AppRouter";
// import { ToastProvider } from "../Toast/toast"; // Import ToastProvider

function App() {
  return (
    <div className="App">
      {/* Wrap AppRouter with ToastProvider */}
      {/* <ToastProvider> */}
        <AppRouter />
      {/* </ToastProvider> */}
    </div>
  );
}

export default App;
