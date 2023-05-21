import "./App.scss";
import DisplayUsers from "./components/users/DisplayUsers";

function App() {
  return (
    <div className="App bg-secondary">
      <header className="App-header">
        <h1>Score more firebase</h1>
      </header>
      <DisplayUsers />
    </div>
  );
}

export default App;
